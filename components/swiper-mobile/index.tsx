import { TextMain } from "ui/typography";

// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import style from "./index.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useRouter } from "next/router";
import { MyInputSearch } from "ui/input-search";
import { useMe } from "lib/hooks";

export function SwiperMobile() {
  const router = useRouter();
  const { data: userData, error } = useMe();

  const handleQuerySearch = (e) => {
    const query = e.target.search.value.trim();
    e.preventDefault();
    if (!query) {
      alert("Por favor, ingresa un término de búsqueda.");
    } else {
      if (!userData?.data?.email) {
        router.push("/auth-access");
      } else {
        router.push(`/search-items?query=${encodeURIComponent(query)}`);
      }
      e.target.search.value = "";
    }
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1} // Cambiamos a 1 para que ocupe todo el ancho
      autoplay={{ delay: 8000 }} // Autoplay activado con duración de 2 segundos
      navigation // Flechas de navegación
      pagination={{ clickable: true }} // Indicadores de paginación
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={style.containerMain}>
          <div className={style.content}>
            <div>
              <TextMain>Busca lo mejor ahora</TextMain>
            </div>
            <form onSubmit={handleQuerySearch}>
              <MyInputSearch type="text" name="search"></MyInputSearch>
            </form>
          </div>
          <div className={style.containerImg}>
            <img src="/images/svgphone1.webp" alt="Banner 1" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.containerMain}>
          <div className={style.content}>
            <div>
              <TextMain>Encuentra lo que amas</TextMain>
            </div>
            <form onSubmit={handleQuerySearch}>
              <MyInputSearch type="text" name="search"></MyInputSearch>
            </form>
          </div>
          <div className={style.containerImg}>
            <img src="/images/svgphone2.webp" alt="Banner 2" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.containerMain}>
          <div className={style.content}>
            <div>
              <TextMain>Todo para ti, al instante</TextMain>
            </div>
            <form onSubmit={handleQuerySearch}>
              <MyInputSearch type="text" name="search"></MyInputSearch>
            </form>
          </div>
          <div className={style.containerImg}>
            <img src="/images/svgphone3.webp" alt="Banner 3" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
