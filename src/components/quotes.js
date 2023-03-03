import React, { useState, useEffect } from "react";

const Quote = () => {
    const [quoteData, setQuoteData] = useState({ content: "", author: "" });

    useEffect(() => {
        getQuote();
    }, []);

    const getQuote = () => {
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => {
                setQuoteData({ content: data.content, author: data.author });
            });
    };

    return (


        <div>
            
            <div>
                <div className="circles">
                    <div className="circle circle-1" />
                    <div className="circle circle-2" />
                </div>

                <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet" />
                <div className="light x1" />
                <div className="light x2" />
                <div className="light x3" />
                <div className="light x4" />
                <div className="light x5" />
                <div className="light x6" />
                <div className="light x7" />
                <div className="light x8" />
                <div className="light x9" />
            </div>
            <div>
                <div className="card-group">
                    <div className="card">
                        <div className="number">"{quoteData.content}"</div>
                        <div className="name">- {quoteData.author}</div>
                        <button className="glass-button" onClick={getQuote}> Get Quote</button>

                        <div className="ring" />
                    </div>
                </div>

                   
            </div>
        </div>
    );
};

export default Quote;
