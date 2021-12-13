import React from 'react'
import { Col, Image } from 'react-bootstrap'
import customStyles from '../../../../styles/Custom.module.css'

const PersonImage = ({ image, name }) => {
  const defaultIamge = 'https://dummyimage.com/400/000.png/fff'
  console.log('default image: ' + defaultIamge)
  return (
    <Col lg={8} md={8} sm={8} xs={12}>
      <Image
        className={customStyles.transImage}
        src={image != undefined ? image : defaultIamge}
        rounded
        alt={name}
      />
    </Col>
  )
}

export default PersonImage
