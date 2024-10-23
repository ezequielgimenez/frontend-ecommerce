import { TitleIngreso, LabelComp } from "ui/typography";
import { MyInput } from "ui/input-search";
import style from "./index.module.css";
import { ButtonSaved, ButtonAccess } from "ui/buttons";

import { useRouter } from "next/router";

//api calls
import { authToken } from "lib/api-calls";
import { useState } from "react";

export function CodeComponent() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleSendForm = async (e) => {
    e.preventDefault();

    if (e.target.code.value) {
      setShow(true);
      const code = e.target.code.value;
      const myCode = code.trim();
      const email = sessionStorage.getItem("email");
      const data = await authToken(email, myCode);
      if (data.success) {
        router.push("/");
      } else {
        alert(data.message);
      }
    } else {
      alert("Por favor no dejes campos sin completar");
    }
  };

  return (
    <div className={style.containerMain}>
      <div className={style.containerImg}>
        <img src="/images/ingreso.webp" alt="" />
      </div>
      <form onSubmit={handleSendForm} className={style.containerIngreso}>
        <div>
          <TitleIngreso>Ingresa el codigo</TitleIngreso>
        </div>
        <div className={style.content}>
          <LabelComp>Codigo</LabelComp>
          <MyInput type="text" name="code"></MyInput>
        </div>
        <div className={`${style.content} ${show ? style.close : style.open}`}>
          <ButtonSaved type="submit">Ingresar</ButtonSaved>
        </div>
        <div className={`${show ? style.open : style.close}`}>
          <ButtonAccess>Ingresar</ButtonAccess>
        </div>
      </form>
    </div>
  );
}
