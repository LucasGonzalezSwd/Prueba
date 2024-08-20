// src/components/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAll());
    
  }, [dispatch]);
  console.log(characters)
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div  className="container matemasie-regular">
      <h1>Rick and Morty Characters</h1>
      <div className="cards">
        {characters.results ? (
          characters.results.map((character) => (
            <div key={character.id} onClick={() => handleClick(character.id)}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <h2 className="text ">{character.origin["name"]}</h2>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
