import React from "react";

import * as S from "./CopywritingOne.style";

export default function CopywritingOne() {
  return (
    <S.Container>
      <S.PreTitleBox>
        <S.Sparkle src="img/sparkle.png" />
        <S.Text size="19px">Perguntas importantes...</S.Text>
        <S.Sparkle src="img/sparkle.png" />
      </S.PreTitleBox>
      <S.Text size="28px">Você acha que só pode cantar quem tem "dom"?</S.Text>
      <S.Text size="18px" color="purple" textAlign="center">
        E aí vem aquela dúvida:
        <br />
        por que arriscar aprender a cantar?
      </S.Text>
      <S.Text>Talvez você pense assim:</S.Text>
      <ul>
        <li>"Já não estou mais na idade de começar uma nova atividade..."</li>
        <li>"Minha voz é feia e não tem salvação."</li>
        <li>"Cantar não é pra mim."</li>
        <li>"Não consigo acompanhar o ritmo."</li>
        <li>"Minha afinação é péssima."</li>
        <li>"Tenho a voz presa."</li>
      </ul>

      <S.Text>
        Ou então, pode ser que você até cante, mas sente desconfortos como:
      </S.Text>
      <ul>
        <li>"Minha garganta dói quando canto."</li>
        <li>"Parece que preciso gritar para alcançar os agudos."</li>
        <li>"Minha voz é muito fraca."</li>
        <li>"Sempre me pego gritando ao cantar."</li>
        <li>"Não sei se estou cantando afinado ou fora do tom."</li>
      </ul>
    </S.Container>
  );
}
