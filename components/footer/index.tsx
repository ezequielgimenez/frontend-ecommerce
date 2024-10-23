import {
  TitleFooter,
  TitleBodyFooter,
  BodyFooter,
  TextCopyright,
} from "ui/typography";
import style from "./index.module.css";

export function MyFooter() {
  return (
    <div>
      <footer className={style.footer}>
        <div>
          <TitleFooter>Modakelar</TitleFooter>
        </div>
        <div className={style.containerTextImg}>
          <div>
            <TitleBodyFooter>Pages</TitleBodyFooter>
            <a style={{ textDecoration: "none" }} href="/acerca-de">
              <BodyFooter>Acerca de</BodyFooter>
            </a>
            <a style={{ textDecoration: "none" }} href="/category">
              <BodyFooter>Categorias</BodyFooter>
            </a>
            <a style={{ textDecoration: "none" }} href="/contacto">
              <BodyFooter>Contacto</BodyFooter>
            </a>
          </div>
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
        <div className={style.containerCopyright}>
          <div className={style.lineFooter}></div>
          <TextCopyright>
            © 2023 Modakelar Inc. All rights reserved{" "}
          </TextCopyright>
        </div>
      </footer>
    </div>
  );
}
