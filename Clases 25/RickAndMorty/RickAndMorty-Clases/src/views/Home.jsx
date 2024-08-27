// src/components/Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, setPage, setOrder } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Pagination from "./Pagination";

export const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const order = useSelector((state) => state.order);

  const [filterStatus, setFilterStatus] = useState("all"); // Nuevo estado para el filtro

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch, order]);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleOrderChange = (e) => {
    dispatch(setOrder(e.target.value));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Filtrar los personajes según el filtro seleccionado
  const filteredCharacters = characters.filter((character) => {
    if (filterStatus === "all") return true;
    return character.status === filterStatus;
  });

  // Calcular los personajes para la página actual
  const indexOfLastCharacter = currentPage * itemsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
  const currentCharacters = filteredCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);

  return (
    <div className="container matemasie-regular">
      <h1>Rick and Morty Characters</h1>

      {/* Selector para ordenar A-Z o Z-A */}
      <div>
        <label>Ordenar: </label>
        <select value={order} onChange={handleOrderChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* Filtro por estatus */}
      <div>
        <label>Filtrar por estatus: </label>
        <select value={filterStatus} onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="Alive">Vivos</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="cards">
        {currentCharacters.length > 0 ? (
          currentCharacters.map((character) => (
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

      {/* Componente de Paginación */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
