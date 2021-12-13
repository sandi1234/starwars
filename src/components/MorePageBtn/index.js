import React from 'react'
import Link from 'next/link'
import MoreLink from './MoreLink'
import styles from '../../../styles/Custom.module.css'

import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div className={`${styles.center} mt-3`}>
      <MoreLink localMoreLink={router.pathname} />
    </div>
  )
}

export default Index
