import React from "react";

import * as S from "./Item.style";

export default function Item({ itemData, itemIndex, itemsCount }) {
  const { title, content, imageSrc, link } = itemData;
  return (
    <>
      <S.Container>
        <S.InnerDiv>
          <S.Content>
            <S.ItemTitle>{title}</S.ItemTitle>
            <S.HorizontalLine />
            <S.ContentBox>{content()}</S.ContentBox>
            <S.ReelLink href={link} target="_blank" rel="noreferrer">
              <S.PhotoBox>
                <S.InstaReel src={imageSrc} />
                <svg fill="#ffff" width="50px" viewBox="0 0 1024 1024">
                  <path
                    d="M256 832c-11.712 0-23.36-3.2-33.664-9.536A64.170667 64.170667 0 0 1 192 768V256c0-22.208 11.52-42.816 30.336-54.464a64.298667 64.298667 0 0 1 62.272-2.816l512 256a64.064 64.064 0 0 1 0 114.56l-512 256c-8.96 4.48-18.88 6.72-28.608 6.72z"
                    fill=""
                  />
                </svg>
              </S.PhotoBox>
            </S.ReelLink>
          </S.Content>
        </S.InnerDiv>
      </S.Container>
      {itemIndex !== itemsCount - 1 ? <S.VerticalLine /> : <></>}
    </>
  );
}
