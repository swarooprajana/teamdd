import React from 'react'
import './History.scss'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
function Tvshows() {
  return (
    <div>
      <div className="Continue">
        <h2> most treding movies</h2>
        <div id="photos">
            <img className='movie' src="images/image3.png" alt="" />
            <img className='movie' src="images/image2.png" alt="" />
            <img className='movie' src="images/image4.png" alt="" />
            <img className='movie' src="images/image5.png" alt="" />
            <img className='movie' src="images/movies1.png" alt="" />
        </div>
      </div>
      <div className="Watchlist">
        <h2>new movies</h2>
        <div id="photo">
          <img className='watch' src="images/thandel.avif" alt="" />
          <img className='watch' src="images/pushpa.webp" alt="" />
          <img className='watch' src="images/movies5.png" alt="" />
          <img className='watch' src="images/movies4.png" alt="" />
          <img className='watch' src="images/hot2.avif" alt="" />
        </div>
      </div>
      <div className="button-container">
        <Link to="/Profile1">
        <CustomButton className="fw-bold" label="BACK" type="submit" color="primary"/>
        </Link>
      </div>
      
    </div>
  )
}

export default Tvshows
