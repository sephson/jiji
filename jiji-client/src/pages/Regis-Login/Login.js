import React, { useEffect } from "react";
import "./Modal.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/users.action";
import { Link } from "react-router-dom";
const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const onSubmit = (data) => {
    dispatch(login(data.email, data.password));
  };

  useEffect(() => {
    if (userInfo?.success === true) {
      document.location.href = `/`;
    }
  }, [userInfo?.success]);
  return (
    <div className="modal">
      <form onSubmit={handleSubmit(onSubmit)} className="modal-content">
        <p>Login with email and phone</p>
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

        {loading ? (
          <button style={{ "font-weight": "bold" }} className="reg-btn">
            Loading...
          </button>
        ) : (
          <input className="reg-btn" disabled={!isValid} type="submit" />
        )}

        <div className="acctsignin">
          <p>you dont have an account ? </p>
          <p style={{ color: "#3db83a" }}>
            <Link to="/register"> Register </Link>
          </p>
        </div>
        {error && <p className="error-message">Wrong email or password</p>}
      </form>
    </div>
  );
};

export default LoginModal;
