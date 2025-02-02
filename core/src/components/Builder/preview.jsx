import { useContext } from "react";
import { DataContext } from "./context/dataContext";
import "./css/preview.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Preview() {
  const { resumeData} = useContext(DataContext);
  console.log(resumeData);
  const template1 = {
    General: "container  p-3 my-1 text-start border-top",
    contact: "d-flex flex-row justify-content-center align-items-center ",
    styles: "fs-6 ps-2 m-0 me-2 ",
    experience_item: "container",
    project_item: "container",
    achievement_item: "container",
  };

  const downloadResume = () => {
    const input = document.querySelector(".resume-container");
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
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
      <div className="d-flex justify-content-end p-3">
        <button className="btn btn-primary" onClick={downloadResume}>
        <i class="bi bi-arrow-90deg-down"></i>
        </button>
      </div>
      <div className="resume-container">
        {/* Basic Info Section */}
        <section>
          <h3>{resumeData.basicInfo[0]?.name}</h3>
          <div className={template1.contact}>
            <p className={template1.styles}>{resumeData.basicInfo[0]?.email}</p> ||
            <p className={template1.styles}>Phone: {resumeData.basicInfo[0]?.phone}</p> ||
            <p className={template1.styles}>
              <a href={resumeData.basicInfo[0]?.linkedin}>
                <i className="bi bi-linkedin"></i>
              </a>
            </p>
            ||
            <p className={template1.styles}>
              <a href={resumeData.basicInfo[0]?.github}>
                <i className="bi bi-github"></i>
              </a>
            </p>
          </div>
          <p className={template1.styles}>Address: {resumeData.basicInfo[0]?.address}</p>
        </section>

        {/* Work Experience Section */}
        <section className={template1.General}>
          <h5>Work Experience:</h5>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className={template1.experience_item}>
              <h6>{exp.company}:</h6>
              <p>{exp.role} ({exp.startDate} - {exp.endDate})</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className={template1.General}>
          <h5>Education:</h5>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h6>{edu.institution}</h6>
              <p>{edu.degree} ({edu.startDate} - {edu.endDate})</p>
              <p>Grade: {edu.grade}, Percentage: {edu.percentage}</p>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className={template1.General}>
          <h5>Projects:</h5>
          {resumeData.projects.map((project, index) => (
            <div key={index} className={template1.project_item}>
              <h6>{project.title}</h6>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
            </div>
          ))}
        </section>

        {/* Achievements Section */}
        <section className={template1.General}>
          <h5>Achievements</h5>
          {resumeData.achievements.map((achievement, index) => (
            <div key={index} className={template1.achievement_item}>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </section>

        {/* Summary Section */}
        {/* <section className={template1.General}>
          <h5>Summary</h5>
          <p>{resumeData.summary}</p>
        </section> */}

        {/* Others Section */}
        {/* <section className={template1.General}>
          <h5>Others</h5>
          <p>{resumeData.others}</p>
        </section> */}
      </div>
    </>
  );
}
