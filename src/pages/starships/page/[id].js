import Head from 'next/head'
import Pagination from '../../../components/Pagination'
import UniNameCard from '../../../components/UniNameCard'
import { Container, Row } from 'react-bootstrap'
import customStyles from '../../../../styles/Custom.module.css'

export default function Index({ data, API_URL, testo }) {
  console.log(API_URL)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={` ${customStyles.ppp}`}>
        <div className={` ${customStyles.centerContainer}`}>
          <div className={customStyles.centerContent}>
            <Pagination
              spaceing='2px'
              next={data.next}
              pageNumber={data.count}
              previous={data.previous}
            />
            <Container>
              <Row>
                {data.results.map((starship, index) => (
                  <UniNameCard key={index} API_URL={API_URL} data={starship} />
                ))}
              </Row>
            </Container>
            <Pagination
              spaceing='2px'
              next={data.next}
              pageNumber={data.count}
              previous={data.previous}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const { API_URL } = process.env

  const testo = context.params

  const res = await fetch(`${API_URL}/starships/?page=${id}`)
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
    props: { data, API_URL, testo },
  }
}
