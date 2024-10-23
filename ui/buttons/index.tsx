import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import styled from "styled-components";

type myProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

function MyButtonOutlined({
  children,
  className,
  onClick,
  type = "button",
}: myProps) {
  return (
    <Button
      className={className}
      variant="outlined"
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}

function MyButton({ children, className, onClick, type = "button" }: myProps) {
  return (
    <Button
      className={className}
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}

export function ButtonLoading({
  children,
  className,
  onClick,
  type = "button",
}: myProps) {
  return (
    <LoadingButton
      className={className}
      onClick={onClick}
      variant="contained"
      type={type}
      loading
      loadingPosition="start"
    >
      {children}
    </LoadingButton>
  );
}

export const ButtonLogin = styled(MyButtonOutlined)`
  color: black;
  width: 92px;
  height: 48px;
  border-color: #737373;
  margin: 0 10px;
`;

export const ButtonSignUp = styled(MyButton)`
  background-color: #737373;
  color: white;
  width: 92px;
  height: 48px;
  margin: 0 10px;
`;

export const ButtonPerfil = styled(MyButton)`
  background-color: #737373;
  color: white;
  width: 130px;
  height: 40px;
  margin: 0 10px;
`;

export const ButtonLoginSmall = styled(ButtonLogin)`
  font-size: 10px;
  width: 30px;
  height: 37px;
  margin: 0 5px;
`;

export const ButtonSignUpSmall = styled(ButtonSignUp)`
  font-size: 10px;
  width: 30px;
  height: 37px;
  margin: 0 5px;
`;

export const ButtonMain = styled(MyButton)`
  background-color: #434c4c;
  font-size: 23px;
  font-weight: bold;
  color: white;
  width: 314px;
  height: 62px;
  margin: 20px 0;

  @media (min-width: 768px) {
    font-size: 15px;
    width: 200px;
    height: 50px;
    margin: 20px 0;
  }

  @media (min-width: 1280px) {
    font-size: 23px;
    width: 314px;
    height: 62px;
  }
`;

export const ButtonBuy = styled(MyButton)`
  width: 116px;
  height: 40px;
  background-color: #1a1a1a;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
`;

export const ButtonAccess = styled(ButtonLoading)`
  width: 333px;
  height: 50px;
  background-color: #737373;
  font-size: 20px;
`;

export const ButtonSaved = styled(MyButton)`
  width: 333px;
  height: 50px;
  background-color: #737373;
  font-size: 20px;
`;

export const ButtonBuyItem = styled(MyButton)`
  width: 421px;
  height: 63px;
  background-color: #737373;
  font-size: 20px;
`;
