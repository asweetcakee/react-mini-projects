import { useState } from "react"
import { projectTypes } from "../../projects"
import { Link } from "react-router-dom"
import styles from './projectcard.module.css'

const ProjectCard = ({ project }) => {
  const [showPreview, setShowPreview] = useState(project.type === projectTypes.small)
  const Component = project.component

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>
      
      {/* Inline demo project */}
      {showPreview && (
        <div className={styles['demo-wrapper']}>
          <Component embedded />
        </div>
      )}

      {project.type === projectTypes.medium && !showPreview && (
        <button className={styles.btn} onClick={ () => setShowPreview(true) }>Preview project</button>
      )}

      {project.type === projectTypes.large && (
        <Link to={`/projects/${project.id}`}>View full project</Link>
      )}

      {/* Labels */}
      <div className={styles.labels}>
        {project.features.map((feature, id) => (
          <span key={id} className={styles.label}>{feature}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard