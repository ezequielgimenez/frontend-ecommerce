import { TitleIngreso, LabelComp } from "ui/typography";
import { MyInput } from "ui/input-search";
import style from "./index.module.css";
import { ButtonSaved, ButtonAccess } from "ui/buttons";
import Image from "next/image";

import { useRouter } from "next/router";

//api calls
import { auth } from "lib/api-calls";
import { useState } from "react";

export function IngresoComponent() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleSendForm = async (e) => {
    e.preventDefault();
    if (e.target.email.value) {
      setShow(true);
      const email = e.target.email.value;
      const myEmail = email.trim();
      const data = await auth(myEmail);
      if (data.success) {
        alert("Codigo enviado al email");
        sessionStorage.setItem("email", myEmail);

        router.push("/auth-code");
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
        <Image
          src="/images/ingreso.webp"
          alt="ingreso"
          width={800}
          height={1000}
        />
      </div>
      <form onSubmit={handleSendForm} className={style.containerIngreso}>
        <div>
          <TitleIngreso>Ingresar</TitleIngreso>
        </div>
        <div className={style.content}>
          <LabelComp>Email</LabelComp>
          <MyInput
            type="text"
            name="email"
            placeholder="name@email.com"
          ></MyInput>
        </div>
        <div className={`${style.content} ${show ? style.close : style.open}`}>
          <ButtonSaved type="submit">Continuar</ButtonSaved>
        </div>
        <div className={`${show ? style.open : style.close}`}>
          <ButtonAccess>Continuar</ButtonAccess>
        </div>
      </form>
    </div>
  );
}
