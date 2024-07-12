import React, { useEffect, useState } from 'react'
import './Player.css'
import arrowicon from '../assets/back_arrow_icon.png'
import {useNavigate, useParams} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.AUTH_KEY
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setData(response.results[0]))
    .catch(err => console.error(err));

  }, [])
 

  return (
    <div className='player'>
          <img src={arrowicon} alt="#" onClick={() => {navigate(-1)}}/>
          <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${data.key}`}
          title='trailer' frameBorder='0' allowFullScreen
          ></iframe>
          <div className="player-info">
              <p>{data.published_at.slice(0, 10)}</p>
              <p>{data.name}</p>
              <p>{data.typeof}</p>
          </div>
    </div>
  )
}

export default Player