import axios from 'axios'

const PersonData = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default PersonData

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
