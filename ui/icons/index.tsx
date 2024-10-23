import Logo from "./logo.svg";
import Carrito from "./carrito.svg";
import Burger from "./burger.svg";
import styled from "styled-components";

export const LogoIcon = styled(Logo)`
  width: 132px;
  height: 19px;
  cursor: pointer;
`;

export const CarritoIcon = styled(Carrito)`
  width: 26px;
  height: 27px;
  cursor: pointer;
`;

export const LogoIconSmall = styled(LogoIcon)`
  width: 100px;
`;

export const BurgerIcon = styled(Burger)`
  cursor: pointer;
`;
