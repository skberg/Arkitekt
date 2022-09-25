import Layout from "../../Layout/style/Layout.module.css";
import React from "react";
export default function SideNave(props) {
  return (
    <>
      {props.showSideBar && (
        <div>
          <div className={Layout.Meny}>
            <a
              className={Layout.Sidea}
              href="https://www.arkitektbedriftene.no/"
            >
              arkitektbedriftene.no
            </a>
            <a className={Layout.Sidea} href="https://www.maks.no/">
              MAKS
            </a>
            <a className={Layout.Sidea} href="https://www.byggsok.net/">
              MAKS-søk
            </a>
            <a
              className={Layout.Sidea}
              href="https://www.arkitekturskaperverdi.no/"
            >
              arkitektur skaper verdi
            </a>
          </div>
        </div>
      )}
    </>
  );
}
