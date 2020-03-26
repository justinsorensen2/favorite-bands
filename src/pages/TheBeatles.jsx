import React from 'react'
import ImgBeatles from '../images/The_Beatles.JPG'
import Footer from '../components/Footer'

const TheBeatles = () => {
  return (
    <main className="Card">
      <img src={ImgBeatles} alt="The Beatles circa 60s"></img>
      <h4>The Beatles</h4>
      <p>Information on The Beatles' most recent album:</p>
      <p>
        Let It Be is the twelfth and final studio album by the English rock band
        the Beatles. It was released on 8 May 1970, almost a month after the
        group's break-up, in tandem with the motion picture of the same name.
        Like most of the band's previous releases, the album topped record
        charts in many countries, including both the US and the UK. However, the
        critical response was generally unfavorable, and Let It Be came to be
        regarded as one of the most controversial rock albums ever.
      </p>
      <cite>https://en.wikipedia.org/wiki/Let_It_Be_(Beatles_album)</cite>
      <Footer />
    </main>
  )
}

export default TheBeatles
