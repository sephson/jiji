import axios from "axios";
export const registration =
  (email, password, first_name, last_name, state_residence) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "USER_REGISTER_REQUEST",
      });
      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(
        "api/user/register",
        { email, password, first_name, last_name, state_residence },
        config
      );

      dispatch({
        type: "USER_REGISTER_SUCCESS",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAILED",
        payload: error,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });
    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      "api/user/login",
      { email, password },
      config
    );

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILED",
      payload: error,
    });
  }
};
