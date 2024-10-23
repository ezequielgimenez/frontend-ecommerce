import { TitleIngreso, LabelComp } from "ui/typography";
import { MyInput, MyInputPhone } from "ui/input-search";
import style from "./index.module.css";
import { ButtonSaved } from "ui/buttons";
import { updateUser } from "lib/api-calls";
import { useRouter } from "next/router";
import { useMe } from "lib/hooks";
import { useEffect } from "react";

export function MiPerfilComp() {
  const router = useRouter();
  const { data: userData, error } = useMe();

  //al montar el componente si no hay email que se loguee
  useEffect(() => {
    if (!userData?.data?.email) {
      router.push("/auth-access");
    }
  }, []);

  const handleSendForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const surname = e.target.apellido.value.trim();
    const numberPhone = e.target.telefono.value.trim();
    const calle = e.target.direccion.value.trim();
    const nroCalle = e.target.nroCalle.value.trim();
    const codePostal = e.target.nroCodePostal.value.trim();

    if (
      !name ||
      !surname ||
      !numberPhone ||
      !calle ||
      !nroCalle ||
      !codePostal
    ) {
      alert("Por favor no dejes campos sin completar");
    } else {
      const data = {
        name,
        surname,
        calle,
        numberPhone,
        nroCalle,
        codePostal,
      };
      const user = await updateUser(data);
      if (user.success) {
        alert("Usuario actualizado correctamente");
        router.push("/");
      } else {
        alert("Ocurrio un error, por favor vuelve a intentarlo");
      }
    }
  };

  return (
    <div className={style.containerMain}>
      <form onSubmit={handleSendForm} className={style.containerIngreso}>
        <div>
          <TitleIngreso>Mi Perfil</TitleIngreso>
        </div>
        <div className={style.content}>
          <LabelComp>Nombre completo</LabelComp>
          <MyInput type="text" name="name" placeholder=""></MyInput>
          <LabelComp>Apellido</LabelComp>
          <MyInput type="text" name="apellido" placeholder=""></MyInput>

          <LabelComp>Número Telefono</LabelComp>
          <MyInputPhone
            type="number"
            name="telefono"
            placeholder=""
          ></MyInputPhone>
          <LabelComp>Dirección</LabelComp>
          <MyInput
            type="text"
            name="direccion"
            placeholder="Nombre calle"
          ></MyInput>
          <MyInput
            type="number"
            name="nroCalle"
            placeholder="Nro Calle"
          ></MyInput>
          <MyInput
            type="number"
            name="nroCodePostal"
            placeholder="Codigo Postal"
          ></MyInput>
        </div>
        <div className={style.content}>
          <ButtonSaved type="submit">Guardar</ButtonSaved>
        </div>
      </form>
    </div>
  );
}
