import StudentCard from "../components/StudentCard.jsx";

export default function Student() {
  return (
    <section>
      <h1>Students</h1>
      <div className="grid">
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </section>
  );
}
