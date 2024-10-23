import { MyTitleCard, TextSubtitle, BodyCard } from "ui/typography";
import style from "./index.module.css";
import { Card, CardInfo } from "ui/card";
import { ButtonBuy, ButtonSignUp } from "ui/buttons";
import { useMe, useSearchProducts } from "lib/hooks";
import { useState, useEffect } from "react";
import useSWR, { useSWRConfig, mutate } from "swr";
import { useRouter } from "next/router";

export function SearchItems() {
  const router = useRouter();
  const { query } = router.query; // Capturamos la query de la URL
  const [currentPage, setCurrentPage] = useState(1);
  const { mutate: globalMutate } = useSWRConfig();
  const { data: userData, error: userError } = useMe();

  const { data, error } = useSearchProducts(query, 10, (currentPage - 1) * 10);

  const results = data?.data || []; // Aseguramos que results sea un array vacío si data o data.data son indefinidos
  const totalResults = data?.pagination?.total || 0; // Aseguramos que totalResults sea 0 si no hay datos
  const totalPages = Math.ceil(totalResults / 10);

  const handleBuy = (idProduct) => {
    router.push(`/item?query=${encodeURIComponent(idProduct)}`);
  };

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

  //Handle para volver al inicio
  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={style.containerMain}>
      <div onClick={handleBack} className={style.containerRemoveCarrito}>
        <ButtonSignUp>Volver</ButtonSignUp>
      </div>
      <div className={style.containerTitle}>
        <MyTitleCard>Resultados de búsqueda</MyTitleCard>
        <div>
          {results.length > 0 && query ? (
            <TextSubtitle>Mostrando los resultados para {query}</TextSubtitle>
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
              getBuyId={handleBuy}
            />
          ))
        ) : (
          <TextSubtitle>Aún no buscaste productos</TextSubtitle>
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
