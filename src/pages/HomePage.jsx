import React from 'react'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div classname="Home">
      <h3>The Beatles</h3>
      <p>
        The Beatles were an English rock band formed in Liverpool in 1960. With
        a line-up comprising John Lennon, Paul McCartney, George Harrison and
        Ringo Starr, they are regarded as the most influential band of all time.
        The group were integral to the development of 1960s counterculture and
        popular music's recognition as an art form.
      </p>
      <cite>https://en.wikipedia.org/wiki/The_Beatles</cite>
      <h3>Metallica</h3>
      <p>
        Metallica is an American heavy metal band. The band was formed in 1981
        in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars
        Ulrich, and has been based in San Francisco for most of its career. The
        band's fast tempos, instrumentals and aggressive musicianship made them
        one of the founding "big four" bands of thrash metal, alongside
        Megadeth, Anthrax and Slayer.
      </p>
      <cite>https://en.wikipedia.org/wiki/Metallica</cite>
      <h3>Pink Floyd</h3>
      <p>
        Pink Floyd were an English rock band formed in London in 1965. Gaining a
        following as a psychedelic rock group, they were distinguished for their
        extended compositions, sonic experimentation, philosophical lyrics and
        elaborate live shows, and became a leading band of the progressive rock
        genre. They are one of the most commercially successful and influential
        bands in popular music history. Pink Floyd were founded by students Syd
        Barrett (guitar, lead vocals), Nick Mason (drums), Roger Waters (bass
        guitar, vocals), and Richard Wright (keyboards, vocals).
      </p>
      <cite>https://en.wikipedia.org/wiki/Pink_Floyd</cite>
      <Footer />
    </div>
  )
}

export default HomePage
