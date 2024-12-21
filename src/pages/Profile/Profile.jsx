import React, { forwardRef } from "react";

import * as S from "./Profile.style";

const Profile = forwardRef((_, ref) => {
  return (
    <S.Container ref={ref}>
      <S.Img src="img/giovanna.JPEG" />
      <S.TextBox>
        <S.Title src="img/profile-title.png" />
        <div>
          <S.Text>
            Minha relação com a música começou na infância, quando já
            participava de festivais e concursos de canto, o que consolidou
            minha paixão pela arte. Sou cantora, compositora, professora e
            musicista formada em Música Popular pela UFRGS e, ao longo da minha
            trajetória, desenvolvi projetos como As Tubas, indicado ao Prêmio
            Açorianos de Música em 2021.
          </S.Text>
          <S.Text>
            Atualmente, estou trabalhando no projeto SONS Azuis em parceria com
            o guitarrista norte-americano Adam Ratner e finalizando meu primeiro
            EP autoral, que conta com a participação especial do renomado
            baixista Michael Pipoquinha em uma das faixas. Também participei de
            residências artísticas, como o Projeto Concha (Natura Musical), e
            colaborei em lançamentos como o EP O que range, de Rita Zarte e
            Respirar 336 com o Coletivo Palma.
          </S.Text>
          <S.Text>
            Vivo em São Paulo, onde já cantei em espaços como o Terraço Itália e
            Alma SP, e estou cursando o programa Canto Consciente da
            fonoáudiologa Fernanda Lopes.
          </S.Text>
        </div>
      </S.TextBox>
    </S.Container>
  );
});

export default Profile;
