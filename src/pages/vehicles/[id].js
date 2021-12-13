import Vehicle from '../../components/Vehicles/Vehicle'
import customStyles from '../../../styles/Custom.module.css'

const VehicleData = ({ data }) => {
  return (
    <div className={`${customStyles.ppp}`}>
      <Vehicle data={data} />
    </div>
  )
}

export default VehicleData

export async function getServerSideProps(context) {
  const { id } = context.query

  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/vehicles/${id}`)
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
