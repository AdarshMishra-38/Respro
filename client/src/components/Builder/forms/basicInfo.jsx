// BasicInfoForm.jsx
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function BasicInfoForm() {
    const { resumeData, updateResumeData } = useContext(DataContext); 


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const tempData = { ...resumeData.basicInfo[0], [name]: value };
        const updatedData = [tempData]; // Keep it an array
        updateResumeData('basicInfo', updatedData);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Basic Information</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label d-block text-start ms-1">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" onChange={handleChange} name="name" value={resumeData.basicInfo[0]?.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label d-block text-start ms-1">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange} name="email" value={resumeData.basicInfo[0]?.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label d-block text-start ms-1">Phone Number</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" onChange={handleChange} name="phone" value={resumeData.basicInfo[0]?.phone}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="github" className="form-label d-block text-start ms-1">Github</label>
                    <input className="form-control" type="text" id="github"  placeholder="profile url ..." onChange={handleChange} name="github" value={resumeData.basicInfo[0]?.github}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="linkedin" className="form-label d-block text-start ms-1">Linkedin</label>
                    <input className="form-control"  type="text" id="linkedin"  placeholder="profile url ..." onChange={handleChange} name="linkedin" value={resumeData.basicInfo[0]?.linkedin}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label d-block text-start ms-1">Address</label>
                    <textarea className="form-control" id="address" rows="3" placeholder="Enter your address" onChange={handleChange} name="address" value={resumeData.basicInfo[0]?.address}></textarea>
                </div>
            </form>
        </div>
    );
}