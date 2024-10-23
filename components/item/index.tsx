import { TitleItem, SubtitleItem, LabelComp, PriceText } from "ui/typography";
import { ButtonBuyItem } from "ui/buttons";
import style from "./index.module.css";
import { useRouter } from "next/router";
import { useMe, useProductID } from "lib/hooks";
import { createPreference } from "lib/api-calls";
import { useEffect } from "react";

export function Item() {
  const router = useRouter();
  const idProduct = router.query.query as string;
  const data = useProductID(idProduct);
  const { data: userData, error: userError } = useMe();

  const results = data?.data;

  //al montar el componente si no hay email en el user es porque no esta logueado
  useEffect(() => {
    if (!userData?.data?.email) {
      router.push("/auth-access");
    }
  }, []);

  const handleBuyProduct = async () => {
    if (userData?.data?.email && userData?.data?.email !== "") {
      if (userData?.data?.name && userData?.data?.name !== "") {
        const preference = await createPreference(idProduct);
        if (preference.success) {
          router.push(preference.init_point);
        } else {
          alert(preference.message + ", intentalo nuevamente");
        }
      } else {
        alert("Completa y actualiza tus datos para poder realizar una compra");
        router.push("/edit-profile");
      }
    } else {
      alert("Inicia session para realizar la compra");
      router.push("/auth-access");
    }
  };

  return (
    <div className={style.containerMain}>
      {results?.data ? (
        <div className={style.containerMain}>
          <div className={style.containerContent}>
            <div className={style.containerImg}>
              <img src={`${results?.data ? results.data.image : ""}`} alt="" />
            </div>
            <div className={style.containerInfo}>
              <div className={style.containerTitle}>
                <TitleItem>{`${
                  results?.data ? results.data.name : ""
                }`}</TitleItem>
              </div>
              <SubtitleItem>{`${
                results?.data ? results.data.marca : ""
              }`}</SubtitleItem>
              <LabelComp>
                {`${results?.data ? results.data.description : ""}`}
              </LabelComp>
              <PriceText>
                ${`${results?.data ? results.data.precio : ""}`}
              </PriceText>
              <LabelComp>
                {"Stock: "} {`${results?.data ? results.data.stock : ""}`}
              </LabelComp>
              <div className={style.containerButton}>
                <ButtonBuyItem onClick={handleBuyProduct}>
                  Comprar
                </ButtonBuyItem>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <TitleItem>Aún no buscaste un producto</TitleItem>
        </div>
      )}
    </div>
  );
}
