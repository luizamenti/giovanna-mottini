import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";

import * as S from "./Contact.style";

import ContactButton from "../../components/ContactButton/ContactButton";

const Contact = forwardRef((_, ref) => {
  const [inputData, setInputData] = useState({});
  const [error, setError] = useState([]);
  const [isSending, setIsSending] = useState(false);

  function onSendClick() {
    const requiredFields = ["nome", "email", "celular"];
    const emptyFields = [];
    requiredFields.forEach((field) => {
      if (!inputData[field]) {
        emptyFields.push(field);
      }
    });
    setError(emptyFields);

    if (emptyFields.length) return;

    setIsSending(true);
    handleConversion();
    sendEmail();
  }

  function sendEmail() {
    emailjs
      .send(
        "service_e6svevo", // EmailJS service ID
        "template_5v1t6aq", // EmailJS template ID
        {
          to_name: "Giovanna",
          from_name: inputData.nome,
          message: `Nome: ${inputData.nome}
            Email: ${inputData.email}
            Celular: ${inputData.celular}
            Mensagem: ${inputData.mensagem ? inputData.mensagem : ""}
            `,
        },
        "bXcdpR88ptLHCzfEo" // public key
      )
      .then(
        () => {
          alert("Seu contato foi enviado com sucesso! Agora é só aguardar :)");
          setInputData({});
          setIsSending(false);
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert(
            "Ops, tivemos um problema em enviar sua mensagem. Por favor, tente novamente."
          );
          setIsSending(false);
        }
      );
  }

  function handleConversion() {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11539168849/lnzeCKOVr4AaENH8pv4q",
        value: 1.0,
        currency: "BRL",
      });
    } else {
      console.error("gtag não carregado ainda");
    }
  }

  function onInputChange(text, field) {
    if (error.includes(field)) {
      setError(error.filter((err) => err !== field));
    }
    setInputData({ ...inputData, [field]: text });
  }

  return (
    <S.Container ref={ref}>
      <S.OuterBox>
        <S.FirstColumn />
        <S.Box>
          <S.Title>Marque sua aula</S.Title>
          <S.Subtitle>
            Preencha os campos abaixo e aguarde nosso contato!
            <br />
            Tempo médio de resposta: 1 hora
          </S.Subtitle>
          <S.InputBox>
            <S.Label>Nome</S.Label>
            <S.Input
              value={inputData.nome || ""}
              onChange={(e) => onInputChange(e.target.value, "nome")}
              border={error.includes("nome")}
            />
            {error.includes("nome") && (
              <S.ErrorMessage>Preencha seu nome</S.ErrorMessage>
            )}
          </S.InputBox>
          <S.InputBox>
            <S.Label>E-mail</S.Label>
            <S.Input
              value={inputData.email || ""}
              onChange={(e) => onInputChange(e.target.value, "email")}
              border={error.includes("email")}
            />
            {error.includes("email") && (
              <S.ErrorMessage>Preencha seu e-mail</S.ErrorMessage>
            )}
          </S.InputBox>
          <S.InputBox>
            <S.Label>WhatsApp ou celular com DDD</S.Label>
            <S.Input
              value={inputData.celular || ""}
              onChange={(e) => onInputChange(e.target.value, "celular")}
              border={error.includes("celular")}
            />
            {error.includes("celular") && (
              <S.ErrorMessage>Preencha seu celular</S.ErrorMessage>
            )}
          </S.InputBox>
          <S.InputBox>
            <S.Label>Mensagem (opcional)</S.Label>
            <S.TextArea
              value={inputData.mensagem || ""}
              onChange={(e) => onInputChange(e.target.value, "mensagem")}
            />
          </S.InputBox>
          <ContactButton
            label={isSending ? "ENVIANDO..." : "ENVIAR"}
            onButtonClick={onSendClick}
          />
        </S.Box>
        <S.ImageBox>
          <S.Image src="img/bird.png" />
        </S.ImageBox>
      </S.OuterBox>
    </S.Container>
  );
});

export default Contact;
