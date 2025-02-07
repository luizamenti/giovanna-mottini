import React from "react";

import * as S from "./Plans.style";

export default function Plans() {
  const plans = [
    {
      title: "Aulas avulsas",
      subtitle:
        "Tenha flexibilidade para escolher quando quiser fazer sua aula",
      value: "Valor: R$ 180 por aula.",
      duration: "Duração: 1h por aula",
    },
    {
      title: "Pacote mensal",
      subtitle: "4 aulas no mês",
      value: "Valor: R$ 560",
      duration: "Duração: 1h por aula",
    },
    {
      title: "Pacote quinzenal",
      subtitle: "2 aulas no mês",
      value: "Valor: R$ 300",
      duration: "Duração: 1h por aula",
    },
    {
      title: "Pacote rotina",
      subtitle: "4 aulas no mês de 30 minutos",
      value: "Valor: R$ 300",
      duration: "Duração: 30min por aula",
    },
  ];
  return (
    <S.Container>
      <S.TitleBox>
        <S.Text
          size="30px"
          textAlign="center"
          border="2px solid black"
          borderRadius="50px"
          padding="10px 30px"
        >
          Escolha seu plano de aulas
        </S.Text>
      </S.TitleBox>

      <S.Content>
        {plans.map((plan) => (
          <S.PlanBox>
            <S.ArrowImg src="img/black-background-arrow.png" />
            <S.PlanTexts>
              <S.PlanTitle>{plan.title}</S.PlanTitle>
              <S.Text size="19px">{plan.subtitle}</S.Text>
              <S.Text size="19px">{plan.value}</S.Text>
              <S.Text size="19px">{plan.duration}</S.Text>
            </S.PlanTexts>
          </S.PlanBox>
        ))}
      </S.Content>
    </S.Container>
  );
}
