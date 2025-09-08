import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from "react-i18next";



export const Home = () => {
    const {t, i18n} = useTranslation();
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