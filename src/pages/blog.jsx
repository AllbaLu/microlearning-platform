import React from "react";


const articles = [
    {
        id: 1,
        title: "title",
        category: "descritption",
        image: 'https://a.storyblok.com/f/112937/568x400/686f87dc2f/50-things-you-need-to-do-on-your-next-trip_square-568x400.jpg/m/620x0/filters:quality(70)/',
    },
    {
        id: 2,
        title: "title",
        category: "descritption",
        image: 'https://a.storyblok.com/f/112937/568x400/686f87dc2f/50-things-you-need-to-do-on-your-next-trip_square-568x400.jpg/m/620x0/filters:quality(70)/'
    },
    {
        id: 3,
        title: "title",
        category: "descritption",
        image: 'https://a.storyblok.com/f/112937/568x400/686f87dc2f/50-things-you-need-to-do-on-your-next-trip_square-568x400.jpg/m/620x0/filters:quality(70)/'
    }
]

export const Blog = () => {

    return (

        <section className="mt-5">
            <div className="container text-center">
                <h1 className="mt-5 mb-3">Latest Articles</h1>
                <div className="row row-cols-4 gap-2" style={{display: "flex", justifyContent: "center"}}>
                    {articles.map((article,index) => (
                        <div key={index} className="col-3 col-lg-3 col-sm-3" style={{border: "1px", margin: "10px"}}>
                            
                            <img src={article.image} alt={article.title}
                            style={{width: "180px", height: "100px"}} />
                            <div>
                                <span className="mt-5">{article.category} </span>
                                <h3>{article.title} </h3>
                            </div>
                        </div>
                        
                    ))} 
                </div>
                                
            </div>
        </section>
    )
}

export default Blog();