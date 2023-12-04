import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detalhe(){
    const {id} = useParams(0);
    return(
        <div className="logica">
            <h1>Vai lacraia</h1>
        </div>
    )
}