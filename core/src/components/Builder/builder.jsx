import Details from "./details";
import Preview from "./preview";
import "./css/index.css";


export default function Builder() {
 
  
  return (


    <div className="bulder container border border-warning fit-content">
      <div className="row">
        <div className="col-6 details custom-width border border-danger">
          <Details />
        </div>
        <div className="col-6 preview custom-width border border-danger">
          <Preview />
        </div>
      </div>
    </div>
  );
}
