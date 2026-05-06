import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.header}>Home <button className={styles.btn}>Log-In</button></h1>
    </div>
  )
}

export default Header
