const initialState = {
  userDetails: [],
  indexActive: [],
  itemsInCart: [],
  baseUrl: "https://images.unsplash.com",
  productList: [
    {
      id: 1,
      url:
        "/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      name: "nike",
    },
    {
      id: 2,
      url:
        "/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      name: "adidas",
    },
  ],
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return {
        ...state,
        counter: state.counter + 1,
        itemsInCart: [...state.itemsInCart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (element, index) => index !== action.payload
        ),
        counter: state.counter - 1,
      };
      case "ADD_ACTIVE_INDEX":
      return {
        ...state,
        indexActive: [...state.indexActive, action.payload],
      };
      case "RESET":
      return {
        indexActive: [action.payload],
      };
      case "ADD_USER_DETAILS":
        return {
          ...state,
          userDetails: [...state.userDetails, action.payload]
        };
    default:
      return state;
  }
};

export default reducer;
