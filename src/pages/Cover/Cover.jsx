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
          Aprenda a cantar do zero ou aprimorar sua voz e musicalidade com aulas
          de canto particulares personalizadas
        </p>
      ),
      imageSrc: "img/insta-reel-1.png",
      link: "https://www.instagram.com/reel/C0eTePsrVqp/?igsh=Z3BwNTk2aG91dzNk",
    },
    {
      title: "Faça aula de qualquer lugar do mundo",
      content: () => <p>Aulas online via Whereby ou Google Meet</p>,
      imageSrc: "img/insta-reel-2.png",
      link: "https://www.instagram.com/reel/C9hfcSHOr9M/?igsh=MTh6bGg5amIzdGd5Mg==",
    },
    {
      title: "Agende agora mesmo",
      content: () => (
        <ContactButton onButtonClick={onButtonClick} label="MARQUE SUA AULA" />
      ),
      imageSrc: "img/insta-reel-3.png",
      link: "https://www.instagram.com/reel/CwBUSnNInXV/?igsh=MTBxeGFseHQ5ZWJlZA==",
    },
  ];

  return (
    <S.Container>
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
        <S.Subtitle>PERSONALIZADAS</S.Subtitle>
        <S.Subtitle>ONLINE</S.Subtitle>
      </S.TitleBox>

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
