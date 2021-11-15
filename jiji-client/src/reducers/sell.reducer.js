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
