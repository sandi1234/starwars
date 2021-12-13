import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import UniNameCard from '../../components/UniNameCard'
import MoreLink from '../../components/MorePageBtn'
import customStyles from '../../../styles/Custom.module.css'

export default function Index({ data, API_URL }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={` ${customStyles.pp}`}>
        <div className={` ${customStyles.centerContainer}`}>
          <div className={customStyles.centerContent}>
            <Container>
              <Row>
                {data.results.map((starship, index) => (
                  <UniNameCard key={index} API_URL={API_URL} data={starship} />
                ))}
              </Row>
            </Container>
            <MoreLink />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/starships`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data, API_URL },
  }
}
