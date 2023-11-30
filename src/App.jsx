import Navbar from "./components/Navbar";

import {
  Hero,
  Services,
  Pricing,
  Gallery,
  Appointment,
  Contact
} from "./sections";

function App() {
  return (
<main className="relative bg-white">
  <Navbar />
  <section className="bg-hero2 bg-cover bg-center">
    <Hero />
  </section>
  <section className="padding">
    <Pricing />
  </section>
  <section className="padding">
    <Services />
  </section>
  <section className="padding">
    <Gallery />
  </section>
  <section className="padding">
    <Appointment />
  </section>
  <section className="padding">
    <Contact />
  </section>
</main>
  )
}

export default App
