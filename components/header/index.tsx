import { LogoIcon, LogoIconSmall, CarritoIcon, BurgerIcon } from "ui/icons";
import { MyInputSearch } from "ui/input-search";
import { TextNav, SubtitleCard, TextMenuHeader } from "ui/typography";
import { MenuButton } from "ui/menu-button";
import { Carrito } from "ui/carrito";
import {
  ButtonLogin,
  ButtonSignUp,
  ButtonLoginSmall,
  ButtonSignUpSmall,
} from "ui/buttons";
import style from "./index.module.css";

//next
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
//hooks
import { useMe } from "lib/hooks";
import useSWR from "swr";

export function MyHeader() {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const [badgeCountLocalStorage, setBadgeCount] = useState<number>(0);

  // traigo data del useMe del usuario y del cache "badgeCount para el N° carrito"
  const { data: userData, error: userError } = useMe();
  const { data: badgeCount } = useSWR("badgeCount", {
    fallbackData: badgeCountLocalStorage, // Mi Valor inicial
  });

  //useEffect para manejar el incremento del logo carrito
  useEffect(() => {
    const storedBadgeCount = localStorage.getItem("badgeCount");
    if (storedBadgeCount) {
      setBadgeCount(JSON.parse(storedBadgeCount));
    }
  }, []);

  //Handles

  const handleQuerySearch = (e) => {
    const query = e.target.q.value.trim();
    e.preventDefault();
    if (!query) {
      alert("Por favor, ingresa un término de búsqueda.");
    } else {
      if (!userData?.data?.email) {
        router.push("/auth-access");
      } else {
        router.push(`/search-items?query=${encodeURIComponent(query)}`);
      }
      e.target.q.value = "";
    }
  };

  const handleMenu = () => {
    console.log("Me hicieron click");
    setShowNav(!showNav);
  };

  const handleLogin = () => {
    router.push("/auth-access");
  };

  const handleCarritoItems = () => {
    router.push("/carrito-items");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowNav(!showNav);
    router.push("/auth-access");
  };

  return (
    <div>
      <header>
        <div className={style.headerMain}>
          <div onClick={() => router.push("/")} className={style.logoContainer}>
            <LogoIcon />
          </div>

          <div className={style.logoContainerPhone}>
            <LogoIconSmall />
          </div>
          <div className={style.textContainer}>
            <Link href="/" passHref>
              <TextMenuHeader>Inicio</TextMenuHeader>
            </Link>
            <Link href="/acerca-de" passHref>
              <TextMenuHeader>Acerca de</TextMenuHeader>
            </Link>
            <Link href="/contacto" passHref>
              <TextMenuHeader>Contacto</TextMenuHeader>
            </Link>
          </div>
          <div className={style.textContainerPhone}>
            <Link href="/" passHref>
              <TextMenuHeader>Inicio</TextMenuHeader>
            </Link>
            <Link href="/contacto" passHref>
              <TextMenuHeader>Acerca de</TextMenuHeader>
            </Link>
            <Link href="/contacto" passHref>
              <TextMenuHeader>Contacto</TextMenuHeader>
            </Link>
          </div>
          <div className={style.inputContainer}>
            <form onSubmit={handleQuerySearch} action="">
              <MyInputSearch type="text" name="q" />
            </form>
          </div>

          {/* //////// */}
          <div className={`${userData ? style.cerrado : style.abierto}`}>
            <div className={style.contenedorButton}>
              <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
              <ButtonSignUp onClick={handleLogin}>SignUp</ButtonSignUp>
            </div>
            <div className={style.contenedorButtonPhone}>
              <ButtonLoginSmall onClick={handleLogin}>Login</ButtonLoginSmall>
              <ButtonSignUpSmall>SignUp</ButtonSignUpSmall>
            </div>
          </div>
          <div className={`${userData ? style.abierto : style.cerrado}`}>
            <div>
              <MenuButton
                item1="Mis datos"
                redirectItem1="/edit-profile"
                logout="Cerrar sesión"
              >
                {userData && userData.data && userData.data.name
                  ? userData.data.name + " 🙎‍♂️"
                  : "Mi Usuario"}
              </MenuButton>
            </div>
          </div>
          <div onClick={handleCarritoItems} className={style.contenedorCarrito}>
            <Carrito badgeContent={badgeCount}></Carrito>
          </div>
        </div>

        <div className={style.headerPhone}>
          <div onClick={handleMenu}>
            <BurgerIcon />
          </div>
          <div onClick={() => router.push("/")}>
            <LogoIcon />
          </div>
          <div onClick={handleCarritoItems}>
            <Carrito badgeContent={badgeCount}></Carrito>
          </div>
        </div>

        {/* Burger OPEN Nav */}
        <div
          className={`${style.containerNav}  ${
            showNav ? style.open : style.close
          }`}
        >
          <button className={style.closeButton} onClick={handleMenu}>
            ✖️
          </button>

          {/* NAVEGACION Textos contenedor mobile */}
          <div className={style.containerTextNav}>
            <div className={`${userData ? style.cerrado : style.abierto}`}>
              <a style={{ textDecoration: "none" }} href="/auth-access">
                <TextNav>Ingresar</TextNav>
              </a>
            </div>
            <div className={`${userData ? style.cerrado : style.abierto}`}>
              <a style={{ textDecoration: "none" }} href="/auth-access">
                <TextNav>Registrarse</TextNav>
              </a>
            </div>

            <div className={`${userData ? style.abierto : style.cerrado}`}>
              <a style={{ textDecoration: "none" }} href="/edit-profile">
                <TextNav>Mi perfil</TextNav>
              </a>
            </div>
            <div className={`${userData ? style.abierto : style.cerrado}`}>
              <a style={{ textDecoration: "none" }} href="/category">
                <TextNav>Categorias</TextNav>
              </a>
            </div>

            <div>
              <a style={{ textDecoration: "none" }} href="/acerca-de">
                <TextNav>Acerca de</TextNav>
              </a>
            </div>
            <div>
              <a style={{ textDecoration: "none" }} href="/contacto">
                <TextNav>Contacto</TextNav>
              </a>
            </div>
            <div>
              <SubtitleCard>{userData ? userData.email : ""}</SubtitleCard>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className={`${userData ? style.abierto : style.cerrado}`}
              onClick={handleLogout}
            >
              <h5
                style={{
                  color: "#E75A7C",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Cerrar Sesión
              </h5>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
