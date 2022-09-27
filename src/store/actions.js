// import { fetchById } from "../services/apiServices";

export const ADD_ITEMS = "ADD_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ACTIVE_INDEX = "ADD_ACTIVE_INDEX";
export const RESET = "RESET";
export const ADD_USER_DETAILS = "ADD_USER_DETAILS"

export const addItems = (payload) => {
  return {
    type: ADD_ITEMS,
    payload,
  };
};

export const removeItem = (index) => {
  return {
    type: REMOVE_ITEM,
    payload: index,
  };
};

export const addActiveIndex = (payload) => {
  return {
    type: ADD_ACTIVE_INDEX,
    payload,
  }
}

export const removeActiveIndex = (payload) => {
  return {
    type: RESET,
    payload,
  }
}

export const addUserDetails = (payload) => {
  return {
    type: ADD_USER_DETAILS,
    payload,
  }
}

// export const getDetailsById = (id) => async (dispatch) => {
//   console.log(id);
//   try{
//     const res = await fetchById(id);
//     dispatch(addUserDetails(res));
//   } catch (e) {
//     console.log(e);
//   }
// }
