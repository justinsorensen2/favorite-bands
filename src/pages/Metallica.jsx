import React from 'react'
import ImgMetallica from '../images/Metallica.jpg'
import Footer from '../components/Footer'

const Metallica = () => {
  return (
    <main className="Card">
      <img src={ImgMetallica} alt="Metallica live in concert London 2017"></img>
      <h4>Metallica</h4>
      <p>Information on Metallica's most recent album:</p>
      <p>
        Hardwired... to Self-Destruct is the tenth studio album by American
        heavy metal band Metallica, released as a double album on November 18,
        2016 by their vanity label Blackened Recordings. It is their first
        studio album in eight years following Death Magnetic (2008), marking the
        longest gap between two studio albums in the band's career. It is also
        their first studio album released through Blackened. Hardwired... to
        Self-Destruct was produced by Greg Fidelman, who engineered and mixed
        Death Magnetic. As of 2020, Hardwired... to Self-Destruct became the
        second of two albums to feature only three songwriters. Kirk Hammett did
        not receive any credit in songwriting for this album, marking the first
        time since Kill 'Em All in 1983 that he failed to do so. In 1996,
        Metallica's sixth studio album, Load, was the first album to feature
        only three songwriters.
      </p>
      <cite>https://en.wikipedia.org/wiki/Hardwired..._to_Self-Destruct</cite>
      <Footer />
    </main>
  )
}

export default Metallica
