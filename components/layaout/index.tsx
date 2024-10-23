import { MyHeader } from "components/header";
import { MyFooter } from "components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MyHeader></MyHeader>
      <div>{children}</div>
      <MyFooter></MyFooter>
    </div>
  );
}
