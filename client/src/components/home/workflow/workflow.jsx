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
         const UploadWorkflow=[
         {
                title: "Upload Your Resume",
                description: "Upload your pre-made resume to get personalized score.",
                image: "bi bi-file-earmark-fill"
            },
            {
                title: "Enter details",
                description: "Fill in your experience, skills, and projects in our simple form to build your resume.",
                image: "bi bi-info-square-fill"
            },
            {
                title: "Get your score",
                description: "Get your domain specific Resume score.",
                image: "bi bi-check-circle"
            }
    ]
  return (
    <>
    <div className="workflow container my-3 p-3">
      <h1>How it Works ?</h1>
      <h3 className="text-secondary fs-5">Create your professional resume in just 3 simple steps
</h3>
      <div className="Workflow-steps d-flex border border-warnig ">
      <Card data={Card_data[0]} />
      <Card data={Card_data[1]} />
      <Card data={Card_data[2]} />

      </div>
    </div>
    <div className="workflow container my-3 p-3">
      <h1>OR</h1>
      <div className="Workflow-steps d-flex border border-warnig ">
      <Card data={UploadWorkflow[0]} />
      <Card data={UploadWorkflow[1]} />
      <Card data={UploadWorkflow[2]} />

      </div>
    </div>

    </>
  );
}
