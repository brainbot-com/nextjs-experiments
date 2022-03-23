import Navbar from './navbar'
import styles from '../../styles/Home.module.css'

type Props = {
  children: JSX.Element
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
