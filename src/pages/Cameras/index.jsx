import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { cameraTypes } from '../../cameraTypes';
import './style.css';

export const Cameras = () => {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  let history = useHistory();

  const getBrands = () =>
    cameraTypes
      .map((camera) => camera.brand)
      .filter((value, index, self) => self.indexOf(value) === index);

  const isSupported = () => {
    return cameraTypes.find((camera) => camera.type === type).isSupported;
  };

  const registration = (event) => {
    event.preventDefault();
    history.push('/registration');
  };

  return (
    <>
      <div className="kontejner">
        <h2>
          Přehled podporovaných
          <br /> IP kamer
        </h2>

        <div className="kontejner--pozadi"></div>
        <p className="kontejner--text">
          Zvolte z následujícího výběru značku a typ Vaší kamery a ihned
          zjistěte, zda je podporovaná našimi službami.
        </p>

        <form method="GET" className="formularRegistrace" action="https://">
          <fieldset>
            <ul className="formularovePole">
              <li>
                <label htmlFor="znacka">Značka : </label>

                <select
                  className="select--size"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Vyberte</option>
                  {getBrands().map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
      {brand !== '' ? (
        <div className="kontejner">
          <form method="GET" className="formularRegistrace" action="https://">
            <fieldset>
              <ul className="formularovePole">
                <li>
                  <label htmlFor="typ">Typ : </label>
                  <select
                    className="select--size"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">Vyberte</option>
                    {cameraTypes.map((camera) => {
                      if (camera.brand === brand) {
                        return (
                          <option key={camera.id} value={camera.type}>
                            {camera.type}
                          </option>
                        );
                      }
                    })}
                  </select>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
      ) : null}
      {brand !== '' && type !== '' ? (
        isSupported() ? (
          <div className="webcam--supported">
            <h3>Gratulujeme, IP kamera je podporována.</h3>
            <form
              onSubmit={registration}
              method="POST"
              className="formularRegistrace"
              action="https://"
            >
              <fieldset>
                <input
                  type="submit"
                  className="vytvorit_ucet"
                  value="Zaregistrovat se"
                />
              </fieldset>
            </form>
          </div>
        ) : (
          <div className="webcam--not_supported">
            <h3>
              Bohužel, IP kamera není výrobcem pro naše služby podporována.
            </h3>
          </div>
        )
      ) : (
        <div className="kontejner">
          <p>
            <strong>Vyberte prosím, značku a typ kamery.</strong>
          </p>
        </div>
      )}
    </>
  );
};
