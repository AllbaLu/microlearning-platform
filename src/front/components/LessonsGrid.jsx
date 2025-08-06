import React from "react";
import { useTransition } from "react";


const lessons = [
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
    {
        title: "title",
        description: "description",
        icon: "icon"
    },
]

export const LessonsGrid = () => {

    


    return (
        <section className="mb-5 mt-5">
            <div className="container text-center">
                <div className="row row-cols-4 gap-4" style={{display: "flex", justifyContent: "space-between"}}>
                    {lessons.map((lesson, index) => (

                        <div
                        key={index} className="col-3 col-lg-3 col-sm-3" style={{border: "solid 1px", margin: "3px"}}>
                            <div className="icon">{lesson.icon}</div>
                            <div className="title">{lesson.title} </div>
                            <div className="description">{lesson.description} </div>

                        </div>
                        

                    ))}
                </div>
            </div>
        </section>
    )
}

export default LessonsGrid();