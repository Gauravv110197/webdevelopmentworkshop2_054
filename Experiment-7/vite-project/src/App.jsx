import './App.css'
import StudentCard from './components/StudentCard.jsx'

const students = [
  { name: 'Rahul Sharma', course: 'Computer Science', marks: 85 },
  { name: 'Anita Verma', course: 'Information Technology', marks: 92 },
  { name: 'Rohan Gupta', course: 'Electronics', marks: 78 },
]

function App() {
  return (
    <div className="page">
      <div className="panel">
        <h1>Student Information</h1>
        <div className="cards">
          {students.map((student) => (
            <StudentCard
              key={student.name}
              name={student.name}
              course={student.course}
              marks={student.marks}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
