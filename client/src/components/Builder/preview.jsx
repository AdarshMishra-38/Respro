import { useContext, useState } from "react"; // Import React hooks
import { DataContext } from "./context/dataContext"; // Import context
import "./css/preview.css";                   // Import custom CSS
import html2canvas from "html2canvas";        // Import for PDF generation
import jsPDF from "jspdf";                    // Import for PDF generation
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



export default function Preview({ onGetCategory, category, message }) {
  const { resumeData } = useContext(DataContext); // Access resumeData from context
  

  // State to manage selected template
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  // Template styles
  const templates = {
    template1: {
      General: "container d-flex justify-content-evenly p-2 my-2 text-start",
      contact: "d-flex flex-row justify-content-center align-items-center",
      styles: "fs-6 ps-2 m-0 me-2 text-secondary",
      subheading: "mt-3 p-2 border-bottom",
      experience_item: "container",
      project_item: "container",
      achievement_item: "container",
    },
    template2: {
      General: "container d-flex flex-column p-2 my-2 text-start",
      contact: "d-flex flex-row justify-content-center align-items-center",
      styles: "fs-6 ps-2 m-0 me-2 text-secondary",
      subheading: "mt-1 p-2 text-start border-bottom",
      experience_item: "container my-2",
      project_item: "container my-2",
      achievement_item: "container my-2",
    },
    template3: {
      General: "container d-grid grid-template-columns: 1fr 1fr p-2 my-2 text-start",
      contact: "d-flex flex-row justify-content-center align-items-center",
      styles: "fs-6 ps-2 m-0 me-2 text-secondary",
      subheading: "mt-1 p-2 bg-light border-bottom",
      experience_item: "container my-2 p-2",
      project_item: "container my-2 p-2",
      achievement_item: "container my-2 p-2",
    },
    template4: {
      General: "container d-flex flex-column p-2 my-2 text-start bg-light",
      contact: "d-flex flex-row justify-content-center align-items-center",
      styles: "fs-6 ps-2 m-0 me-2 text-secondary",
      subheading: "mt-1 text-start p-2 border-bottom",
      experience_item: "container my-1 p-1 bg-light",
      project_item: "container my-1 p-1 bg-light",
      achievement_item: "container my-1 p-1 bg-light",
    }
  };

  // Function to download resume as PDF
  const downloadResume = () => {
    const input = document.querySelector(".resume-container");
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  return (
    <>
    {/* Display Category and Message */}
    {(category || message) && (
          <div className="mt-3">
            {category && <p className="fw-3 fs-4"><strong>Predicted Category:</strong> {category}</p>}
            {message && (
              <div className={`alert ${message.includes('failed') ? 'alert-danger' : 'alert-success'}`} role="alert">
                {message}
              </div>
            )}
          </div>
        )}
      <div className="d-flex justify-content-between p-3">
        {/* Template Dropdown */}
        <select
          className="form-select w-auto"
          onChange={(e) => setSelectedTemplate(e.target.value)}
          value={selectedTemplate}
        >
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
          <option value="template3">Template 3</option>
          <option value="template4">Template 4</option>
        </select>

        {/* Get Category Button */}
        <button
          className="btn btn-outline-danger"
          onClick={onGetCategory}
        >
          Get Category
        </button>

        {/* Download Button */}
        <button className="btn my-btn" onClick={downloadResume}>
          <i className="bi bi-arrow-90deg-down"></i> Download PDF
        </button>
      </div>

      {/* Resume Display */}
      <div className={`resume-container ${selectedTemplate}`}>
        {/* Basic Info */}
        <section>
          <h3>{resumeData.basicInfo[0]?.name || 'Name'}</h3>
          <div className={templates[selectedTemplate].contact}>
            <p className={templates[selectedTemplate].styles}>{resumeData.basicInfo[0]?.email || 'Email'}</p> ||
            <p className={templates[selectedTemplate].styles}>Phone: {resumeData.basicInfo[0]?.phone || 'Phone'}</p> ||
            <p className={templates[selectedTemplate].styles}>
              <a href={resumeData.basicInfo[0]?.linkedin || '#'} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </p> ||
            <p className={templates[selectedTemplate].styles}>
              <a href={resumeData.basicInfo[0]?.github || '#'} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </p>
          </div>
          <p className={templates[selectedTemplate].styles}>Address: {resumeData.basicInfo[0]?.address || 'Address'}</p>
        </section>

        {/* Work Experience */}
        <h5 className={templates[selectedTemplate].subheading}>Work Experience:</h5>
        <section className={templates[selectedTemplate].General}>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className={templates[selectedTemplate].experience_item}>
              <h6>{exp.company}</h6>
              <p>{exp.role} ({exp.startDate} - {exp.endDate})</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <h5 className={templates[selectedTemplate].subheading}>Education:</h5>
        <section className={templates[selectedTemplate].General}>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h6>{edu.institution}</h6>
              <p>{edu.degree} ({edu.startDate} - {edu.endDate})</p>
              <p>Grade: {edu.grade}, Percentage: {edu.percentage}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <h5 className={templates[selectedTemplate].subheading}>Projects:</h5>
        <section className={templates[selectedTemplate].General}>
          {resumeData.projects.map((project, index) => (
            <div key={index} className={templates[selectedTemplate].project_item}>
              <h6>{project.title}</h6>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <h5 className={templates[selectedTemplate].subheading}>Achievements</h5>
        <section className={templates[selectedTemplate].General}>
          {resumeData.achievements.map((achievement, index) => (
            <div key={index} className={templates[selectedTemplate].achievement_item}>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </section>

        
      </div>
    </>
  );
}