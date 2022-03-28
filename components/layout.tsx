import Navbar from './navbar'
import styles from '../styles/Home.module.css'

type Props = {
  children: JSX.Element
  title: string
}
export default function Layout({ children, title }: Props) {
  return (
    <>
      <Navbar title={title} />
      <main className={styles.main}>{children}</main>
    </>
  )
}
