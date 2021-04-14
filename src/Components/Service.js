import React from 'react'
import { Col } from 'react-bootstrap'

export default function Service({ name, text, pic }) {
  return (
    <Col>
      <h2>Some pic</h2>
      <h4>{name}</h4>
      <p>{text}</p>
    </Col>
  )
}
