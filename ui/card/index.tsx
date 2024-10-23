import { TitleCard, SubtitleCard, BodyCard, TitleItem } from "ui/typography";
import { ButtonBuy } from "ui/buttons";
import style from "./index.module.css";

type myProps = {
  id?: string;
  title?: string;
  marca?: string;
  price?: string;
  description?: string;
  imgSrc?: string;
  getData?: (
    id: string,
    title: string,
    price?: string,
    img?: string,
    description?: string
  ) => void;
  getBuyId?: (id: string) => void;
};

export function Card(p: myProps) {
  const handleBuy = () => {
    if (p.getBuyId) {
      p.getBuyId(p.id);
    }
  };

  const handleData = () => {
    if (p.getData) {
      p.getData(p.id, p.title, p.price, p.imgSrc, p.description);
    }
  };
  return (
    <div>
      <div className={style.cardMain}>
        <div className={style.containerImg}>
          <img src={p.imgSrc} alt="" />
        </div>
        <div className={style.containerTitleButton}>
          <div className={style.containerText}>
            <TitleCard>{p.title}</TitleCard>
            <SubtitleCard>{p.marca}</SubtitleCard>
            <TitleCard>${p.price}</TitleCard>
            <div style={{ display: "none" }}>{p.description}</div>
          </div>
          <div className={style.containerButton}>
            <div className={style.contentButton}>
              <ButtonBuy onClick={handleBuy}>+ Comprar</ButtonBuy>
            </div>
            <div className={style.contentButton}>
              <ButtonBuy onClick={handleData}>+ Carrito</ButtonBuy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardInfo(p: myProps) {
  return (
    <div>
      <div className={style.cardMainInfo}>
        <div className={style.containerImgInfo}>
          <img src={p.imgSrc} alt="" />
        </div>
        <div className={style.line}></div>
        <div className={style.containerTitleButtonInfo}>
          <div className={style.containerTextInfo}>
            <SubtitleCard>{p.title}</SubtitleCard>
            <TitleItem>${p.price}</TitleItem>
            <div className={style.containerDescription}>
              <BodyCard>{p.description}</BodyCard>
            </div>
          </div>
        </div>
        <div className={style.containerButton}>
          <div className={style.contentButton}></div>
        </div>
      </div>
    </div>
  );
}
