export default function StudentCard({ name, studentNumber, program }) {
  return (
    <div className="card">
      <div className="card__header">Student</div>
      <div className="card__body">
        <p><span className="card__label">Name</span> {name}</p>
        <p><span className="card__label">Student Number</span> {studentNumber}</p>
        <p><span className="card__label">Program</span> {program}</p>
      </div>
    </div>
  );
}
