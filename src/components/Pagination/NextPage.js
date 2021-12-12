import React from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const NextPage = ({ path, next }) => {
  let nextPageID = ''

  if (next !== null) {
    nextPageID = next.substring(next.indexOf('=') + 1)
  } else {
    nextPageID = null
  }

  return (
    <>
      {nextPageID ? (
        <Link href={(path, nextPageID)}>
          <Button variant='danger'>&#10095;</Button>
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

export default NextPage
