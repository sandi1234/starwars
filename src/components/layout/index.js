import Head from 'next/head'
import Link from 'next/link'
import Style from '../../../styles/Custom.module.css'
const Index = ({ children }) => {
  return (
    <div>
      <Head>
        {/* <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossorigin='anonymous'
        /> */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
          integrity='sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css'
          integrity='sha512-rQgMaFKZKIoTKfYInSVMH1dSM68mmPYshaohG8pK17b+guRbSiMl9dDbd3Sd96voXZeGerRIFFr2ewIiusEUgg=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
          crossorigin='anonymous'
        ></script> */}
      </Head>
      <div className='text-center m-3'>
        <Link href='/'>
          <i className={`${Style.logo} fab fa-jedi-order`}></i>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Index
