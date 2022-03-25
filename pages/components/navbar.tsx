import styles from '../../styles/Navbar.module.css'
import { Icon } from '@wfp/ui'
import colors from '@wfp/ui/src/globals/data/colors.json'
import { iconHeaderHamburger } from '@wfp/icons'
export default function Navbar() {
  return (
    <>
      <div className={`${styles.navbar} wfp--main-navigation`}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLeft}>
            <Icon
              icon={iconHeaderHamburger}
              fill={colors['text-04'].hex}
              description={'Menu with additional options'}
            />
          </div>

          <div className={styles.navbarHeaderTitle}>
            <h1>New Order</h1>
          </div>
          <div className={styles.navbarRight}></div>
        </div>
      </div>
    </>
  )
}
