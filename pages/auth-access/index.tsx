import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("components/ingresar").then((mod) => mod.IngresoComponent),
  {
    ssr: false, // Opcional: si no quieres que se renderice en el servidor
  }
);

export default function IngresarPage() {
  return (
    <div>
      <DynamicComponent />
    </div>
  );
}
