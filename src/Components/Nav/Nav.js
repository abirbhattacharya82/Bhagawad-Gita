import React from "react";
import './Nav.css';

const Nav = () =>{
    return(
        <div className="Navbar">
            <div className="Chapters">Chapters</div>
            <div className="separate_ch">
                <button className="ch_name">arjuna-visada-yoga</button>
                <button className="ch_name">sankhya-yoga</button>
                <button className="ch_name">karma-yoga</button>
                <button className="ch_name">jnana-karma-sanyasa-yoga</button>
                <button className="ch_name">karma-sanyasa-yoga</button>
                <button className="ch_name">dhyana-yoga</button>
                <button className="ch_name">gyaan-vigyana-yoga</button>
                <button className="ch_name">akshara-brahma-yoga</button>
                <button className="ch_name">raja-vidya-yoga</button>
                <button className="ch_name">vibhooti-yoga</button>
                <button className="ch_name">vishwaroopa-darshana-yoga</button>
                <button className="ch_name">bhakti-yoga</button>
                <button className="ch_name">ksetra-ksetrajna-vibhaaga-yoga</button>
                <button className="ch_name">gunatraya-vibhaga-yoga</button>
                <button className="ch_name">purushottama-yoga</button>
                <button className="ch_name">daivasura-sampad-vibhaga-yoga</button>
                <button className="ch_name">sraddhatraya-vibhaga-yoga</button>
                <button className="ch_name">moksha-sanyaas-yoga</button>
            </div>
        </div>
    )
};

export default Nav;