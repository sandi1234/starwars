import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import customStyles from '../../../../styles/Custom.module.css'

const Info = ({ data }) => {
  const not = 'n/a'
  return (
    <Col lg={5} md={5} sm={5} xs={12}>
      <ListGroup className={customStyles.center}>
        {data.name != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Name: {data.name}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.model != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Model: {data.model}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.manufacturer != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Manufacturer: {data.manufacturer}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.cost_in_credits != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Credits: {data.cost_in_credits}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.length != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Length: {data.length}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.max_atmosphering_speed != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Max Speed: {data.max_atmosphering_speed}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.crew != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Crew: {data.crew}
          </ListGroup.Item>
        ) : (
          ''
        )}

        {data.passengers != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Passengers: {data.passengers}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.cargo_capacity != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Cargo Capacity: {data.cargo_capacity}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.consumables != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Consumables: {data.consumables}
          </ListGroup.Item>
        ) : (
          ''
        )}
        {data.vehicle_class != not ? (
          <ListGroup.Item className={`${customStyles.cardBG} p-2 m-1`}>
            Vehicle Class: {data.vehicle_class}
          </ListGroup.Item>
        ) : (
          ''
        )}
      </ListGroup>
    </Col>
  )
}

export default Info
