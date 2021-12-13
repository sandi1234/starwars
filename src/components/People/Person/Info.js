import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import customStyles from '../../../../styles/Custom.module.css'

const PersonInfo = ({ person }) => {
  const not = 'n/a'
  return (
    <Col lg={4} md={4} sm={4} xs={12}>
      <ListGroup className={customStyles.center}>
        {person.name != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Name: {person.name}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.height != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Height: {person.height}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.mass != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Mass: {person.mass}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.hair_color != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Hair Color: {person.hair_color}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.skin_color != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Skin Color: {person.skin_color}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.eye_color != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Eye Color: {person.eye_color}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.birth_year != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Birth Year: {person.birth_year}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {person.gender != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Gender: {person.gender}
          </ListGroup.Item>
        ) : (
          ''
        )}
      </ListGroup>
    </Col>
  )
}

export default PersonInfo
