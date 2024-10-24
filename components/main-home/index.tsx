import Head from "next/head";
import Image from "next/image";

import { TextMain, TextSubtitle } from "ui/typography";
import { ButtonMain } from "ui/buttons";
import { SwiperMobile } from "components/swiper-mobile";

// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import style from "./index.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useRouter } from "next/router";

export function MainHome() {
  const router = useRouter();

  const handleCategories = () => {
    router.push("/category");
  };

  return (
    <div>
      <Head>
        <title>Modakelar - Indumentaria</title>
        <meta
          name="description"
          content="Bienvenido a Modakelar, tu destino para encontrar las mejores zapatillas, zapatos, botas e indumentaria. Explora nuestros productos destacados y ofertas especiales."
        />
        <meta
          name="keywords"
          content="zapatillas, zapatos, botas, calzado, indumentaria, tienda online, ofertas"
        />
        <meta name="author" content="Tu Nombre o el nombre de la empresa" />
        <link rel="canonical" href="https://modakelar.com" />
      </Head>
      <div className={style.containerDesktop}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          // effect="fade"
          spaceBetween={50}
          slidesPerView={1} // Cambiamos a 1 para que ocupe todo el ancho
          autoplay={{ delay: 2000 }} // Autoplay activado con duración de 2 segundos
          navigation // Flechas de navegación
          pagination={{ clickable: true }} // Indicadores de paginación
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={style.containerMain}>
              <div className={style.content}>
                <TextMain>Descubre la moda</TextMain>
                <TextSubtitle>
                  Encontrá los mejores productos ahora
                </TextSubtitle>
                <ButtonMain onClick={handleCategories}>
                  Comprar ahora
                </ButtonMain>
              </div>
              <div className={style.containerImg}>
                <Image
                  src="/images/banner1.webp"
                  alt="Banner 1"
                  width={1293}
                  height={622}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.containerMain}>
              <div className={style.content}>
                <TextMain>Explora las tendencias</TextMain>
                <TextSubtitle>Descubre ofertas increíbles hoy</TextSubtitle>
                <ButtonMain onClick={handleCategories}>
                  Comprar ahora
                </ButtonMain>
              </div>
              <div className={style.containerImg}>
                <Image
                  src="/images/banner2.webp"
                  alt="Banner 2"
                  width={1293}
                  height={622}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.containerMain}>
              <div className={style.content}>
                <TextMain>Conoce el estilo</TextMain>
                <TextSubtitle>
                  Encontrá la mejor indumentaria ahora
                </TextSubtitle>
                <ButtonMain onClick={handleCategories}>
                  Comprar ahora
                </ButtonMain>
              </div>
              <div className={style.containerImg}>
                <Image
                  src="/images/banner3.webp"
                  alt="Banner 3"
                  width={1293}
                  height={622}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* si la pantalla esta en 375 el contenedor arriba toma none y el de abajo se activa */}
      <div className={style.containerMobile}>
        <SwiperMobile></SwiperMobile>
      </div>
    </div>
  );
}
