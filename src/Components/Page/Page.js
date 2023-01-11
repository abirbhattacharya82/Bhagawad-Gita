import React from "react";
import { useState } from "react";
import axios from "axios";
const Page=(props)=>{
    console.log(props.prop);
    const [chapter_summary, setCh]=useState("");
    const options = {
        method: 'GET',
        url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${props.prop}/`,
        headers: {
          'X-RapidAPI-Key': 'faaf235513msh73cd090780fbee3p11b255jsnc38e3cb87bfe',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.chapter_summary);
          setCh(response.data.chapter_summary);
      }).catch(function (error) {
          console.error(error);
      });
    
    return(
        <div>
            {chapter_summary}
        </div>
    )
};

export default Page;