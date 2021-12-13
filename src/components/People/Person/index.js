import React from 'react'
import Info from './Info'
import ImageUrl from './ImageUrl'
import { Container, Row } from 'react-bootstrap'
import customStyles from '../../../../styles/Custom.module.css'

const Index = ({ data }) => {
  const image = undefined
  return (
    <div className={` ${customStyles.centerContainer}`}>
      <div className={customStyles.centerContent}>
        <Container>
          <Row>
            <ImageUrl image={image} name={data.name} />
            <Info person={data} />
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Index
