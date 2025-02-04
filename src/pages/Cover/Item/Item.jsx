import React from "react";

import * as S from "./Item.style";

export default function Item({ itemData, itemIndex, itemsCount }) {
  const { title, content, imageSrc } = itemData;
  return (
    <>
      <S.Container>
        <S.Content>
          <S.ReelBox>
            <S.Icon src={imageSrc} />
          </S.ReelBox>
          <S.LegendBox>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.HorizontalLine />
            {content()}
          </S.LegendBox>
        </S.Content>
      </S.Container>
      {itemIndex !== itemsCount - 1 ? <S.VerticalLine /> : <></>}
    </>
  );
}
