import CourseCard from "../components/CourseCard.jsx";

export default function Courses() {
  return (
    <section>
      <h1>Courses</h1>
      <div className="grid">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
}
