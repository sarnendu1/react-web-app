import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios"
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Navbar from './navbar';

const Item = () => {

    const [data,setData] = useState({});
    const { id } = useParams();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films/" + id);
        setData(res.data);
      } catch {}
    };
    getProduct();
  }
    , [id]);

  return (
    <>
 
  <Navbar />
 <div className='flex'>
       <div>
          
          
          <div className="singlePost">
          <div className="singlePostWrapper">

          <h1 className="singlePostTitle">
            {data.title}
              
          </h1>
          
          <div >
          <img

          src={data.image}
          className="feature-img"
          alt={data.title}
          
          />
          </div>
          
            <div className="singlePostInfo mt-5">
              <span>
              Director:
                <b>{data.director}</b>
              </span>

              
              
            </div>
            <div className="singlePostInfo mt-5">
              <span>
              Producer:
                <b>{data.producer}</b>
              </span>

            </div>
            <div className="singlePostInfo mt-5">
              <span>
              Release_date:
                <b>{data.release_date}</b>
              </span>

            </div>
            <div className="singlePostInfo mt-5">
              <span>
              Running_time:
                <b>{data.running_time}</b>
              </span>

            </div>
            <div className="singlePostInfo mt-5">
              <span>
              Director:
                <b>{data.producer}</b>
              </span>

            </div>
            <div className="singlePostInfo mt-5">
              <span>
              Director:
                <b>{data.producer}</b>
              </span>

            </div>

         
           <div className='content'>{data.description }</div>
          
          </div>
        </div>
          
   </div>
   </div>

          
    </>
  )
}

export default Item