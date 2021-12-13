import React from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

const PageNumber = ({ pageNumber, path, spaceing }) => {
  const router = useRouter()
  const pages = Math.ceil(pageNumber / 10)

  let pageNumbers = []
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      {pageNumbers.map((pageID) => (
        <Link key={pageID} href={`${path}${pageID}`} passHref>
          <Button
            style={{ margin: spaceing }}
            variant={router.query.id == pageID ? 'danger' : 'light'}
          >
            {pageID}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default PageNumber
