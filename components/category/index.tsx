import Head from "next/head";
import { MyTitleCard, TextSubtitle, BodyCard } from "ui/typography";
import style from "./index.module.css";
import { Card, CardInfo } from "ui/card";
import { ButtonBuy, ButtonSignUp } from "ui/buttons";
import { useMe, useSearchProducts } from "lib/hooks";
import { useState, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { MenuButton } from "ui/menu-button";

export function CategoryComponent() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: userData, error: errorUser } = useMe();

  const { query } = router.query; // Capturo la query de la URL
  const { mutate: globalMutate } = useSWRConfig();
  const { data, error } = useSearchProducts(query, 10, (currentPage - 1) * 10);

  const results = data?.data || []; // results va ser un array vacío si data o data.data del producto son indefinidos
  const totalResults = data?.pagination?.total || 0; // Aseguramos que totalResults sea 0 si no hay datos
  const totalPages = Math.ceil(totalResults / 10);

  useEffect(() => {
    if (!userData?.data.email) {
      router.push("/auth-access");
    }
  }, []);

  // Handlers para la paginación
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  //Handle para añadir al carrito los productos seleccionados
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
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={style.containerMain}>
      <Head>
        <title>Categorias</title>
        <meta
          name="description"
          content="Conocé los distintos modelos y categorias de las mejores zapatillas, zapatos y botas en Modakelar."
        />
        <meta name="keywords" content="zapatillas, zapatos, botas, calzado" />
      </Head>

      <div onClick={handleBack} className={style.containerRemoveCarrito}>
        <ButtonSignUp>Volver</ButtonSignUp>
      </div>
      <div className={style.containerButtonSelectCategory}>
        <MenuButton
          item1="Zapatillas"
          redirectItem1="/category?query=Zapatillas"
          item2="Zapato"
          redirectItem2="/category?query=Zapato"
          item3="Botitas"
          redirectItem3="/category?query=Botitas"
        >
          Elige una categoria ⬇
        </MenuButton>
      </div>
      <div className={style.containerTitle}>
        <MyTitleCard>{query}</MyTitleCard>
        <div>
          {results.length > 0 && query ? (
            <TextSubtitle>Mostrando la categoria {query}</TextSubtitle>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className={style.containerCard}>
        {results.length > 0 && query ? (
          results.map((product) => (
            <Card
              key={product.objectID}
              id={product.objectID}
              imgSrc={product.image}
              title={product.name}
              marca={product.marca}
              price={product.precio}
              description={product.description}
              getData={handleCardClick}
            />
          ))
        ) : (
          <TextSubtitle>
            No hay productos aún, elige una categoria.
          </TextSubtitle>
        )}
      </div>
      <div>
        {results.length > 0 && query ? (
          <div className={style.pagination}>
            <ButtonBuy
              onClick={handlePreviousPage} // Usamos el handler
              disabled={currentPage === 1}
            >
              -Anterior
            </ButtonBuy>
            <span>
              <BodyCard>
                Página {currentPage} de {totalPages}
              </BodyCard>
            </span>
            <ButtonBuy
              onClick={handleNextPage} // Usamos el handler
              disabled={currentPage === totalPages}
            >
              Siguiente+
            </ButtonBuy>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
