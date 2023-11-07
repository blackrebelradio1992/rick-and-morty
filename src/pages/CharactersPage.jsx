import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import CharCard from "../components/CharCard";
import { useOutletContext } from "react-router-dom";

function CharactersPage() {
  const [chars, setChars] = useState([])
  const [page, setPage] = useState(1)
  const {setFavorites, favorites} = useOutletContext();
  
  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        console.log(response.data.results)
        setChars(response.data.results)
      }
      catch (error) {
        console.log("An error occurred cuh:", error);
      }
    }
    getCharacter()
  }, [page])
    
  return  (
    <>  
        <h2>Characters Page</h2>
        {chars.map((elem, index) => (
            <CharCard key={index}
                name={elem.name}
                image={elem.image}
                species={elem.species}
                status={elem.status}
                gender={elem.gender}
                setFavorites={setFavorites}
                favorites={favorites}
            />
        ))}
  
        <div className="page-buttons">
            <button id="prev-button" onClick={()=> page > 1
                ?
                setPage(page - 1)
                :
                setPage(42)}
            >Prev</button>
            <p className="m-4">Page {page} of 42</p>
            <button id="next-button" onClick={()=> page === 42 
                ? 
                setPage(1)
                :
                setPage(page + 1)}
            >Next</button>
        </div>
    </>
    )
}

export default CharactersPage