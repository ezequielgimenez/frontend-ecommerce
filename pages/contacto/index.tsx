import Head from "next/head";

import { MyTitleCard, PriceText, SubtitleItem } from "ui/typography";
import style from "./index.module.css";

export default function ContactoPage() {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para consultas, soporte o más información sobre nuestros productos y servicios."
        />
        <meta
          name="keywords"
          content="contacto, soporte, consultas, atención al cliente"
        />
        <meta name="author" content="Modakelar" />
        <meta property="og:title" content="Contacto - Modakelar" />
        <meta
          property="og:description"
          content="Ponte en contacto con nosotros para consultas, soporte o más información sobre nuestros productos y servicios."
        />
      </Head>
      <div className={style.containerMain}>
        <div className={style.cardInfo}>
          <MyTitleCard>Contacto</MyTitleCard>
          <SubtitleItem>Teléfono</SubtitleItem>
          <PriceText>123456781</PriceText>
          <SubtitleItem>Email</SubtitleItem>
          <SubtitleItem>modakelar@email.com</SubtitleItem>
          <SubtitleItem>Seguinos</SubtitleItem>
          <div className={style.containerImg}>
            <a href="http://www.facebook.com">
              <img src="/images-social/facebook.svg" alt="" />
            </a>
            <a href="http://www.twitter.com">
              <img src="/images-social/twitter.png" alt="" />
            </a>
            <a href="http://www.instagram.com">
              <img src="/images-social/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
