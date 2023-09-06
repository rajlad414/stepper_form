import { useSelector } from "react-redux";
import '../App.css';

function ThanksComponent(){
    let formData = useSelector(state => state.formData);
    formData = {...formData.userInfo, ...formData.addressDetail};
    return (
        <div className="my-4">
            <h1 className="text-success d-flex">Data Added Successfully</h1>
            <table className="table table-align">
                <tbody >
                    {
                        Object.keys(formData).map(key => (
                            <tr key={key}>
                                <td>{capitalizeFirstLetter(key)}</td>
                                <td>{formData[key]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default ThanksComponent;