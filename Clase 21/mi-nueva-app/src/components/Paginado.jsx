import { useState, useEffect } from "react";


const itemsPerPage = 2;


export const Paginado = ({ items }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;

    const end = start + itemsPerPage;
    setCurrentItems(items.slice(start, end));
  }, [currentPage, items]);

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  return (
    <div>
      <ul className="paginado">
        {currentItems.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <div className="divButton">
      <button className="buttonPaginado" onClick={prevPage} disabled={currentPage === 1}>-</button>
      <button className="buttonPaginado" onClick={nextPage} disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>+</button>
      </div>
      
    </div>
  );
};
