import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export const Postlist = () => {

    const [response, setResponse] = useState({
        posts:[]
      })
      
      useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        // console.log("response",response);
        setResponse({posts:response.data})
        console.log("posts:",response);
      })
      .catch(function (error) {
        // handle error
        console.log("ERROR",error);
      })
      .then(function () {
        // always executed
      });
        
      }, 
      
      [])

    return (
        <div>
          Post Lists{
            response.posts.map(xx=>{
            return  <h2>{xx.title}</h2>
            //  return 
            })
          }
        </div>
    )
}

export default Postlist
