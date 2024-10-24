import { MiPerfilComp } from "components/mi-perfil";

import dynamic from "next/dynamic";

// Utiliza la importación dinámica y luego especifica la exportación nombrada
const DynamicComponent = dynamic(
  () => import("components/mi-perfil").then((mod) => mod.MiPerfilComp),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function IngresarPage() {
  return (
    <div>
      <DynamicComponent></DynamicComponent>
    </div>
  );
}
