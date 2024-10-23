import { FaSearch } from "react-icons/fa";
import styled from "./index.module.css";

type myProps = {
  type: string;
  name: string;
  placeholder?: string;
};

export function MyInputSearch(p: myProps) {
  return (
    <div className={styled.inputWrapper}>
      <FaSearch id="search-icon"></FaSearch>
      <input
        className={styled.inputSearch}
        placeholder="Ingrese su busqueda.."
        type={p.type}
        name={p.name}
      />
    </div>
  );
}

export function MyInput(p: myProps) {
  return (
    <div className={styled.mainInput}>
      <input
        className={styled.input}
        placeholder={p.placeholder}
        type={p.type}
        name={p.name}
      />
    </div>
  );
}

export function MyInputPhone(p: myProps) {
  return (
    <div className={styled.containerInputPhone}>
      <div id="search-icon">+54</div>
      <input
        className={styled.inputSearchPhone}
        placeholder={p.placeholder}
        type={p.type}
        name={p.name}
      />
    </div>
  );
}
