import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function OthersForm() {
     const { resumeData, updateResumeData } = useContext(DataContext); 
        console.log(resumeData);
    
        const handleChange = (e) => {
            const { value } = e.target;
            const updatedData = value;
            updateResumeData('others', updatedData);
        };
    return (
        <div className="container mt-4">
            <h2 className="mb-3">Other Information</h2>
            <form>
                <div className="mb-3">
                    
                    <textarea className="form-control" id="otherInfo" rows="4" placeholder="Provide any additional relevant information" onChange={handleChange} name="others" value={resumeData.others}></textarea>
                </div>
            </form>
        </div>
    );
}