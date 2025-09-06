import React from "react"
import { useTraslation } from "react";
import { useEffect, useState } from "react";
import axios from 'axios';



export const Home = () => {
    return(
        <section>
            <h1>{ t ("home.title")} </h1>
            <p>
                { t ("home.subtitle")}
            </p>
            <p>
                { t ("home.cta")}
            </p>

        </section>
    )
}