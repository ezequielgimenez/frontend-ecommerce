import { CategoryComponent } from "components/category";

import dynamic from "next/dynamic";

// Utiliza la importación dinámica y luego especifica la exportación nombrada
const DynamicComponent = dynamic(
  () => import("components/category").then((mod) => mod.CategoryComponent),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function CategoryPage() {
  return (
    <div>
      <DynamicComponent></DynamicComponent>
    </div>
  );
}
