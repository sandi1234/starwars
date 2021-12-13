import React from 'react'
import { Col, Image } from 'react-bootstrap'
import customStyles from '../../../../styles/Custom.module.css'

const ImageUrl = ({ image, name }) => {
  const defaultIamge = 'https://dummyimage.com/400/000.png/fff'
  console.log('default image: ' + defaultIamge)
  return (
    <Col lg={6} md={6} sm={6} xs={12}>
      <Image
        className={customStyles.transImage}
        src={image != undefined ? image : defaultIamge}
        rounded
        alt={name}
      />
    </Col>
  )
}

export default ImageUrl
