import React from 'react'
import Link from 'next/link'
import Name from './Name'
import { Card, Col } from 'react-bootstrap'
import styles from '../../../styles/Custom.module.css'

const Index = ({ person, API_URL }) => {
  console.log(API_URL)

  let url = ''

  if (API_URL != undefined) {
    url = person.url.substring(API_URL.length, person.url.length)
  } else {
    url = ''
  }

  // console.log(person.url)
  return (
    <Link href={url}>
      <Col lg={4} md={4} sm={4} xs={12}>
        <Card
          className={`text-center mb-2 p-3 ${styles.pointer} ${styles.cardBG}`}
        >
          <Name name={person.name} />
        </Card>
      </Col>
    </Link>
  )
}

export default Index
