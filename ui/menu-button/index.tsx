import React, { useState } from "react";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import { useRouter } from "next/router";

type myProps = {
  children: React.ReactNode;
  item1: string;
  item2?: string;
  item3?: string;
  logout?: string;
  redirectItem1: string;
  redirectItem2?: string;
  redirectItem3?: string;
  buttonBgColor?: string;
};

export function MenuButton({
  children,
  item1,
  item2,
  item3,
  logout,
  redirectItem1,
  redirectItem2,
  redirectItem3,
  buttonBgColor,
}: myProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect1 = () => {
    setAnchorEl(null);
    router.push(redirectItem1);
  };

  const handleRedirect2 = () => {
    setAnchorEl(null);
    router.push(redirectItem2);
  };

  const handleRedirect3 = () => {
    setAnchorEl(null);
    router.push(redirectItem3);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    router.reload();
    router.push("/auth-access");
  };

  return (
    <div>
      {/* Botón que abre el menú */}
      <Button
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          backgroundColor: buttonBgColor || "#848484", // Color dinámico o por defecto
          color: "white",
        }}
      >
        {children}
      </Button>

      {/* Menú desplegable */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          {item1 ? <MenuItem onClick={handleRedirect1}>{item1}</MenuItem> : ""}
        </div>
        <div>
          {item2 ? <MenuItem onClick={handleRedirect2}>{item2}</MenuItem> : ""}
        </div>
        <div>
          {item3 ? <MenuItem onClick={handleRedirect3}>{item3}</MenuItem> : ""}
        </div>
        <div>
          {logout ? <MenuItem onClick={handleLogout}>{logout}</MenuItem> : ""}
        </div>
      </Menu>

      {/* IconButton alternativa con un icono */}
      <IconButton
        aria-label="more"
        aria-controls={open ? "icon-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      ></IconButton>
    </div>
  );
}
