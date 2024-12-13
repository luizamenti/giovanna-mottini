import React from "react";

import * as S from "./Cover.style";

import Item from "./Item/Item";
import ContactButton from "../../components/ContactButton/ContactButton";

export default function Cover() {
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
      content: () => <ContactButton />,
      imageSrc: "img/insta-reel-3.png",
      link: "https://www.instagram.com/reel/CwBUSnNInXV/?igsh=MTBxeGFseHQ5ZWJlZA==",
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <S.Title>AULAS PARTICULARES DE CANTO</S.Title>
          <S.Subtitle>MÉTODO VOZ INFINITA</S.Subtitle>
          <S.NameBox>
            {/* <S.NameLine>GIOVANNA MOTTINI</S.NameLine> */}
            <S.NameLine>G</S.NameLine>
          </S.NameBox>
        </S.Logo>
        <S.ButtonSet>
          <S.GhostButton>SAIBA MAIS</S.GhostButton>
          <ContactButton />
        </S.ButtonSet>
      </S.Header>

      <S.VideoBox>
        <iframe
          width="500"
          height="250"
          src="https://www.youtube.com/embed/qKITQd4WBzM?si=XfEg_dKeUo1vCee2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </S.VideoBox>

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
