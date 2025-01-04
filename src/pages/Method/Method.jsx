import React from "react";

import * as S from "./Method.style";

import ContactButton from "../../components/ContactButton/ContactButton";

export default function Method({ onButtonClick }) {
  return (
    <S.Container>
      <S.Content>
        <S.Subtitle fontSize="35px">CONHEÇA O MÉTODO:</S.Subtitle>
        <S.Title>VOZ INFINITA</S.Title>
        <S.Text>
          Meu método de ensino oferece um acompanhamento personalizado no
          aprendizado do canto, com um curso claro, prático e leve.
        </S.Text>
        <S.Text>
          As aulas são cuidadosamente estruturadas para proporcionar um ambiente
          acolhedor, que encoraja a criatividade, enquanto desafia o aluno a
          explorar e expandir suas capacidades vocais.
        </S.Text>
        <S.Text>
          Cada aula é dividida em duas partes, garantindo um equilíbrio entre
          técnica e expressão artística.
        </S.Text>

        <S.Subtitle marginTop="2rem" color="purple" size="25px">
          A estrutura das aulas do método
        </S.Subtitle>
        <S.Subtitle size="22px">VOZ INFINITA</S.Subtitle>

        <S.Subtitle size="23px" marginTop="3rem">
          PRIMEIRA PARTE DA AULA: TÉCNICA VOCAL
        </S.Subtitle>
        <S.Box>
          <S.VerticalTextBox>
            <S.VerticalText>PRIMEIRA PARTE</S.VerticalText>
          </S.VerticalTextBox>
          <S.ListBox>
            <ul>
              <li>
                <b>Alongamento</b> e reset corporal
              </li>
              <li>
                <b>Respiração</b> e reset mental
              </li>
              <li>
                <b>Reset vocal</b>
              </li>
              <li>
                <b>Aquecimento</b> vocal
              </li>
              <li>
                <b>Técnica vocal</b> (exercícios específicos para cada voz)
              </li>
            </ul>
          </S.ListBox>
        </S.Box>

        <S.Subtitle size="23px" marginTop="3rem">
          SEGUNDA PARTE DA AULA: CANTO
        </S.Subtitle>
        <S.Box darkPurple>
          <S.VerticalTextBox>
            <S.VerticalText>SEGUNDA PARTE</S.VerticalText>
          </S.VerticalTextBox>
          <S.ListBox>
            <ul>
              <li>
                Trabalhar <b>repertório</b> escolhido pelo aluno
              </li>
              <li>
                <b>Musicalidade</b>: afinação, consciência rítmica, percepção e
                criação dentro do repertório
              </li>
              <li>
                <b>Interpretação</b> vocal: técnicas para transmitir sentimentos
                e cantar de forma mais intencional
              </li>
              <li>
                <b>Técnica</b> vocal na prática no repertório: modos de fonação,
                intensidades, agilidade vocal, registros vocais...
              </li>
            </ul>
          </S.ListBox>
        </S.Box>

        <S.Text marginTop="1rem" marginBottom="1rem">
          INFORMAÇÕES IMPORTANTES
        </S.Text>
        <S.List>
          <li>DURAÇÃO DA AULA: 60 minutos</li>
          <li>TEMOS: Pacotes de aulas e aulas avulsas</li>
          <li>
            Entre em contato para agendar seu horário e receber o valor das
            aulas
          </li>
        </S.List>

        <S.ButtonBox>
          <ContactButton
            onButtonClick={onButtonClick}
            label="MARQUE SUA AULA"
          />
        </S.ButtonBox>
      </S.Content>
    </S.Container>
  );
}
