import { CodeComponent } from "components/code";

import dynamic from "next/dynamic";

// Utiliza la importación dinámica y luego especifica la exportación nombrada
const DynamicComponent = dynamic(
  () => import("components/code").then((mod) => mod.CodeComponent),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function CodePage() {
  return (
    <div>
      <DynamicComponent></DynamicComponent>
    </div>
  );
}
