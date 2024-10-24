import { MyTitleCard } from "ui/typography";
import style from "./index.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

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
          <Image
            className={style.img1}
            src="/images-categories/category1.webp"
            alt="categoria-zapatilla"
            width={1200}
            height={841}
          />
        </div>
        <div onClick={handleBotas} className={style.item2}>
          <Image
            className={style.img2}
            src="/images-categories/category2.webp"
            alt="categoria-botita"
            width={1200}
            height={841}
          />
        </div>
        <div onClick={handleZapatos} className={style.item3}>
          <Image
            className={style.img3}
            src="/images-categories/category3.webp"
            alt="categoria-zapato"
            width={1200}
            height={841}
          />
        </div>
      </div>

      {/* container mobile */}
      <div className={style.containerMobile}>
        <div className={style.containerImg}>
          <Image
            className={style.img1}
            src="/images-categories/category1.webp"
            alt="categoria-zapatilla"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={style.containerImg}>
          <Image
            className={style.img2}
            src="/images-categories/category2.webp"
            alt="categoria-botita"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={style.containerImg}>
          <Image
            className={style.img3}
            src="/images-categories/category3.webp"
            alt="categoria-zapato"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
