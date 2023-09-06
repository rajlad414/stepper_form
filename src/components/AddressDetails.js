import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CONSTANTS from "../const";

function AddressDetails(props){
    const city = ["Ahmedabad", "Navsari", "Surat", "Vadodara", "Anand", "Rajkot"];
    const state = ["Gujarat", "Maharastra", "J&K", "Rajasthan", "Delhi"];
    const country = ["India", "UK", "America", "China", "Iran", "Japan"];
    const dispatch = useDispatch();

    const addressDetail = useSelector(state => state.formData.addressDetail);
    const [formData, setFormData] = useState({...addressDetail});
    const [nextBtn, setNextBtn] = useState(false);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setNextBtn(true);
        let hasError = false;
        for(var key in formData){
            if(!formData[key]) hasError = true;;
        }
        if(hasError){
            return;
        } else{
            dispatch({type: CONSTANTS.STORE_ACTIONS.SAVE_ADDRESS_DETAIL, payload: formData});
            props.onNextClick();
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBackButtonClick = () => {
        props.onBackClick();
    }

    return (
        <div>
            <form className={`my-3 ${nextBtn?" was-validated" : ""}`} onSubmit={handleFormSubmit}>
                <div className="row mt-1">
                    <div  className="col-md-6 mb-2 ">
                        <input 
                            type="text" 
                            name="addressline1" 
                            id="addressline1" 
                            className="form-control custom-control-input" 
                            placeholder="Address Line 1"
                            value={formData.addressline1} 
                            onChange={handleInputChange}
                            required
                        />
                        <div className={`${!formData.addressline1 && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.ADRESSLINE1}
                        </div>
                    </div>
                    <div  className="col-md-6 mb-2">
                        <input 
                            type="text" 
                            name="addressline2" 
                            id="addressline2" 
                            className="form-control custom-control-input" 
                            placeholder="Address Line 2" 
                            value={formData.addressline2}
                            onChange={handleInputChange}
                            required
                        />
                        <div className={`${!formData.addressline2 && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.ADRESSLINE2}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <div className="form-group">
                            <select 
                                className="form-control custom-select" 
                                name="city" 
                                placeholder="City"
                                value={formData.city} 
                                onChange={handleInputChange}
                                required
                            >
                            <option value="" disabled hidden>
                                City
                            </option>
                                {city.map(item => {
                                    return (
                                        <option value={item}  id={item} key={item}>{item}</option>
                                    )
                                })}
                            </select>
                            <div className={`${!formData.city && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                                {CONSTANTS.VALIDATION_MESSAGE.CITY}
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-6 mb-2">
                        <div className="form-group">
                            <select 
                                className="form-control custom-select" 
                                name="state" 
                                value={formData.state} 
                                onChange={handleInputChange}
                                required
                            >
                            <option value="" disabled hidden>
                                State
                            </option>
                                {state.map(item => {
                                    return (
                                        <option value={item}  id={item} key={item}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={`${!formData.state && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.STATE}
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mb-2">
                        <div className="form-group">
                            <select 
                                className="form-control custom-select" 
                                name="country" 
                                placeholder="Country" 
                                value={formData.country} 
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" disabled hidden>
                                    Country
                                </option>
                                {country.map(item => {
                                    return (
                                        <option value={item}  id={item} key={item}>{item}</option>
                                    )
                                })}
                            </select>
                            <div className={`${!formData.country && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                                {CONSTANTS.VALIDATION_MESSAGE.COUNTRY}
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-6 mb-2">
                        <input 
                            type="text" 
                            name="pinCode" 
                            id="pinCode" 
                            className="form-control custom-control-input" 
                            placeholder="Pin Code" 
                            value={formData.pinCode}
                            onChange={handleInputChange}
                            required
                        />
                        <div className={`${!formData.pinCode && nextBtn? "invalid-feedback d-flex" : "d-none" }`}>
                            {CONSTANTS.VALIDATION_MESSAGE.PINCODE}
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-start">
                    <button className="btn btn-primary" onClick={handleBackButtonClick}>{CONSTANTS.LABELS.BACK_BUTTON}</button>
                    <div className="mx-1"></div> 
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                        {CONSTANTS.LABELS.NEXT_BUTTON}
                    </button>
                </div>
            </form>
        </div>
    );
}


  
export default AddressDetails;