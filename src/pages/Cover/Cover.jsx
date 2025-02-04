import React from "react";
import * as S from "./Cover.style";

import Item from "./Item/Item";
import ContactButton from "../../components/ContactButton/ContactButton";

export default function Cover({ onButtonClick }) {
  const itemsData = [
    {
      title: "Aulas de canto para todos os níveis",
      content: () => (
        <p>
          Aprenda a cantar do zero ou aprimorar sua voz e musicalidade com{" "}
          <i>aulas de canto particulares personalizadas</i>
        </p>
      ),
      imageSrc: "img/graph-icon.png",
    },
    {
      title: "Faça aula de qualquer lugar do mundo",
      content: () => (
        <p>
          Aulas online via Google Meet.
          <br />
          As aulas <S.NoWord>não</S.NoWord> são presenciais.
        </p>
      ),
      imageSrc: "img/computer-icon.png",
    },
    {
      title: "Agende agora mesmo",
      content: () => (
        <ContactButton onButtonClick={onButtonClick} label="MARQUE SUA AULA" />
      ),
      imageSrc: "img/screen-icon.png",
    },
  ];

  return (
    <S.Container>
      <S.PaddingContainer>
        <S.Header>
          <S.LogoBox>
            <S.Logo src="img/logo.png" />
            <S.Moto>MÉTODO VOZ INFINITA</S.Moto>
          </S.LogoBox>
          <S.ButtonSet>
            <ContactButton
              onButtonClick={onButtonClick}
              label="MARQUE SUA AULA"
            />
          </S.ButtonSet>
        </S.Header>

        <S.TitleBox>
          <S.Title>AULAS DE CANTO</S.Title>
          <S.SubtitleBox>
            <S.Subtitle>PERSONALIZADAS</S.Subtitle>
            <S.Subtitle>ONLINE</S.Subtitle>
          </S.SubtitleBox>
        </S.TitleBox>

        <S.VideoBox>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gJfCjoDPlFU?si=grmVEO6dLS0eqO9l"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </S.VideoBox>
      </S.PaddingContainer>

      <S.ContentSection>
        {itemsData.map((item, index) => (
          <Item
            itemData={item}
            itemIndex={index}
            itemsCount={itemsData.length}
            key={item.title}
          />
        ))}
      </S.ContentSection>
    </S.Container>
  );
}
