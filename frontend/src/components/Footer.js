/* eslint-disable react/no-unknown-property */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <div>
      <nav
        class="navbar navbar-dark navbar-fixed-bottom"
        style={{ backgroundColor: "#d7e0e2" }}
      >
        <a class="navbar-brand">
          <form class="form-inline " style={{ marginLeft: "3vw" }}>
            <b
              class="text text-center "
              style={{ fontSize: "1.2vw", color: "#2C6674" }}
            >
              SLO HIKES
            </b>
            <b
              className="text text-center "
              style={{
                fontSize: ".7vw",
                color: "#828282",
                padding: "1vw",
                textAlign: "center",
              }}
            >
              @ SLOHikes by Sarah Rietkerk, Maggie Yang, Mike Erinberg, Bat
              Battur, and Skylar Kurth.
            </b>
          </form>
        </a>
      </nav>
    </div>
  )
}

export default Footer
