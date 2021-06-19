import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Settings = () => {
  return (
    <>
      <div className="kontejner">
        <h3>Dobrý den Pavle</h3>
        <p>
          na této stránce naleznete přehled veškerých informací o svém účtu.
          <br />
          Moje zákaznické číslo: 1234567
        </p>
        <hr />
        <h3>Aktuální stav mého účtu</h3>
        <p>
          Typ poskytované služby: PREMIUM
          <br />
          Poslední platba připsaná na účet dne: <br />
          Následující platba do: <br />
          Zrušení účtu{' '}
        </p>
        <hr />
        <h3>Moje aktivity</h3>
        <p>
          Moje emailová adresa: helloWorld@gmail.com
          <br />
          Heslo: **********
        </p>
        <hr />
        <h4></h4>

        <Link className="ucetAregistrace byloA" to="/registration">
          <img className="ikonka" src="../../assets/iconmonstr-edit-5.svg" />
          Změnit údaje
        </Link>
      </div>
    </>
  );
};
