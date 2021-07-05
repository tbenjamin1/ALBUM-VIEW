import React from "react";
import "./Pagination.css";
const Pagination = ({ picturePerPage, totalPictures, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPictures / picturePerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }

  return (
    <div className="pageContainer">
      {pageNumbers.map((number) => (
        <button key={number} className="page-Bttn"
           onClick={() => paginate(number)} 
            >{number}
            page
          
        </button>
      ))}
    </div>
  );
};
export default Pagination;
