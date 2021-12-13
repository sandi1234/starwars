import axios from 'axios'
import Starship from '../../components/Starships/Starship'
import customStyles from '../../../styles/Custom.module.css'

const StarshipData = ({ data }) => {
  return (
    <div className={customStyles.ppp}>
      <Starship data={data} />
    </div>
  )
}

export default StarshipData

export async function getServerSideProps(context) {
  const { id } = context.query

  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/starships/${id}`)
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
    props: { data },
  }
}
