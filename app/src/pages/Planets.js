
import { useState, useEffect } from "react";
import { getPlanetData, getIdFromUrl } from "../services/sw-service";

export default function People() {
  const [planetData, setPlanetData]  = useState([])

  useEffect(() => { getPlanetData(1).then(resp => setPlanetData(resp.data)); }, []);
  
  function handleClick() {
    getPlanetData(getIdFromUrl(planetData.url)+1).then(resp => setPlanetData(resp.data));
  }

  return (
    <>
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${getIdFromUrl(planetData.url)}.jpg`} onError={(e) => {e.target.src='https://starwars-visualguide.com/assets/img/big-placeholder.jpg'}} width="200" />
        <b className='title'>{ planetData.name }</b>
        <div className='infoList'>
          <p>Population:</p>
          <p>{ planetData.population }</p>
        </div>
        <div className='infoList'>
          <p>Rotation period:</p>
          <p>{ planetData.rotation_period }</p>
        </div>
        <div className='infoList'>
          <p>Terrain:</p>
          <p>{ planetData.terrain }</p>
        </div>
        <button onClick={handleClick}>Next</button>
      </div>
    </>
  );
}
