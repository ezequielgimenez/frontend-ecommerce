import { styled } from "styled-components";
import React from "react";

export const TextMain = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  margin: 5px 0px;
  padding: 10px 0;
  font-size: 55px;
  color: #252b42;

  @media (min-width: 375px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 55px;
  }
`;

export const TextSubtitle = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  margin: 5px 0;
  padding: 10px 0;
  font-size: 20px;
  color: #737373;

  @media (min-width: 375px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const TextMenuHeader = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  color: #737373;
  font-size: 16px;
  cursor: pointer;
  padding: 0 10px;
  text-decoration: none;

  :hover {
    color: #2a59fe !important;
  }

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 0 3px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;

    padding: 0 10px;
  }
`;

// tipografia Card
//
export const MyTitleCard = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 35px;

  @media (min-width: 375px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1280px) {
    font-size: 35px;
  }
`;

export const TitleCard = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 16px;
  font-weight: bold;
  color: #252b42;
`;

export const SubtitleCard = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 14px;
  font-weight: normal;
  color: #737373;
`;

export const BodyCard = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  color: #151414;
  font-size: 12px;
  font-weight: normal;
`;

// tipografia Header nav
//
export const TextNav = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  color: white;
`;

// tipografia Footer
//
export const TitleFooter = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 33px;
  color: #525151;
`;

export const TitleBodyFooter = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const BodyFooter = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  color: white;
  font-size: 10px;
  font-weight: normal;
  color: white;
  cursor: pointer;
`;

export const TextCopyright = styled.p`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  color: white;
  font-size: 10px;
  font-weight: normal;
  color: white;
`;

//tipografia ingreso-email label
//
export const LabelComp = styled.label`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 16px;
`;

export const TitleIngreso = styled(TextMain)`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 40px;
`;

//tipografia title Item product
//
export const TitleItem = styled(TextMain)`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 25px;
`;

export const SubtitleItem = styled(SubtitleCard)`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 22px;
`;

export const PriceText = styled(SubtitleCard)`
  font-family: "Montserrat", sans-serif; /* Usar Montserrat */

  font-size: 36px;
`;
