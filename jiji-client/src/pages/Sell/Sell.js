import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Sell.css";
import Nav from "../../components/Navbar/Navbar";
import BackupIcon from "@material-ui/icons/Backup";
import { useDispatch, useSelector } from "react-redux";
import { postAdvert } from "../../actions/sell.action";

const Sell = ({ history }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  const [view, setView] = useState();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const addPhotoHandler = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const imageInputHandler = async (e) => {
    const file = e.target.files[0];
    file ? setImage(file) : setImage(null);
    file ? setView(file) : setView(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (view) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(view);
    } else setPreview(null);
  }, [view]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAdvert(name, userInfo.userId, desc, price, image.url));
  };

  useEffect(() => {
    if (!userInfo) return history.push("/login");
  }, [history, userInfo]);

  const post = useSelector((state) => state.postAd);
  const { loading, itemInfo, error } = post;

  useEffect(() => {
    if (itemInfo?.success === true)
      return (document.location.href = `/adverts`);
  }, [itemInfo?.success]);

  if (!name || !desc || !image || !price) {
  }
  console.log(image);

  return (
    <>
      <Nav />
      <form className="post-adform" onSubmit={handleSubmit}>
        <input
          style={{ display: "none" }}
          type="file"
          classname="img"
          name="img"
          accept="image/*"
          ref={fileInputRef}
          onChange={imageInputHandler}
        />
        <div className="image-prev">
          {preview ? (
            <img
              src={preview}
              alt="imag-prev"
              className="preview-image"
              onClick={() => setImage(null)}
            />
          ) : (
            <button onClick={addPhotoHandler} className="item-btn">
              upload item image
              <BackupIcon className="upload-icon" />
            </button>
          )}
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="reg-input"
          placeholder="Name of item you want to sell?"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="reg-input"
          rows="10"
          cols="10"
          placeholder="Description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="reg-input"
          type="number"
          placeholder="Price"
        />
        <button type="submit" className="reg-btn">
          {loading ? "Loading..." : "POST"}
        </button>
        {error && <p className="error-message">failed: Please try again</p>}
      </form>
    </>
  );
};

export default Sell;
