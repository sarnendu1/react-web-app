

import {useEffect, useState} from "react";
import axios from "axios"
import {Link} from 'react-router-dom'
import Navbar from "./navbar";



  


const Home =()=> {

  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get("https://ghibliapi.herokuapp.com/films")
    .then((result) => {
    
      setData(result.data);
    
    })

    
  }
    , []);
  
  return (
   <>
  
<Navbar />
      <div className="home">
      
    {
    data.map((data) =>
            <div key={data.id}>
              
              <div className="post">
      <Link to={`/${data.id}`}>
      <img
        className="postImg"
        src={data.image}
        alt={data.title}
       
      />
      </Link>
      <div className="postInfo">
        <div className="postCats">
       
          {/* <span className="postCat">
            <a passHref className="a" href="/posts?cat=Music">
              Life
            </a>
          </span> */}
        </div>
        <span className="postTitle">
        
          <Link passHref to={`/${data.id}`} className="a">
          <h2>{data.title}</h2>  
          </Link>
          
        </span>
        <hr />
       {/*  <span className="postDate">1 hour ago</span> */}
      </div>
      <a passHref href="">
      <p className="postDesc">
        {data.desc}
      </p>
      </a>
    </div>
      </div>
          )}
    </div>
  

   </>
  );
}

export default Home;
