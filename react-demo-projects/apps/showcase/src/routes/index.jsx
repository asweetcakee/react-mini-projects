import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ProjectPage from '../pages/ProjectPage/ProjectPage'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects/:id" element={<ProjectPage />} />
  </Routes>
)

export default AppRoutes
