import "./css/index.css";
import BasicInfoForm from "./forms/basicInfo";
import WorkExperienceForm from "./forms/WorkExperience";
import ProjectsForm from "./forms/projects";
import EducationForm from "./forms/education";
import AchievementsForm from "./forms/achievements";
import SummaryForm from "./forms/summary";
import OthersForm from "./forms/others";


// import DataProvider from "./context/dataContext";

export default function FillingArea({ CurrentTab }) {
  
  const renderContent = () => {
    switch (CurrentTab) {
      case "Basic Info":
        return <BasicInfoForm />;
      case "Work Experience":
        return <WorkExperienceForm />;
      case "Projects":
        return <ProjectsForm />;
      case "Education":
        return <EducationForm />;
      case "Achievements":
        return <AchievementsForm />;
      case "Summary":
        return <SummaryForm />;
      case "Others":
        return <OthersForm />;

      // Add other cases...
      default:
        return <div>Select a section to begin</div>;
    }
  };

  return (
    <>
    
    <div className="tab-content">{renderContent()}</div>

    
      {/* <h1>Preview</h1> */}
    </>
  );
}
