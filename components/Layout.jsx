import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
export const Layout = ({children, title, description, home}) => {
    const name="bluu"
  return (
    <div className={styles.container}>
         <Head>
         <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/209-600x600.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              
                <Image
                  priority
                  src="/img/209-600x600.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/"className={utilStyles.colorInherit}>{name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>
          <Link href="/">
            home | 
          </Link>
          <Link href="/blog">
           Blog| 
          </Link>
          <Link href="/about">
            About | 
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </nav>

        <main>{children}</main>
        {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}

    </div>
  )
};
Layout.defaultProps={
    title:"Next.js | mi sitio web",
    description:"descripcion de mi sitio web"

}