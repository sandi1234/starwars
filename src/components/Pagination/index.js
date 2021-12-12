import React from 'react'
import NextPage from './NextPage'
import PageNumber from './PageNumber'
import PreviousPage from './PreviousPage'
import { useRouter } from 'next/router'
import Styles from '../../../styles/Custom.module.css'

const Index = ({ next, pageNumber, previous, spaceing }) => {
  const router = useRouter()
  const path = router.pathname.split('[id]')[0]

  return (
    <div className={Styles.center}>
      <h1>Paginate</h1>
      <PreviousPage path={path} previous={previous} />
      <PageNumber path={path} pageNumber={pageNumber} spaceing={spaceing} />
      <NextPage path={path} next={next} />
    </div>
  )
}

export default Index
