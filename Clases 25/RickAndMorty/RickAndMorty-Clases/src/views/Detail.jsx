// src/components/Detail.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail } from "../redux/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "../styles/Home.css";

export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);

  useEffect(() => {
    
    dispatch(getCharacterDetail(id));
  }, [dispatch, id]);


   
  return (
    <div>
      {character ? (
        <div className="container2 ">
          
          <div className="containerBack">
          <Link to="/">
           
           <FontAwesomeIcon icon={faArrowLeft} className="buttonBack"/>
            </Link>
          </div>
           
        
            <div className="bg matemasie-regular">
          <h1>{character.name}</h1>
          <div className="imgcontainer">

          <img className="imagenancho" src={character.image} alt={character.name} />
          </div>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Location: {character.location?.name || "Unknown"}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name || "Unknown"}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
