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
          authorisation: `Bearer ${userInfo.token}`,
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

export const items = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALLITEMS_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get("/api/item/testtest", config);

    dispatch({
      type: "ALLITEMS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALLITEMS_FAILED",
      payload: error,
    });
  }
};

export const itemDetailsInfo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ITEM_DETAILS_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`/api/item/${id}/one`, config);

    dispatch({
      type: "ITEM_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "ITEM_DETAILS_FAILED",
      payload: e,
    });
  }
};

export const sellerItems = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "SELLER_ITEMS_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorisation: `Bearer ${userInfo.token}`,
      },
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`api/item/all-seller-items`, config);

    dispatch({
      type: "SELLER_ITEMS_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "SELLER_ITEMS_FAILED",
      payload: e,
    });
  }
};

export const updateItemToSold = (itemId, sellerId) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_ITEM_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/item/${itemId}`,
      { sellerId },
      config
    );

    dispatch({
      type: "UPDATE_ITEM_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_ITEM_FAIL",
      payload: error,
    });
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_ITEM_REQUEST",
    });

    const config = {
      "Content-Type": "application/json",
    };

    await axios.delete(`/api/item/${itemId}`, config);

    dispatch({
      type: "DELETE_ITEM_SUCCESS",
    });
  } catch (e) {
    dispatch({
      type: "DELETE_ITEM_FAILED",
      payload: e,
    });
  }
};

export const itemInterestedPeople = (itemId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "INTEREST_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorisation: `Bearer ${userInfo.token}`,
      },
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`/api/item/${itemId}`, config);

    dispatch({
      type: "INTEREST_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "INTEREST_FAILED",
      payload: e,
    });
  }
};

export const trackMyItems = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "MY_INTEREST_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorisation: `Bearer ${userInfo.token}`,
      },
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`/api/item/track`, config);

    dispatch({
      type: "MY_INTEREST_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "MY_INTEREST_FAILED",
      payload: e,
    });
  }
};

export const showInterest = (itemId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "SHOW_INTEREST_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        authorisation: `Bearer ${userInfo?.token}`,
      },
      "Content-Type": "application/json",
    };

    const { data } = await axios.post(
      `/api/item/show-interest/${itemId}`,
      {},
      config
    );

    dispatch({
      type: "SHOW_INTEREST_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "SHOW_INTEREST_FAILED",
      payload: e,
    });
  }
};
