import React from "react";

import * as S from "./Carousel.style";

export default function Carousel({ items }) {
  return (
    <S.Container
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex justify-content-center">
              <img
                src={item}
                className="d-block w-100"
                alt="Computador com captura de tela de uma aula online"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <S.LeftArrow src="img/carousel-left-icon.png" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <S.RightArrow src="img/carousel-right-icon.png" />
        <span className="visually-hidden">Next</span>
      </button>
    </S.Container>
  );
}
