import React from 'react'
import Link from 'next/link'
import Name from './Name'
import { Card, Col } from 'react-bootstrap'
import styles from '../../../styles/Custom.module.css'

const Index = ({ data, API_URL }) => {
  console.log(API_URL)

  let url = ''

  if (API_URL != undefined) {
    url = data.url.substring(API_URL.length, data.url.length)
  } else {
    url = ''
  }

  // console.log(data.url)
  return (
    <Link href={url} passHref>
      <Col lg={6} md={6} sm={6} xs={12}>
        <Card
          className={`text-center mb-2 p-3 ${styles.pointer} ${styles.cardBG}`}
        >
          <Name name={data.name} />
        </Card>
      </Col>
    </Link>
  )
}

export default Index
