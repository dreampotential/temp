import '../styles/globals.css'
import '../styles/partners.css'
import '../styles/covid.css'
import '../styles/intro.css'
import '../styles/latest.css'
import '../styles/benefits.css'
import '../styles/services.css'
import '../styles/testimonial.css'
import '../styles/clients_include.css'
import '../styles/request.css'
import '../styles/request_form.css'
import '../styles/footer.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
