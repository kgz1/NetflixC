import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../assets/Cards_data.js'
import {Link} from 'react-router-dom'

const TitleCards = ( { title, category } ) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([])

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.AUTH_KEY

    }
  };
  
  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
      cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='titlecards'>
          <h2>{title?title:"Popular on Netflix"}</h2>
          <div className="card-list" ref={cardsRef}>
            {
            apiData.map((card) => {
                return <Link className='card' to={`/player/${card.id}`} key={card.id}>
                  <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="#" />
                  <p>{card.original_title}</p>
                </Link>
            })
            }
          </div>
    </div>
  )
}

export default TitleCards