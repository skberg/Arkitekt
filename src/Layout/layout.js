import React from "react";
import Lay from "./style/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <main className={Lay.LayoutHolder}>
        <div className={Lay.TopText}>
          <div className={Lay.InfoText}>Egenerklæring for selvbygger</div>
          <div div className={Lay.LovInfo}>
            <p className={Lay.Hed}>
              SAK10 kapittel 12 og § 6-8
              <br />
              Erklæringen leveres til ansvarlig søker etter at selvbyggeren er
              ferdig med sine arbeide
            </p>
          </div>
        </div>
        {children}
      </main>
    </>
  );
};

export default Layout;
