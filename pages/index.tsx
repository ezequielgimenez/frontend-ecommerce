import { MainHome } from "components/main-home";
import { ProductosDestacados } from "components/products-destacados";
import { Categories } from "components/categories";

export default function HomePage({ data }) {
  return (
    <div>
      <MainHome></MainHome>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <ProductosDestacados data={data}></ProductosDestacados>
        <Categories></Categories>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/sync-products-dest"
  );
  const data = await res.json();
  return { props: { data } };
};
