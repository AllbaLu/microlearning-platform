import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';

export const LessonsGrid = () => {
    const { i18n } = useTranslation();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/topics/${i18n.language}`)
            .then(res => setTopics(res.data))
            .catch(err => console.error(err));
    }, [i18n.language]);

    return (
        <div className="container text-center mb-5 mt-5">
            <div className="row row-cols-4 gap-4" style={{ display: "flex", justifyContent: "space-between" }}>
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className="col-3 col-lg-3 col-sm-3"
                        style={{ border: "solid 1px", margin: "3px" }}>
                        <div className="icon">{topic.icon}</div>
                        <div className="title">{topic.title}</div>
                        <div className="description">{topic.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonsGrid;