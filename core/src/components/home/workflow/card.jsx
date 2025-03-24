export default function Card({ data }) {
  const { title, description, image } = data;
  return (
    <div className="card container border border-danger m-3 p-3 ">
      <i className={`${image} fs-1`}></i>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
