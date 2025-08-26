import { useParams } from "react-router-dom"
import { projects } from "../../projects"
import styles from './projectpage.module.css'

const ProjectPage = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <h2>Project not found</h2>

  const Component = project.component

  return (
    <div className={styles['project-page']}>
      <h1 className={styles.title}>{project.title}</h1>
      <Component embedded={false} />
    </div>
  )
}

export default ProjectPage