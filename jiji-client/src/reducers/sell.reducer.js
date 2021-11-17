export const postAdReducer = (state = {}, action) => {
  switch (action.type) {
    case "POSTAD_REQUEST":
      return { loading: true };

    case "POSTAD_SUCCESS":
      return { loading: false, itemInfo: action.payload };

    case "POSTAD_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const allItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ALLITEMS_REQUEST":
      return { loading: true };

    case "ALLITEMS_SUCCESS":
      return { loading: false, allItems: action.payload };

    case "ALLITEMS_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ITEM_DETAILS_REQUEST":
      return { loading: true };

    case "ITEM_DETAILS_SUCCESS":
      return { loading: false, details: action.payload };

    case "ITEM_DETAILS_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const sellerItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELLER_ITEMS_REQUEST":
      return { loading: true };

    case "SELLER_ITEMS_SUCCESS":
      return { loading: false, seller: action.payload };

    case "SELLER_ITEMS_FAILED":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateItemToSoldReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case "UPDATE_ITEM_REQUEST":
      return { loading: true };
    case "UPDATE_ITEM_SUCCESS":
      return { loading: false, item: action.payload };
    case "UPDATE_ITEM_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteItemReducer = (
  state = { seller: { items: [] } },
  action
) => {
  switch (action.type) {
    case "DELETE_ITEM_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_ITEM_SUCCESS":
      return { loading: false, success: true };
    case "DELETE_ITEM_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const itemInterestedPeopleReducer = (state = {}, action) => {
  switch (action.type) {
    case "INTEREST_REQUEST":
      return {
        loading: true,
      };
    case "INTEREST_SUCCESS":
      return { loading: false, people: action.payload };
    case "INTEREST_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const myInterestReducer = (state = {}, action) => {
  switch (action.type) {
    case "MY_INTEREST_REQUEST":
      return {
        loading: true,
      };
    case "MY_INTEREST_SUCCESS":
      return { loading: false, items: action.payload };
    case "MY_INTEREST_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const showInterestReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_INTEREST_REQUEST":
      return {
        loading: true,
      };
    case "SHOW_INTEREST_SUCCESS":
      return { loading: false, showInt: action.payload };
    case "SHOW_INTEREST_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
