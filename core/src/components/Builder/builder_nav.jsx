import{ useState } from "react";
import FillingArea from "./filling_area.jsx";



export default function BuilderNav() {
  const [activeTab, setActiveTab] = useState("Basic Info");

  
  return (
    <div className="builder-nav border border-black">
      <ul className="nav nav-tabs">
        {[
          "Basic Info",
          "Work Experience",
          "Projects",
          "Education",
          "Achievements",
          
        ].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <FillingArea CurrentTab = {activeTab}/>
     
    </div>
  );
}
