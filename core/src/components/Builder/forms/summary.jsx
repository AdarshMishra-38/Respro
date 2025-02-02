import { useContext } from "react";
import { DataContext } from "../context/dataContext";


export default function SummaryForm() {

     const { resumeData, updateResumeData } = useContext(DataContext); 
            console.log(resumeData);
        
            const handleChange = (e) => {
                const { value } = e.target;
                const updatedData = value;
                updateResumeData('summary', updatedData);
            };
    return (
        <div className="container mt-4">
            <h2 className="mb-3">Professional Summary</h2>
            <form>
                <div className="mb-3">
                    
                    <textarea className="form-control" id="summary" rows="4" placeholder="Write a brief professional summary" onChange={handleChange} name="summary" value={resumeData.summary}></textarea>
                </div>
            </form>
        </div>
    );
}