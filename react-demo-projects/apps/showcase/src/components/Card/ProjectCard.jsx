import { useState } from 'react'
import { projectTypes } from '../../showcaseConfig'
import { Link } from 'react-router-dom'
import styles from './projectcard.module.css'

const ProjectCard = ({ project }) => {
  const [showPreview, setShowPreview] = useState(project.type === projectTypes.small)
  const Component = project.component

  return (
    <div className={styles.card}>
      <div className={styles['card-content']}>
        <div className={styles['card-intro']}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
        </div>
        {/* Labels */}
        <div className={styles.labels}>
          <div className={styles['labels-slide']}>
            {project.features.map((feature, id) => (
              <span key={id} className={styles.label}>{feature}</span>
            ))}
          </div>
          <div className={styles['labels-slide']}>
            {project.features.map((feature, id) => (
              <span key={id} className={styles.label}>{feature}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Inline demo project */}
      {showPreview && (
        <div className={styles['demo-wrapper']}>
          <Component embedded />
        </div>
      )}

      {project.type === projectTypes.medium && !showPreview && (
        <button className={styles.btn} onClick={ () => setShowPreview(true) }>Preview project</button>
      )}

      {showPreview && project.type === projectTypes.medium && (
        <button className={styles.btn} onClick={ () => setShowPreview(false) }>Hide</button>
      )}

      {project.type === projectTypes.large && (
        <Link className={styles.link} to={`/projects/${project.id}`}>View full project</Link>
      )}
    </div>
  )
}

export default ProjectCard