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
  
