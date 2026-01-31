import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { CourseList } from './pages/CourseList.jsx'
import { Practice } from './pages/Practice.jsx'
import { English } from './pages/subject/English.jsx'
import { Math } from './pages/subject/Math.jsx'
import { Pomodoro } from './pages/Pomodoro.jsx'
import { Navbar } from './components/Navbar.jsx'

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/home" element={<ProtectedRoute user={user} ><Dashboard user={user} /></ProtectedRoute>} />} />
        <Route path="/course" element={<ProtectedRoute user={user} ><CourseList user={user} /></ProtectedRoute>} />} />
        <Route path="/practice" element={<ProtectedRoute user={user} ><Practice user={user} /></ProtectedRoute>} />} />
        <Route path="/pomodoro" element={<ProtectedRoute user={user} ><Pomodoro user={user} /></ProtectedRoute>} />} />
        <Route path="/practice/english" element={<ProtectedRoute user={user} ><English user={user} /></ProtectedRoute>} />} />
        <Route path="/practice/math" element={<ProtectedRoute user={user} ><Math user={user} /></ProtectedRoute>} />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
