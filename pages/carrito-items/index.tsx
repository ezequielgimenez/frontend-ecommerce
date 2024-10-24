import { CarritoItems } from "components/carrito-items";

import dynamic from "next/dynamic";

// Utiliza la importación dinámica y luego especifica la exportación nombrada
const DynamicComponent = dynamic(
  () => import("components/carrito-items").then((mod) => mod.CarritoItems),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function CarritoItemsPage() {
  return (
    <div>
      <DynamicComponent></DynamicComponent>
    </div>
  );
}
