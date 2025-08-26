import ProjectCard from "../Card/ProjectCard"
import { projects } from "../../projects"
import styles from './home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}

export default Home