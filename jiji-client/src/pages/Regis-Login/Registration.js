import React, { useEffect } from "react";
import "./Modal.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../actions/users.action";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const onSubmit = (data) => {
    dispatch(
      registration(
        data.email,
        data.password,
        data.first_name,
        data.last_name,
        data.state_residence
      )
    );
  };

  useEffect(() => {
    if (userInfo?.success === true) {
      document.location.href = `/`;
    }
  }, [userInfo?.success]);

  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
        <p>Register via email and phone</p>
        <input
          name="email"
          autoComplete="off"
          {...register("email", { required: true })}
          className="reg-input"
          placeholder="Enter email"
        />

        {errors.email?.type === "required" && (
          <p className="error-message">Email is required</p>
        )}

        <input
          name="password"
          autoComplete="off"
          {...register("password", { required: true })}
          className="reg-input"
          placeholder="Password"
          type="password"
        />

        {errors.password?.type === "required" && (
          <p className="error-message">Password is required </p>
        )}

        <input
          name="first_name"
          {...register("first_name", { required: true })}
          className="reg-input"
          placeholder="Firstname"
        />

        {errors.firstname?.type === "required" && (
          <p className="error-message">firstname is required </p>
        )}

        <input
          name="last_name"
          type="text"
          {...register("last_name", { required: true })}
          className="reg-input"
          placeholder="Lastname"
        />

        <select
          name="state_residence"
          {...register("state_residence", { required: true })}
          style={{ color: "grey" }}
          className="reg-input"
          id="state_residence"
        >
          <option className="reg-input" id="lagos" value="lagos">
            Lagos
          </option>
          <option
            style={{ color: "grey" }}
            className="reg-input"
            id="FCT"
            value="FCT"
          >
            Abuja
          </option>
        </select>

        {loading ? (
          <button style={{ "font-weight": "bold" }} className="reg-btn">
            Loading...
          </button>
        ) : (
          <input className="reg-btn" disabled={!isValid} type="submit" />
        )}

        <div className="acctsignin">
          <p>Already have an account ? </p>
          <p style={{ color: "#3db83a" }}>
            <Link to="/login"> Sign in </Link>
          </p>
        </div>
        {error && <p className="error-message">registration failed</p>}
      </form>
    </div>
  );
};

export default Registration;
