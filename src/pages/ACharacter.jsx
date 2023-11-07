import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from 'axios';

const ACharacter = () => {
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    const {setFavorites, favorites} = useOutletContext();

    const getCharacter = async () => {  // You can add parameters directly to the URL
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        console.log(response.data.results)
        setCharacter(response.data.results)
    }

    useEffect(() => {
        getCharacter();
    }, []);

  return (
    <>
        <div key={id +1}>
            <h1>Name: {character.name}</h1>
            <img src={character.image} />
            <ul>
                <h4>Status: {character.status}</h4>
                <h5>species: {character.species}</h5>
                <p>
                    gender:{character.gender}
                </p>
                <p>
                    location: {character.location.name}
                </p>
                <img src={character.location.url} alt="send me the Lo" />
                <p>
                    origin: {character.origin.name}
                </p>
                <img src={character.origin.url} alt="aye where you from" />
                <button onClick={()=>setFavorites([...favorites, {"id":id, "name":character.name, "image":character.image}])}>
                Favorite</button>
            </ul>
        </div>
    </>
  )
}
export default ACharacter;