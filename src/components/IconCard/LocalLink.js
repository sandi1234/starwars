import React from 'react'
import styles from '../../../styles/Custom.module.css'
import Link from 'next/link'

const LocalLink = ({ localLink, linkTxt }) => {
  return (
    <Link href={localLink} passHref>
      <div className={styles.iconLinkTxt}>{linkTxt}</div>
    </Link>
  )
}

export default LocalLink
