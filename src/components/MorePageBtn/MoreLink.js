import React from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const MoreLink = ({ localMoreLink }) => {
  const strPath =
    'More of ' + localMoreLink.substring(localMoreLink.indexOf('/') + 1)
  console.log(strPath)
  return (
    <Link href={`${localMoreLink}/page/2`}>
      <Button variant='danger'>{strPath.toUpperCase()}</Button>
    </Link>
  )
}

export default MoreLink
