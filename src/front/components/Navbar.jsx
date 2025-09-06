import React from "react"
import { useTraslation } from "react";
import { useEffect, useState } from "react";
import axios from 'axios';


export const Navbar = () => {

    const { t } = useTraslation();

    return(
        <div className="navbar">
            <div className="mt-3">{ t ("navbar.ai")} </div>
            <div className="mt-3">{ t ("navbar.lessons")} </div>
            <div className="mt-3">{ t ("navbar.blog")} </div>
        </div>
    )
}