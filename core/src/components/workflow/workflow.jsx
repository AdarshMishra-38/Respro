import Card from "./card";

export default function Workflow() {
        const Card_data = [
            {
                title: "Choose a Template",
                description: "Select a professionally designed template that suits your style and needs.",
                image: "bi bi-file-earmark-fill"
            },
            {
                title: "Fill in your details",
                description: "Fill in your experience, skills, and projects in our simple form to build your resume.",
                image: "bi bi-info-square-fill"
            },
            {
                title: "Download Your Resume",
                description: "Download your polished resume in PDF or Word format to send to employers.",
                image: "bi bi-file-earmark-arrow-down-fill"
            }
        ]
  return (
    <div className="workflow container border border-danger my-3 p-3">
      <h1>Workflow</h1>
      <div className="Workflow-steps d-flex border border-warnig ">
      <Card data={Card_data[0]} />
      <Card data={Card_data[1]} />
      <Card data={Card_data[2]} />

      </div>
    </div>
  );
}
