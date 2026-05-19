function StudentCard({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2 className="student-name">{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  )
}

export default StudentCard
