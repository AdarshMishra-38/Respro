export default function Card({ data }) {
  const { title, description, image } = data;
  return (
    <div className="card container my-card-hover  m-3 p-3 ">
      <i className={`${image} fs-1 text-main`}></i>
      <h1 className="fs-3 text-main">{title}</h1>
      <p className="fs-6 text-secondary">{description}</p>
    </div>
  );
}
