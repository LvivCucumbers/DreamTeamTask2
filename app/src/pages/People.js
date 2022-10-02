import { useState, useEffect } from "react";
import { getPersonData, getIdFromUrl } from "../services/sw-service";

export default function People() {
  const [personData, setPersonData]  = useState([])

  useEffect(() => { getPersonData(1).then(resp => setPersonData(resp.data)); }, []);
  
  function handleClick() {
    getPersonData(getIdFromUrl(personData.url)+1).then(resp => setPersonData(resp.data));
  }

  return (
    <>
      <div>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(personData.url)}.jpg`} width="200" />
        <b className='title'>{ personData.name }</b>
        <div className='infoList'>
          <p>Gender:</p>
          <p>{ personData.gender }</p>
        </div>
        <div className='infoList'>
          <p>Birth Day:</p>
          <p>{ personData.birth_year }</p>
        </div>
        <div className='infoList'>
          <p>Eye color:</p>
          <p>{ personData.eye_color }</p>
        </div>
        <button onClick={handleClick}>Next</button>
      </div>
    </>
  );
}
