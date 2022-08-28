import React from 'react'
import { About,Card, Button, Banner, Contact, Footer, Hero, Navbar, Services, Works } from './components'

const App = () => {
  return (
	<>
    <Navbar />
    <Hero />
    <About />
    <Banner />
    <Services />
    <Works />
    <Contact />
    <Footer />
  </>
  )
}

export default App