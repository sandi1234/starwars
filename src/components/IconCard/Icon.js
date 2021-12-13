import React from 'react'
import Link from 'next/link'
import Styles from '../../../styles/Custom.module.css'

const Icon = ({ icon, localLink }) => {
  return (
    <div className={Styles.pointer}>
      <Link href={localLink} passHref>
        <i className={`${icon} ${Styles.iconSize}`}></i>
      </Link>
    </div>
  )
}

export default Icon
