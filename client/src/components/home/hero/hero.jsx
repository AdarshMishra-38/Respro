import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero container my-3 p-3">
      <h1>Build Your Resume <span className="fw-bold fs-1 text-main"> With Resu Pro</span></h1>
      <p className="fs-5 text-secondary">
      Effortlessly Craft a Standout Resume with Our AI-Powered Builder, Tailored to Your Needs.
      </p>
  
      <NavLink to='/editor' className="btn my-btn mt-2 ">Create Resume</NavLink>
      <NavLink to='https://resupro.streamlit.app/' className="btn my-btn mt-2 ms-3" target="_blank">Upload Resume</NavLink>
    </div>
  );
}
