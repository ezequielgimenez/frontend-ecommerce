import Head from "next/head";

import { MyTitleCard, PriceText, SubtitleItem } from "ui/typography";
import style from "./index.module.css";

export default function ContactoPage() {
  return (
    <div>
      <Head>
        <title>Acerca de</title>
        <meta
          name="description"
          content="Descubre más sobre Modakelar, nuestra misión y visión. Ofrecemos una cuidada selección de calzado."
        />
        <meta
          name="keywords"
          content="Modakelar, eCommerce, calzado, zapatillas, zapatos"
        />
        <meta property="og:title" content="Acerca de Modakelar" />
      </Head>
      <div className={style.containerMain}>
        <div className={style.cardInfo}>
          <MyTitleCard>Acerca de Modakelar</MyTitleCard>
          <PriceText>¿Quiénes Somos?</PriceText>
          <SubtitleItem>
            Modakelar nació con la pasión de ofrecer una experiencia de compra
            única en calzado y moda. Nos especializamos en la venta de
            zapatillas, zapatos, botitas e indumentaria de alta calidad,
            seleccionando cuidadosamente cada uno de nuestros productos para que
            nuestros clientes disfruten tanto de la comodidad como del estilo.
          </SubtitleItem>

          <PriceText>Nuestra Misión</PriceText>
          <SubtitleItem>
            En Modakelar, nuestro objetivo es ofrecer una experiencia de compra
            única y accesible para quienes buscan calzado de calidad.
          </SubtitleItem>

          {/* <h2>Nuestros Valores</h2>
        <ul>
          <li>
            <strong>Innovación:</strong> Fomentamos la creatividad y la
            experimentación en el desarrollo.
          </li>
          <li>
            <strong>Accesibilidad:</strong> Buscamos hacer que el aprendizaje y
            la compra sean accesibles para todos.
          </li>
          <li>
            <strong>Calidad:</strong> Nos comprometemos a ofrecer productos de
            la más alta calidad.
          </li>
        </ul> */}

          <PriceText>Sobre Nuestros Productos</PriceText>
          <SubtitleItem>
            En Modakelar, ofrecemos una cuidada selección de zapatillas, zapatos
            y botas e indumentaria que combinan estilo y confort, ideales para
            cualquier ocasión.
          </SubtitleItem>
        </div>
      </div>
    </div>
  );
}
