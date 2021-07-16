import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import "./album.css";

const Albums = (props) => {
  const [Data, setData] = useState([]);
  const [CurrentPage,setCurrentPage] = useState(1);
  const [picturePerPage] =useState(10);

 //get currentpictures
 const indexOfLastPic =CurrentPage*picturePerPage;
 const indexOfFirstPic = indexOfLastPic-picturePerPage;
 
// change page
const paginate = pageNumber => setCurrentPage(pageNumber);

  const mapData = Data.slice(indexOfFirstPic,indexOfLastPic).map((picture) => {
    return (
      <Card key={picture.id} url={picture.thumbnailUrl} title={picture.title} />

      
      );
  });

  useEffect(() => {
    if (!props.searchId) return;
   
    const getAlbum = async () => {
      const res = await axios.get(
       
        `https://challenge3backend.herokuapp.com/api/v1/album/${props.searchId}`
      );
      
      setData(res.data.data);
    };

    getAlbum();
  }, [props.searchId]);

 
  

  return (
    <div>
      <h2>ALBUM VIEW</h2>
      <div className="container">
        <div className="container-card">{mapData}</div>
        <Pagination 
        picturePerPage={picturePerPage}
         totalPictures={Data.length} 
         paginate={paginate} />
      </div>
    </div>
  );
};

export default Albums;
