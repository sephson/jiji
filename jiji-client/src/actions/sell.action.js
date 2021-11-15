import axios from "axios";
export const postAdvert =
  (name, sellerId, description, price, image) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "POSTAD_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorisation: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "api/item",
        { name, sellerId, description, price, image },
        config
      );

      dispatch({
        type: "POSTAD_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTAD_FAILED",
        payload: error,
      });
    }
  };
