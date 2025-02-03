import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function AchievementsForm() {
    const { resumeData, updateResumeData } = useContext(DataContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...resumeData.achievements];
        updatedData[index] = { ...updatedData[index], [name]: value };
        updateResumeData("achievements", updatedData);
    };

    const handleAddAchievement = () => {
        const updatedData = [...resumeData.achievements, { description: "" }];
        updateResumeData("achievements", updatedData);
        setActiveIndex(updatedData.length - 1);
    };

    const handleRemoveAchievement = (index) => {
        const updatedData = [...resumeData.achievements];
        updatedData.splice(index, 1);

        if (updatedData.length === 0) {
            updateResumeData("achievements", [{ description: "" }]); // Ensure at least one field remains
            setActiveIndex(0);
        } else {
            updateResumeData("achievements", updatedData);
            setActiveIndex(Math.max(0, index - 1)); // Move to previous tab if possible
        }
    };

    return (
        <div className="container mt-4">
            {/* Add Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Achievements</h2>
                <button className="btn btn-success" onClick={handleAddAchievement}>
                    + Add
                </button>
            </div>

            {/* Tabs for Achievements */}
            <ul className="nav nav-pills mb-3">
                {resumeData.achievements.map((_, index) => (
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link d-flex align-items-center ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                            style={{ position: "relative", paddingRight: "30px" }}
                        >
                            Achievement {index + 1}
                            <span
                                className="ms-2 text-white"
                                style={{
                                    position: "absolute",
                                    right: "8px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    color: "#fff",
                                    padding: "2px 6px",
                                    background:"transparent",
                                }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents switching tabs when clicking ❌
                                    handleRemoveAchievement(index);
                                }}
                            >
                               <i className="bi bi-x-square text-danger"></i>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Achievement Input Field */}
            <form>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="List your achievements"
                        name="description"
                        value={resumeData.achievements[activeIndex]?.description || ""}
                        onChange={(e) => handleChange(e, activeIndex)}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}
