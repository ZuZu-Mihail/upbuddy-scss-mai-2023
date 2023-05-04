import React from "react";
import "../style/about.css";

const Despre = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      ></link>
      <div class="about">
        <h1>Despre chatbot</h1>
        <p>Informații utile despre acest proiect:</p>
      </div>
      <section className="aboutTxtSection">
        <div className="aboutTxt">
          <br />
          <p>
            &emsp;În lucrarea „Cercetare privind dezvoltarea unui chatbot
            specializat pentru domeniile facultății”, am dezvoltat un chatbot,
            numit UPBuddy.
            <br />
            &emsp;Motivația noastră este că acest chatbot poate fi un instrument
            util pentru un student aflat la începutul călătoriei, sau chiar
            pentru un profesor sau orice altă persoană care ar putea avea nevoie
            de un mic asistent de buzunar.
            <br />
            &emsp;Tehnologia chatbot introdusă într-o universitate poate ajuta
            într-o varietate de moduri, cum ar fi: (l) asistență pentru
            studenți, (2) îndrumări academice, (3) asistență tehnică, (4)
            notificări și actualizări, precum și întrebări frecvente ( 5).
          </p>
          <p>
            &emsp;În prezent, chatbot-ul este capabil să ofere informații despre
            universitate și poate oferi link-uri către resurse utile.
            <br />
            &emsp;Este important de menționat că chatbot-ul nu accesează
            internetul, iar baza de date pe care o folosește este locală.
            <br />
            &emsp;Programul principal a fost scris în limbajul de programare
            Python, iar interfața cu utilizatorul a fost dezvoltată folosind
            React JS, JavaScript și SCSS și construită folosind Figma. Pentru a
            asigura funcționalitatea corespunzătoare, am folosit biblioteci
            precum Flask și Chatterbot.
            <br />
            &emsp;Resurse legate de cod pot fi găsite accesând următorul link:
            <br />
          </p>
          <a
            href={"https://github.com/ZuZu-Mihail/upbuddy-scss-mai-2023"}
            target="_blank"
            className="linkTag"
          >
            https://github.com/ZuZu-Mihail/upbuddy-scss-mai-2023
          </a>
          <br />
        </div>
      </section>
      <div className="about">
        <p></p>
      </div>
      <div class="about">
        <h1>Meet the team!</h1>
        <p>This is us:</p>
      </div>
      <section class="container about">
        <figure>
          <div class="layer">
            <h3>Designer</h3>
            <p>I design stuff then hope i can reproduce them.</p>
          </div>
          <img
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/278232996_4897429856971542_1282493310818328715_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFPULoy_KTncCDIOIXTEgOWcE1U3hpioulwTVTeGmKi6a5QSQfIszxrglc_EOJjgjSZBG-KEXzr44vyN9bK7x4b&_nc_ohc=vm_T5InifAAAX93YMMU&_nc_ht=scontent-otp1-1.xx&oh=00_AfDp1e3-HM-io2JabgrDNTn8KwOITjq7WHkcuGNDSHumRQ&oe=64545C80"
            alt=""
          />
          <figcaption>
            <h2 style={{ color: "#eee" }}>Mihail</h2>
            <br />

            <a
              href="https://www.facebook.com/hanga.mihail"
              class="fa fa-facebook fa-2x"
              target="_blank"
            ></a>
            <a
              href="https://www.linkedin.com/in/hanga-mihail/"
              target="_blank"
              class="fa fa-linkedin fa-2x"
            ></a>
          </figcaption>
        </figure>

        <figure>
          <div class="layer">
            <h3>Coder</h3>
            <p>I code it and hope it work.</p>
          </div>
          <img
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/308353534_1200857927148512_3023900446262985505_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGesvF3a4ZcRefb3Bv66cMPvqUSSmKICfK-pRJKYogJ8v728dq8q7OWxvPFuIcyhbqbRMNVE8g3dhDCnrrmVhZb&_nc_ohc=ZothsBlgANYAX9wNkEV&_nc_ht=scontent-otp1-1.xx&oh=00_AfDXflfYw--dYWeLRQSN5Hd_O5nwsmSQFaGgyCf3y_eMzA&oe=6452D3EC"
            alt=""
          />
          <figcaption>
            <h2 style={{ color: "#eee" }}>Bogdan</h2>
            <br />
            <a
              href="https://www.facebook.com/bogdan.costea.3154"
              target="_blank"
              class="fa fa-facebook fa-2x"
            ></a>
            <a
              href="https://www.linkedin.com/in/costea-bogdan/"
              target="_blank"
              class="fa fa-linkedin fa-2x"
            ></a>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default Despre;
