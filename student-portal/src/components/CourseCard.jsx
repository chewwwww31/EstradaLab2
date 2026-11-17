export default function CourseCard({ code, title, units }) {
  return (
    <div className="card">
      <div className="card__header">Course</div>
      <div className="card__body">
        <p><span className="card__label">Course Code</span> {code}</p>
        <p><span className="card__label">Title</span> {title}</p>
        <p><span className="card__label">Units</span> {units}</p>
      </div>
    </div>
  );
}
