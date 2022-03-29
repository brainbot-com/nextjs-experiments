import { User } from '@wfp/ui'
import styles from '../styles/Menu.module.css'
import { List, ListItem, Link } from '@wfp/ui'
export const Menu = () => {
  return (
    <div className={styles.menu} data-cy={"menu-container"}>
      <User>Max Mustermann</User>
      <div className={styles.menuContainer}>
        <List colon>
          <ListItem>
            <Link href={'#'}>Products</Link>
          </ListItem>
          <ListItem>
            <Link href={'#'}>Categories</Link>
          </ListItem>
          <ListItem>
            <Link href={'#'}>Orders</Link>
          </ListItem>
          <ListItem>
            <Link href={'#'}>Coupons</Link>
          </ListItem>
          <ListItem>
            <Link href={'#'}>Statistics</Link>
          </ListItem>
        </List>
      </div>
    </div>
  )
}

export default Menu
