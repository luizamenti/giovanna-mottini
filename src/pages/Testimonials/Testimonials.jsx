import React from "react";

import * as S from "./Testimonials.style";

import TestimonialItem from "./TestimonialItem/TestimonialItem";

export default function Testimonials() {
  const testimonialsData = [
    {
      photo: "img/anselmo.png",
      name: "Anselmo Pierdoná",
      text: `Cantar deve ser algo prazeroso, divertido, agradável.
      Mas no começo tem aquela barreira chamada VERGOINHA. E isso dá uma travada forte na pessoa.
      Por isso que a profe arrasa. A variedade de exercícios e aquecimentos maravilhosos é quase infinita. Eles ajudam muito a achar o tom, a alcançar as notas e de fato, soltar a voz.
      Além disso, o que também faz toda a diferença pra mim, é a forma leve, solta e descontraída dela de ensinar. Isso alivia o peso, e aí tudo acontece muito mais natural e empolgante.`,
    },
    {
      photo: "img/paulo.png",
      name: "Paulo Bassanesi",
      text: "Gi é uma excelente professora, paciente com aulas dinâmicas sempre disposta a se adaptar ao meu ritmo. Gi também traz exercícios e técnicas novas com muita frequência, está sempre se mantendo atualizada e isso torna a aula sempre interessante, isso que faço aula com ela a 3 anos e ela segue trazendo novidades.\nIndicaria ela para qualquer pessoa de qualquer idade e de qualquer nivel que gostaria de aprender a cantar.",
    },
    {
      photo: "",
      name: "Renan Zacché",
      text: "A Giovanna é ótima, as aulas são super dinâmicas e customizadas de acordo com as minhas necessidades. Em pouco tempo já vejo um grande avanço na minha técnica vocal com as aulas dela. Super recomendo!",
    },
    {
      photo: "img/renato.png",
      name: "Renato Kumamoto",
      text: " A Gi é uma excelente professora e uma talentosa musicista. Comecei a fazer aulas com ela há alguns meses e, ao longo desse período, aprendi muito. Suas aulas me ensinaram a respirar adequadamente, a articular melhor todos os músculos necessários para cantar e a equilibrar a atenção entre a voz e o instrumento. Além disso, as aulas são leves, instrutivas e divertidas.",
    },
    {
      photo: "",
      name: "Mateus",
      text: "A Gi é a melhor professora de canto que ja tive. Ela entendeu o meu caso específico e sem enrolação trabalha (de uma forma leve) especificamente formas de desenvolver e conscientizar minha voz. Cada aula é uma revelação diferente!",
    },
  ];

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          O que os <br />
          alunos estão <br /> pensando
          <br /> das aulas...
        </S.Title>
        <S.StartsImg src="img/5stars.png" />
      </S.TitleContainer>
      <S.ItemsContainer>
        {testimonialsData.map((data) => (
          <TestimonialItem data={data} />
        ))}
      </S.ItemsContainer>
    </S.Container>
  );
}
