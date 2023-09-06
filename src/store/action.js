import CONSTANTS from "../const";

export const saveUserInfo = (userInfo) => {
    return {
        type: CONSTANTS.STORE_ACTIONS.SAVE_USER_INFO,
        payload: userInfo,
    };
};

export const saveAddressDetail = (addressDetail) => {
    return {
        type: CONSTANTS.STORE_ACTIONS.SAVE_ADDRESS_DETAIL,
        payload: addressDetail,
    };
};
  
  