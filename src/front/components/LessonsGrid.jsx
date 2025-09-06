import React from "react";
import { useTraslation } from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

/* const lessons = [
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
    {
        title: "title",
        description: "description",
        icon: "icon"
    }
    
] */

export const LessonsGrid = () => {

    const { i18n } = useTraslation();
    const [topics, setTopics] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/api/topics/${i18n.language}`)
        .then(res => setTopics(res.data))
        .catch(err => console.error(err))
    }, [i18n.language]);

    


    return (
        
            <div className="container text-center mb-5 mt-5">
                <div className="row row-cols-4 gap-4" style={{display: "flex", justifyContent: "space-between"}}>
                    {topics.map((topic, index) => (

                        <div
                        key={index} className="col-3 col-lg-3 col-sm-3" style={{border: "solid 1px", margin: "3px"}}>
                            <div className="icon">{lesson.icon}</div>
                            <div className="title">{topic.title} </div>
                            <div className="description">{topic.description} </div>

                        </div>
                        

                    ))}
                </div>
            </div>
        
    )
}

export default LessonsGrid();