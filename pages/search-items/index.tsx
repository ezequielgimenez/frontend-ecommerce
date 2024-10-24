import { SearchItems } from "components/search-items";

import dynamic from "next/dynamic";

// Utiliza la importación dinámica y luego especifica la exportación nombrada
const DynamicComponent = dynamic(
  () => import("components/search-items").then((mod) => mod.SearchItems),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function SearchItemsPage() {
  return (
    <div>
      <DynamicComponent></DynamicComponent>
    </div>
  );
}
