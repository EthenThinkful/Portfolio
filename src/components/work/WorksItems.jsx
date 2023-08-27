import React from "react";

const WorksItems = ({ item }) => {
  return (
    <>
      {item.id === 2 ? (
        <div className="work__card reversed" key={item.id}>
          <img src={item.image} alt="" className="work__img" />
          <div className="work__text">
            <h3 className="work__title">{item.title}</h3>
            <div className="tech__stack">
              {item.stack.map((logo) => (
                <img src={logo} alt={logo} className="project__logo"></img>
              ))}
            </div>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? (
              <div className="link__container">
                <a href={item.url2} className="work__button">
                  Github{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 7 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Privated Github Link
                  <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 1 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      ) : item.id === 2 ? (
        <div className="work__card reversed" key={item.id}>
          <img src={item.image} alt="" className="work__img" />
          <div className="work__text">
            <h3 className="work__title">{item.title}</h3>
            <div className="tech__stack">
              {item.stack.map((logo) => (
                <img src={logo} alt={logo} className="project__logo"></img>
              ))}
            </div>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? (
              <div className="link__container">
                <a href={item.url2} className="work__button">
                  Github{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 7 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Privated Github Link
                  <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 1 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      ) : item.id === 4 ? (
        <div className="work__card reversed" key={item.id}>
          <img src={item.image} alt="" className="work__img" />
          <div className="work__text">
            <h3 className="work__title">{item.title}</h3>
            <div className="tech__stack">
              {item.stack.map((logo) => (
                <img src={logo} alt={logo} className="project__logo"></img>
              ))}
            </div>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? (
              <div className="link__container">
                <a href={item.url2} className="work__button">
                  Github{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 7 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Privated Github Link
                  <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 1 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      ) : item.id === 6 ? (
        <div className="work__card reversed" key={item.id}>
          <img src={item.image} alt="" className="work__img" />
          <div className="work__text">
            <h3 className="work__title">{item.title}</h3>
            <div className="tech__stack">
              {item.stack.map((logo) => (
                <img src={logo} alt={logo} className="project__logo"></img>
              ))}
            </div>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? (
              <div className="link__container">
                <a href={item.url2} className="work__button">
                  Github{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 7 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Privated Github Link
                  <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 1 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      ) 
      : item.id === 8 ? (
        <div className="work__card reversed" key={item.id}>
          <img src={item.image} alt="" className="work__img" />
          <div className="work__text">
            <h3 className="work__title">{item.title}</h3>
            <div className="tech__stack">
              {item.stack.map((logo) => (
                <img src={logo} alt={logo} className="project__logo"></img>
              ))}
            </div>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? (
              <div className="link__container">
                <a href={item.url2} className="work__button">
                  Github{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 7 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Privated Github Link
                  <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 1 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="work__card" key={item.id}>
          <img src={item.image} alt="" className="work__img" />
          <div className="work__text">
            <h3 className="work__title">{item.title}</h3>
            <div className="tech__stack">
              {item.stack.map((logo) => (
                <img src={logo} alt={logo} className="project__logo"></img>
              ))}
            </div>
            <div className="work__desc">{item.description}</div>
            {item.id === 5 ? (
              <div className="link__container">
                <a href={item.url2} className="work__button">
                  Github{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 7 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Privated Github Link
                  <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : item.id === 1 ? (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            ) : (
              <div className="link__container">
                <a href={item.url} className="work__button">
                  Demo{" "}
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.url2} className="work__button">
                  Github <i className="uil uil-github work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WorksItems;
