import React from "react";

import * as S from "./TestimonialItem.styled";

export default function TestimonialItem({ data }) {
  const { photo, name, text } = data;
  return (
    <S.Container>
      <S.Img src={photo ? photo : "img/testimonial-img.png"} />
      <S.ItemBox>
        <S.Name>{name}</S.Name>
        <div>
          {text.split("\n").map((line, index) => (
            <S.Text key={index}>{line}</S.Text>
          ))}
        </div>
      </S.ItemBox>
    </S.Container>
  );
}
