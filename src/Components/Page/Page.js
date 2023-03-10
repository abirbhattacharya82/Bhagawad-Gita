import React from "react";
import { useState } from "react";
import axios from "axios";
import cover from './src/cover.png'
import './Page.css'
const Page=(props)=>{
    console.log(props.prop);
    const [chapter_summary, setCh]=useState("");
    const [chapter_name, setCh_name]=useState("");
    React.useEffect(
        ()=>{
            const options = {
                method: 'GET',
                url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${props.prop}/`,
                headers: {
                  'X-RapidAPI-Key': 'faaf235513msh73cd090780fbee3p11b255jsnc38e3cb87bfe',
                  'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
                }
              };
              axios.request(options).then(function (response) {
                  setCh_name(response.data.name_transliterated);
                  setCh(response.data.chapter_summary);
                  if(props.prop!==0)
                  {
                    document.getElementById('container').style.display='block';
                    document.getElementById('cover').style.display='none';
                  }
              }).catch(function (error) {
                  console.error(error);
              });
        }
    )
    return(
        <div>
            <div className="cover" id="cover">
                <img src={cover} alt="" />
            </div>
            <div className="container" id="container">
                <div className="title">
                    {chapter_name}
                </div>
                <div className="subtitle">
                    {chapter_summary}
                </div>
            </div>
        </div>
    )
};

export default Page;