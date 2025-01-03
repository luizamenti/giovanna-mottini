import React from "react";

import * as S from "./ContactButton.style";

export default function ContactButton({ onButtonClick, label }) {
  return <S.FilledButton onClick={onButtonClick}>{label}</S.FilledButton>;
}
