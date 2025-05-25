import Card from "../workflow/card"


export default function Feature(){
 

    const Card_data = [
        {
            title: "Fast Performance",
            description: "Experience blazing-fast speed with our optimized algorithms and efficient workflows.",
            image: "bi bi-speedometer"
        },
        {
            title: "Mobile Friendly",
            description: "Our platform is designed to work seamlessly across all devices, including smartphones and tablets.",
            image: "bi bi-phone-flip"
        },
        {
            title: "Data Security",
            description: "Protect your data with advanced security measures and cutting-edge encryption.",
            image: "bi bi-fingerprint"
        },
        {
            title: "iteractive UI",
            description: "Our platform is designed to work seamlessly across all devices, including smartphones and tablets.",
            image: "bi bi-hand-index-thumb-fill"
        }
    ]
    return (
        <div className="feature container my-3 p-3">
              <h1>Features</h1>
              <div className="feature-list d-flex border border-warnig ">
              <Card data={Card_data[0]} />
              <Card data={Card_data[1]} />
              <Card data={Card_data[2]} />
              <Card data={Card_data[3]} />
        
              </div>
            </div>
    )
}