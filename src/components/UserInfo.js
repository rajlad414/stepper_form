import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CONSTANTS from "../const";

function UserInfo(props) {
    const GENDER = ["Male", "Female"];
    const MARITAL_STATUSES = ["Single", "Married", "Divorced", "Widowed"];
    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.formData.userInfo);
    const [formData, setFormData] = useState({...userInfo});
    const [nextBtn, setNextBtn] = useState(false);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setNextBtn(true);
        let hasError = false;
        for(var key in formData){
            if(!formData[key]) hasError = true;;
        }
        if(hasError){
            return;
        } else{
            dispatch({type:CONSTANTS.STORE_ACTIONS.SAVE_USER_INFO, payload: formData});
            props.onSubmitForm()
        } 
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <form className={`my-3 ${nextBtn?" was-validated" : ""}`} onSubmit={handleFormSubmit}>
                <div className="row mt-1">
                    <div className="col-md-6 mb-2 ">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control custom-control-input"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleInputChange} 
                            required
                        />
                        <div className={`${!formData.firstName && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.FIRST_NAME}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <input
                            type="text"
                            name="middleName"
                            id="middleName"
                            className="form-control custom-control-input"
                            placeholder="Middle name"
                            value={formData.middleName}
                            onChange={handleInputChange} 
                            required
                        />
                        <div className={`${!formData.middleName && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.MIDDLE_NAME}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            className="form-control custom-control-input" 
                            placeholder="Last name" 
                            value={formData.lastName}
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.lastName && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.LAST_NAME}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <input 
                            type="number" 
                            name="mobileNo" 
                            id="mobileNo" 
                            className="form-control custom-control-input" 
                            placeholder="Mobile No" 
                            value={formData.mobileNo}
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.mobileNo && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.MOBILE_NO}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <input 
                            type="mail" 
                            name="email" 
                            id="email" 
                            className="form-control custom-control-input" 
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.email && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.EMAIL}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <input 
                            type="text" 
                            name="birthday" 
                            id="birthday" 
                            className="form-control custom-control-input" 
                            placeholder="Birthday"
                            value={formData.birthday}
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.birthday && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.BIRTHDAY}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <input 
                            type="number" 
                            name="age" 
                            id="age" 
                            className="form-control custom-control-input" 
                            placeholder="Age" 
                            value={formData.age}
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.age && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.AGE}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <input 
                            type="text" 
                            name="bloodGroup" 
                            id="bloodGroup" 
                            className="form-control custom-control-input" 
                            placeholder="Blood Group"
                            value={formData.bloodGroup} 
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.bloodGroup && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.BLOODGROUP}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <input 
                            type="number" 
                            name="height" 
                            id="height" 
                            className="form-control custom-control-input" 
                            placeholder="Height" 
                            value={formData.height}
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.height && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.HEIGHT}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <input 
                            type="number" 
                            name="weight" 
                            id="weight" 
                            className="form-control custom-control-input" 
                            placeholder="Weight"
                            value={formData.weight} 
                            onChange={handleInputChange} 
                            required/>
                        <div className={`${!formData.weight && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.WEIGHT}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <label className="form-label d-flex">{CONSTANTS.LABELS.GENDER}</label>
                        <div className="d-flex">
                            {GENDER.map(item => {
                                return (
                                    <div className="form-checkform-check-inline mx-1 d-inline-block" key={item}>
                                        <input className="form-check-input" type="radio" name="gender" id={item} value={item}
                                            checked={formData.gender === item}
                                            onChange={handleInputChange} 
                                            required/>
                                        <label className="form-check-label mx-1" htmlFor={item}>{item}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${!formData.gender && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.GENDER}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label d-flex">{CONSTANTS.LABELS.MARITAL_STATUS}</label>
                        <div className="d-flex">
                            {MARITAL_STATUSES.map(maritalStatus => {
                                return (
                                    <div className="form-checkform-check-inline mx-1 d-inline-block" key={maritalStatus}>
                                        <input className="form-check-input" type="radio" name="maritalStatus" id={maritalStatus} value={maritalStatus} key={maritalStatus}
                                            checked={formData.maritalStatus === maritalStatus}
                                            onChange={handleInputChange}
                                            required />
                                        <label className="form-check-label mx-1" htmlFor={maritalStatus}>{maritalStatus}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`${!formData.maritalStatus && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.MARITAL_STATUS}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <button className="btn btn-primary" onClick={handleFormSubmit}>
                        {CONSTANTS.LABELS.NEXT_BUTTON}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserInfo;