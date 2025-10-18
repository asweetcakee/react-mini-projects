import { useParams } from 'react-router-dom'
import { projects } from '../../showcaseConfig'
import Navigation from '../../components/Navbar/Navigation'
import styles from './projectpage.module.css'

const ProjectPage = () => {
  const { id } = useParams()
  const projectIndex = projects.findIndex(p => p.id === id)
  const project = projects[projectIndex]

  if (!project) return <h2 style={{ color: 'red' }}>Error: Project not found</h2>

  const prevProject = projectIndex > 0
    ? projects[projectIndex - 1]
    : projects[projects.length - 1]
  const nextProject = projectIndex < projects.length - 1
    ? projects[projectIndex + 1]
    : projects[0]

  const Component = project.component

  return (
    <div className={styles['project-page']}>
      <Navigation
        title={project.title}
        prevProjectId={prevProject ? prevProject.id : null}
        nextProjectId={nextProject ? nextProject.id : null}
      />
      <Component embedded={false} />
    </div>
  )
}

export default ProjectPage