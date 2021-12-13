import Person from '../../components/People/Person'
import customStyles from '../../../styles/Custom.module.css'

const PersonData = ({ data }) => {
  return (
    <div className={customStyles.pp}>
      <Person data={data} />
    </div>
  )
}

export default PersonData

export async function getServerSideProps(context) {
  const { id } = context.query

  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/people/${id}`)
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
