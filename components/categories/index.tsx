import { MyTitleCard } from "ui/typography";
import style from "./index.module.css";
import { useRouter } from "next/router";

export function Categories() {
  const router = useRouter();

  const handleZapatillas = () => {
    router.push(`/category?query=${encodeURIComponent("Zapatillas")}`);
  };

  const handleBotas = () => {
    router.push(`/category?query=${encodeURIComponent("Botas")}`);
  };
  const handleZapatos = () => {
    router.push(`/category?query=${encodeURIComponent("Zapato")}`);
  };
  return (
    <div className={style.mainContainer}>
      <MyTitleCard>Categorias</MyTitleCard>
      <div className={style.containerGrid}>
        <div onClick={handleZapatillas} className={style.item1}>
          <img
            className={style.img1}
            src="/images-categories/category1.webp"
            alt=""
          />
        </div>
        <div onClick={handleBotas} className={style.item2}>
          <img
            className={style.img2}
            src="/images-categories/category2.webp"
            alt=""
          />
        </div>
        <div onClick={handleZapatos} className={style.item3}>
          <img
            className={style.img3}
            src="/images-categories/category3.webp"
            alt=""
          />
        </div>
      </div>

      {/* container mobile */}
      <div className={style.containerMobile}>
        <div className={style.containerImg}>
          <img
            className={style.img1}
            src="/images-categories/category1.webp"
            alt=""
          />
        </div>
        <div className={style.containerImg}>
          <img
            className={style.img2}
            src="/images-categories/category2.webp"
            alt=""
          />
        </div>
        <div className={style.containerImg}>
          <img
            className={style.img3}
            src="/images-categories/category3.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
