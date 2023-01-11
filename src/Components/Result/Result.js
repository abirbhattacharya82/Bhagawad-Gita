import React from "react";
import './Result.css';
import { useState } from "react";
import Page from '../Page/Page'
const Result = () =>{
    const [ch_no, setCh_no]=useState(1);
    return(
        <div className="Result">
            <div className="Navbar">
                <div className="Chapters">Chapters</div>
                <div className="Separate_ch">
                    <button className="ch_name" onClick={()=>{setCh_no(1);}}>arjuna-visada-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(2);}}>sankhya-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(3);}}>karma-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(4);}}>jnana-karma-sanyasa-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(5);}}>karma-sanyasa-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(6);}}>dhyana-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(7);}}>gyaan-vigyana-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(8);}}>akshara-brahma-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(9);}}>raja-vidya-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(10);}}>vibhooti-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(11);}}>vishwaroopa-darshana-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(12);}}>bhakti-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(13);}}>ksetra-ksetrajna-vibhaaga-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(14);}}>gunatraya-vibhaga-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(15);}}>purushottama-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(16);}}>daivasura-sampad-vibhaga-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(17);}}>sraddhatraya-vibhaga-yoga</button> <br />
                    <button className="ch_name" onClick={()=>{setCh_no(18);}}>moksha-sanyaas-yoga</button> <br />
                </div>
            </div>
            <Page prop={ch_no}></Page>
        </div>
    )
};

export default Result;