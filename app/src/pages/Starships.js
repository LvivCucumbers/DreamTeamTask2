
import { useState, useEffect } from "react";
import { getStarshipData, getIdFromUrl } from "../services/sw-service";

export default function People() {
  const [starshipData, setStarshipData]  = useState([])

  useEffect(() => { getStarshipData(2).then(resp => setStarshipData(resp.data)); }, []);
  
  function handleClick() {
    getStarshipData(getIdFromUrl(starshipData.url)+1).then(resp => setStarshipData(resp.data));
  }

  return (
    <>
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/starships/${getIdFromUrl(starshipData.url)}.jpg`} width="200" />
        <b className='title'>{ starshipData.name }</b>
        <div className='infoList'>
          <p>Manufacturer:</p>
          <p>{ starshipData.manufacturer }</p>
        </div>
        <div className='infoList'>
          <p>Length:</p>
          <p>{ starshipData.length }</p>
        </div>
        <div className='infoList'>
          <p>Crew:</p>
          <p>{ starshipData.crew }</p>
        </div>
        <button onClick={handleClick}>Next</button>
      </div>
    </>
  );
}
