import React from "react";
import "../style/about.css";

const Faq = () => {
  return (
    <>
      <div className="about">
        <h1>Întrebări frecvente</h1>
        <p>
          Nu știi ce anume să întrebi botul? Nu e nicio problema, uite câteva
          exemple:
        </p>
      </div>
      <section>
        <div className="container">
          {/* fa-mi o lista cu intrebari */}
          <div className="textFAQ">
            <ol>
              <h1>
                <li>Unde pot gasi corpul ... ?</li>
              </h1>

              <h1>
                <li>Ce ore am in ziua de ... ?</li>
              </h1>

              <h1>
                <li>Ce stii sa faci?</li>
              </h1>

              <h1>
                <li>Cum e structurat anul universitar?</li>
              </h1>

              <h1>
                <li>Cate facultati sunt in cadrul UPB?</li>
              </h1>

              <h1>
                <li>Unde pot manca?</li>
              </h1>

              <h1>
                <li>Cine este responsabil de conducerea UPB?</li>
              </h1>

              <h1>
                <li>Pot parca masina in campus?</li>
              </h1>

              <h1>
                <li>Care este media cea mai mica de la departamentul X?</li>
              </h1>

              <h1>
                <li>Care sunt cele mai apropiate mijloace de transport?</li>
              </h1>

              <h1>
                <li>La ce materii trebuie sa ma pregatesc pentru admitere?</li>
              </h1>

              <h1>
                <li>Ce evenimente sunt in luna ...?</li>
              </h1>

              <h1>
                <li>Cum planuiesti sa te dezvolti?</li>
              </h1>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
