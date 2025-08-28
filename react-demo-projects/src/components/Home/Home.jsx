import Masonry from 'react-masonry-css'
import ProjectCard from "../Card/ProjectCard"
import { projects } from "../../projects"
import styles from './home.module.css'

const Home = () => {
  const breakpoints = {
    default: 4,
    1200: 3,
    950: 2,
    600: 1
  }

  return (
    <section className={styles.home}>
      <div className={styles.page}>
        <Masonry
          breakpointCols={breakpoints}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}
        >
          {projects.map(project => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  )
}

export default Home