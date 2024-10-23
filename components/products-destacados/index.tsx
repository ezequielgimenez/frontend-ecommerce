import Head from "next/head";

import { MyTitleCard, TextSubtitle } from "ui/typography";
import style from "./index.module.css";
import { Card } from "ui/card";
import { useProductsDest } from "lib/hooks";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";

export function ProductosDestacados({ data }) {
  const results = data?.results;
  const { mutate: globalMutate } = useSWRConfig();
  const router = useRouter();

  const handleBuyItem = (idProduct) => {
    router.push(`/item?query=${encodeURIComponent(idProduct)}`);
  };

  const handleCardClick = (id, title, price, img, description) => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const storedProducts = JSON.parse(
      localStorage.getItem("selectedProducts") || "[]"
    );

    localStorage.setItem(
      "longitudProductos",
      JSON.stringify(storedProducts.length)
    );

    const newProducts = [
      ...storedProducts,
      { id, title, price, img, description },
    ];
    localStorage.setItem("selectedProducts", JSON.stringify(newProducts));

    globalMutate("badgeCount", (count) => {
      const newCount = (count || 0) + 1;
      localStorage.setItem("badgeCount", JSON.stringify(newCount));
      return newCount;
    });
  };

  return (
    <div className={style.containerMain}>
      <Head>
        <meta
          name="description"
          content="Productos destacados más comprados y lo mas usados!."
        />
        <meta
          name="keywords"
          content="zapatillas, zapatos, botas, destacados"
        />
      </Head>
      <div>
        <MyTitleCard>Productos Destacados</MyTitleCard>
      </div>
      <div className={style.containerCard}>
        {results?.length > 0 ? (
          results.map((product) => (
            <Card
              key={product.objectID}
              id={product.objectID}
              title={product.name}
              description={product.description}
              marca={product.marca}
              imgSrc={product.image}
              price={product.precio}
              getData={handleCardClick}
              getBuyId={handleBuyItem}
            ></Card>
          ))
        ) : (
          <TextSubtitle>No hay productos destacados disponibles</TextSubtitle>
        )}
      </div>
    </div>
  );
}
