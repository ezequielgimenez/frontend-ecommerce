import { MyTitleCard, TextSubtitle } from "ui/typography";
import style from "./index.module.css";
import { CardInfo } from "ui/card";
import { ButtonBuyItem, ButtonSignUp } from "ui/buttons";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { createOrdersPreference } from "lib/api-calls";
import { useMe } from "lib/hooks";
import { useState, useEffect } from "react";

export function CarritoItems() {
  const { mutate: globalMutate } = useSWRConfig();
  const { data, error } = useMe();
  const [results, setResults] = useState([]);
  const router = useRouter();

  const idAllProduct = results?.map((p) => p.id);

  //uso useEffect que se ejecutará una sola vez [], cuando el componente se monte por primera vez para ver si hay data en el storage
  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("selectedProducts") || "[]"
    );
    setResults(storedProducts);
  }, []);

  const handleBuyItems = async () => {
    if (data?.data?.email && data?.data?.email.trim() !== "") {
      if (data?.data?.name && data?.data?.name.trim() !== "") {
        const preference = await createOrdersPreference(idAllProduct);
        if (preference.success) {
          localStorage.removeItem("selectedProducts");
          localStorage.removeItem("badgeCount");
          globalMutate("badgeCount", 0);
          router.push(preference.init_point);
        } else {
          alert(preference.message + "error, intentalo nuevamente");
        }
      } else {
        alert("Completa y actualiza tus datos para realizar una compra");
        router.push("/edit-profile");
      }
    } else {
      alert("Inicia session para realizar la compra");
      router.push("/auth-access");
    }
  };

  const handleRemoveCarrito = () => {
    setResults([]);
    localStorage.removeItem("selectedProducts");
    localStorage.removeItem("badgeCount");
    globalMutate("badgeCount", 0);
    router.push(router.asPath);
  };
  return (
    <div
      className={` ${
        results.length > 0 ? style.containerMain : style.mainHeight
      }`}
    >
      <div
        className={style.containerRemoveCarrito}
        onClick={handleRemoveCarrito}
      >
        <ButtonSignUp>Limpiar carrito </ButtonSignUp>
      </div>
      <div>
        <MyTitleCard>Tu Carrito:</MyTitleCard>
      </div>
      <div className={style.containerCard}>
        {results.length > 0 ? (
          results.map((product) => (
            <CardInfo
              key={product.id}
              id={product.id}
              imgSrc={product.img}
              title={product.title}
              price={product.price}
              description={product.description}
            ></CardInfo>
          ))
        ) : (
          <TextSubtitle>No hay productos agregados en tu carrito</TextSubtitle>
        )}
      </div>
      <div className={style.containerButtonBuy}>
        {results.length > 0 ? (
          <ButtonBuyItem onClick={handleBuyItems}>Comprar</ButtonBuyItem>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
