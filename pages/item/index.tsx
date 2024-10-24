import { Item } from "components/item";

import dynamic from "next/dynamic";

// Utiliza la importación dinámica y luego especifica la exportación nombrada
const DynamicComponent = dynamic(
  () => import("components/item").then((mod) => mod.Item),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function ItemPage() {
  return (
    <div>
      <DynamicComponent></DynamicComponent>
    </div>
  );
}
