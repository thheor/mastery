import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { Login } from './pages/Login.jsx'
import { Profile } from './pages/Profile.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { CourseList } from './pages/CourseList.jsx'
import { Practice } from './pages/Practice.jsx'
import { English } from './pages/subject/English.jsx'
import { Math } from './pages/subject/Math.jsx'
import { Pomodoro } from './pages/Pomodoro.jsx'
import { Navbar } from './components/Navbar.jsx'

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [incorrect, setIncorrect] = useState(null);

  return (
    <BrowserRouter>
      <Navbar name={name} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} setName={setName} setCorrect={setCorrect} setIncorrect={setIncorrect} />} />
        <Route path="/profile" element={<Profile user={user} name={name} correct={correct} incorrect={incorrect} />} />
        <Route path="/" element={<Dashboard user={user} /> } />
        <Route path="/course" element={<CourseList user={user} />} />
        <Route path="/practice" element={<Practice user={user} />} />
        <Route path="/pomodoro" element={<Pomodoro user={user} />} />
        <Route path="/practice/english" element={<English user={user} />} />
        <Route path="/practice/math" element={<Math user={user} />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
