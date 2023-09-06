import CONSTANTS from "../const";

const initialState = {
    userInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        birthday: "",
        height: "",
        weight: "",
        gender: "",
        maritalStatus: "",
        age:"",
        bloodGroup: ""
    },
    addressDetail: {
        addressline1: "",
        addressline2: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    },
  };
  
  const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.STORE_ACTIONS.SAVE_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case CONSTANTS.STORE_ACTIONS.SAVE_ADDRESS_DETAIL:
            return {
                ...state,
                addressDetail: action.payload,
            };
        default:
            return state;
    }
};
  
export default formDataReducer;
  