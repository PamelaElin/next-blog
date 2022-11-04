
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title='Home |Next.js' description='mi home' home > 
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          {/* <a href="https://nextjs.org/learn">our Next.js tutorial</a>.) */}
        </p>
      </section>
      </Layout>
    </div>
  )
}
