import React from 'react'
import Icon from './Icon'
import LocalLink from './LocalLink'
import { Card, Col } from 'react-bootstrap'

import styles from '../../../styles/Custom.module.css'

const Index = ({ icon, localLink, linkTxt }) => {
  return (
    <Col lg={4} md={4} sm={4} xs={12}>
      <Card
        className={`${styles.center} ${styles.cardIcon} ${styles.cardIconMP} mt-3`}
      >
        <Icon localLink={localLink} icon={icon} />
        <LocalLink linkTxt={linkTxt} localLink={localLink} />
      </Card>
    </Col>
  )
}

export default Index
