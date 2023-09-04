import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  Header,
  Hero,
  Services,
  Clients,
  Testimonials,
  Contact,
  Footer,
} from './components'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
