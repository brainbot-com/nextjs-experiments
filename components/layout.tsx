import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const MenuProvider = dynamic(() => import('react-flexible-sliding-menu'), {
  ssr: false,
})

type Props = {
  children: JSX.Element
  title: string
}
export default function Layout({ children, title }: Props) {
  return (
    <div className={styles.root}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <MenuProvider
        // @ts-ignore
        MenuComponent={Menu}
        animation="push"
      >
        <Navbar title={title} />
        <main className={styles.main}>{children}</main>
      </MenuProvider>
    </div>
  )
}
