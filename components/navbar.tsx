import React, {useContext, useState} from 'react'

import styles from '../styles/Navbar.module.css'
import { Icon } from '@wfp/ui'
import colors from '@wfp/ui/src/globals/data/colors.json'
import { iconHeaderHamburger, iconClose } from '@wfp/icons'
type Props = {
  title: string
}

export default function Navbar({ title }: Props) {
  return (
    <>
      <div className={`${styles.navbar} wfp--main-navigation`}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLeft}>
            <NavBarLeft />
          </div>

          <div className={styles.navbarHeaderTitle}>
            <h1 data-cy={'navbar-title'}>{title}</h1>
          </div>
          <div className={styles.navbarRight}></div>
        </div>
      </div>
    </>
  )
}

const NavBarLeft = () => {
  const MenuContext = require('react-flexible-sliding-menu').MenuContext
  const { toggleMenu } = useContext(MenuContext)
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    toggleMenu()
    setIsOpen(!isOpen)
  }

  return (
    <button
      onClick={onClick}
      data-cy={"open-menu"}
      className={'wfp--btn wfp--btn--icon-only wfp--btn--ghost'}
    >
      <Icon
        icon={isOpen ? iconClose : iconHeaderHamburger}
        fill={colors['text-04'].hex}
        description={'Menu with additional options'}
      />
    </button>
  )
}
