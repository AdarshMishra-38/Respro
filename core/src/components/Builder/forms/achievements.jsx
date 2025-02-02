import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function AchievementsForm() {
    const { resumeData, updateResumeData } = useContext(DataContext);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        const tempData = { ...resumeData.achievements[0], [name]: value };
        const updatedData = [tempData]; // Keep it an array
        updateResumeData('achievements', updatedData);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Achievements</h2>
            <form>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="achievement"
                        rows="4"
                        placeholder="List your achievements"
                        name="description"
                        value={resumeData.achievements[0]?.description || ''} // Access first achievement safely
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}
