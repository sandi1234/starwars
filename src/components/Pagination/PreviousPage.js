import React from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const PreviousPage = ({ path, previous }) => {
  let PreviousPageID = ''

  if (previous !== null) {
    PreviousPageID = previous.substring(previous.indexOf('=') + 1)
  } else {
    PreviousPageID = null
  }

  return (
    <>
      {PreviousPageID ? (
        <Link href={(path, PreviousPageID)}>
          <Button variant='danger'>&#10094;</Button>
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

export default PreviousPage
