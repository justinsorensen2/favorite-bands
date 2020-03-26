import React from 'react'
import ImgPinkFloyd from '../images/Pink_Floyd.jpg'
import Footer from '../components/Footer'

const PinkFloyd = () => {
  return (
    <main className="Card">
      <img src={ImgPinkFloyd} alt="Pink Floyd circa 60s"></img>
      <h4>Pink Floyd</h4>
      <p>Information on Pink Floyd's most recent album:</p>
      <p>
        The Endless River is the fifteenth and final studio album by the English
        rock band Pink Floyd, released in November 2014 by Parlophone Records in
        the UK and Columbia Records in the US. It was the third Pink Floyd album
        recorded under the leadership of guitarist David Gilmour after the
        departure of bassist Roger Waters in 1985, and the first following the
        death of keyboardist Richard Wright in 2008, who appears posthumously.
        The Endless River comprises instrumental and ambient music based on
        material recorded during sessions for the band's previous album, The
        Division Bell (1994). Additional material was recorded in 2013 and 2014
        on Gilmour's Astoria boat studio and in Medina Studios in Hove, England.
        It was produced by Gilmour, Youth, Andy Jackson and Phil Manzanera. Only
        one track, "Louder than Words", has lead vocals. After the death of
        longtime Pink Floyd artist Storm Thorgerson in 2013, the cover was
        created by artist Ahmed Emad Eldin, design company Stylorouge, and
        Aubrey Powell, co-founder of Thorgerson's design company Hipgnosis.
      </p>
      <cite>https://en.wikipedia.org/wiki/The_Endless_River</cite>
      <Footer />
    </main>
  )
}

export default PinkFloyd
