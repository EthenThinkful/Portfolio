import React from "react";

const WorksItems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? <a href={item.url2} className="work__button">
                Github <i className="bx bx-right-arrow-alt work__button-icon">
            </i>
            </a> :
            
            item.id === 7 ? 
            <div className="link__container"> 
            <a href={item.url} className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon">
            </i>
            </a>
            <a href={item.url2} className="work__button">
            Privated Github Link<i className="uil uil-github work__button-icon"></i>
        </a>
            </div> : 
            item.id === 1 ?
            <div className="link__container1">
            <a href={item.url} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon">
            </i>
        </a>
        <a href={item.url2} className="work__button">
            Github <i className="uil uil-github work__button-icon"></i>
        </a>
        </div> :
            <div className="link__container">
            <a href={item.url} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon">
            </i>
        </a>
        <a href={item.url2} className="work__button">
            Github <i className="uil uil-github work__button-icon"></i>
        </a>
        </div>
        
        }
        </div>
    )
}

export default WorksItems;