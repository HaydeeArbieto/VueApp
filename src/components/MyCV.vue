<template>
  <div class="mycv">
    <div>
      <nav id="sideNav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <img id="my-picture" class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../assets/images/harbieto.jpg" >
        <ul id="left-list">
            <li class="nav-item">
              <a class="nav-link js-scrooll-trigger active" href="#profil"> PROFIL </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link js-scrooll-trigger active" href="#uppdrag"> UPPDRAG/PROJEKT </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link js-scrooll-trigger active" href="#praktik"> PRAKTIK </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link js-scrooll-trigger active" href="#utbildningar"> UTBILDNINGAR </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link js-scrooll-trigger active" href="#kurser">KURSER </a>
            </li>
             <li class="nav-item" >
              <a class="nav-link js-scrooll-trigger active" href="#certifieringar"> CERTIFIERINGAR </a>
            </li>
            <li class="nav-item" >
              <a class="nav-link js-scrooll-trigger active" href="#yrkeserfarenhet"> YRKESERFARENHET </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scrooll-trigger active" href="#sprok"> SPRÅK </a>
            </li>
            <li class="nav-item">
              <button><router-link to="/contact">Kontaka mig</router-link></button>
            </li>
        </ul>
      </nav>
    </div>
    <div id="split right" class="container-fluid p-0" >     
       <header>
        <ul id="links">
          <li>
            <a href="https://www.linkedin.com/in/haydee-arbieto/" target="_blank"> LinkedIn </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=sv" target="_blank"> Instagram </a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank"> Twitter </a>
          </li>
          <li>
            <a href="https://github.com/HaydeeArbieto?tab=repositories" target="_blank"> Github </a>
          </li>
        </ul>
    </header>
      <div id="profil">
        <h1 id="myname">Haydee Arbieto</h1>
        <h3>Fullstackutvecklare (Java, JavaScript, SQL)</h3>
        <section class="profil-section p-3 p-lg-4 d-flex d-column" id="profil">
          <p>
            Problemlösare med ett brinnande intresse för frontend- och backendutveckling som jag gärna utövar både professionellt och privat. Jag strävar efter kontinuerlig utveckling av mina kunskaper som fullstackutvecklare. Jag har erfarenhet i både frontend- och backend utveckling. Scrum och Kanban är agila arbetsätt som jag är van att jobba med.
            Jag programmerar med stor noggranhet, är lösningsorienterat och kontinuerligt strävar jag efter att fördjupa mina kunskaper inom teknik och systemutveckling. Jag är även en mycket kommunikativ, initiativtagande och stresstålig person.
            Jag har deltagit i flera projekt där jag har jobbat med portallösningar, applikationsutveckling och databasintegration. Hon har erfarenhet av nyutvecklingsprojekt samt även drift- och underhållsprojekt.
            En av mina stora passion är att hjälpa andra människor.
            Min kommunikationsprofil är en mycket kommunikativ, initiativtagande och empatisk person. Jag har en positiv attityd och god samarbetsförmåga med kunder och kollegor.
          </p>
        </section>
    
        <section class="uppdrag-section" id="uppdrag">
          <h4 id="title">Uppdrag/Projekt:</h4>
          <p><b> Företag:</b> HSB - 11/2018-08/2019 </p>
          <p><b> Roll:</b> Fullstack utvecklare</p>
          <p><b> Projekt:</b> Utveckling, förvaltning och dokumentation av MittHSB hemsida</p>
          <p><b> Uppdrag:</b> Mitt uppdrag var att försätta utveckla, fixa buggarna och dokumentera den tekniska delen av MittHSB hemsidan för vidare utveckling.</p>
          <p><b> Tekniker/Verktyg:</b> Angular, JavaScript, Typescrypt, CSS, C#/.Net, .Net Core 2, .Net MVC Framework, Azure DevOps, Razor, HTML, CSS, EPiServer, Sourcetree, Git Bash, Visual Studio Code, Visual Studio, SQL Server, Agilt med Scrum och Kanban.</p>
          <br>
          <p><b> Företag:</b> ICA Spara AB - 09/2018-10/2019 </p>
          <p><b> Roll:</b> App Testare - Crowd Testare </p>
          <p><b> Projekt:</b> Professionell Crowd Testning av mobil applikation för ekonomiskt stöd.</p>
          <p><b> Uppdrag:</b> Utvärdera kvaliteten och användarupplevelsen av kundens mobilapplikation. Själva applikationen tillhandahöll användarna med ekonomisk vägledning och stöd baserat på registrerade banker och transaktionsdata. Uppdraget genomfördes med en Professionell Crowd Test-lösning planering, genomförande, rapportering, hantering och ge direkt feedback till kunden.</p>
          <p><b> Tekniker/Verktyg:</b> Mobila enheter iOS/Android, Visual Studio App Center, TestFlight, Professionell Crowd testning, JIRA, InVisionApp, Zeplin, Microsoft Excel, Google Drive.</p>
          <br>
          <p><b> Företag:</b> Husqvarna AB - 06/2018-08/2018 </p>
          <p><b> Roll:</b> Backend utvecklare</p>
          <p><b> Projekt:</b>Utveckla en mobilapplikation </p>
          <p><b> Uppdrag:</b>Teamets uppgift var att fortsätta bygga en mobilapp och lösa buggarna på den applikationen.
          <p><b> Tekniker/Verktyg:</b> Java, Intellij, Docker, Postman, Zeplin, Bamboo, XConfluence, Jira, Bitbucket och Datadog.</p>
          <br>
          <p><b> Företag:</b> Sogeti AB - 05/2018-06/2018 </p>
          <p><b> Roll:</b>Fullstack utvecklare </p>
          <p><b> Projekt:</b> Utveckla en chatbot för en kundtjänst. </p>
          <p><b> Uppdrag:</b> Haydee skapade konversationen i IBM Watson tjänster och kopplade med JavaScript för att kunna bygga chatboten. </p>
          <p><b> Tekniker/Verktyg:</b> Javascript, NodeJS, Nodemon, IBM Watson Bluemix, HTML, CSS, REST API, Angular, Bootstrap och Visual Studio.</p>
          <br>
          <p><b> Företag:</b>Sogeti AB - 02/2018-04/2018 </p>
          <p><b> Roll:</b> Fullstack utvecklare </p>
          <p><b> Projekt:</b> Utveckla Magic Mirror- En spegel som fungerar som en user interface och används med röststyrningen för att föra en dialog med en användare. Spegeln skall kunna ta en bild och gör en ansikt analysis på talaren för att få en uppfattning om känslorna hos användaren. </p>
          <p><b> Uppdrag:</b> Haydee använde IBM Watson tjänster och JavaScript för att tillsammans med teamet kunna skapa en dialog mellan människan och spegeln. </p>
          <p><b> Tekniker/Verktyg:</b> Javascript, NodeJS, Express, IBM Watson Bluemix, Microsoft tjänster, HTML, CSS, Visual Studio, MySQL och MySQL Workbench. </p>
          <br>
          <p><b> Företag: </b> Ungapped - 11/2016-05/2017	</p>
          <p><b> Roll: </b> Fullstack utvecklare </p>
          <p><b> Projekt: </b> Skapa Witgets </p>
          <p><b> Uppdrag: </b> Haydees uppdrag var att utveckla widgets i en web applikation för att hjälpa sina kunder i deras marknadsföring. Lösningen valdes efter kundernas önskemål genom upplägning av widgets. Arbetet omfattade bl. a. callout, banner, popup. Widgets genererades dynamiskt. </p>
          <p><b> Tekniker/Verktyg: </b> MVC, C#, .NET, JavaScript, Jquery, HTML5, CSS, DOM, knockoutJS, Visual Studio, bootstrap, agilt med Scrum och Kanban. </p>
          <br>
          <p><b> Utbildning: </b> C3L Centrum för Livslångt Lärande - 11/2016-05/2017 </p>
          <p><b> Roll: </b> Frontend utvecklare </p>
          <p><b> Projekt: </b> Skapa ett webbaserat whiteboard med fungerande funktioner. </p>
          <p><b> Uppdrag: </b> Uppdraget var att skapa en fungerande digital whiteboard med digitala post-it lappar. Gruppen skapade  via webben en funktion som hanterar post-it lappar enligt CRUD metoden. </p>
          <p><b> Tekniker/Verktyg: </b> Javascript, HTML, CSS, Bootstrap, React. Agilt med Scrum och Kanban.</p>
          <br>
          <p><b> Utbildning:</b> C3L Centrum för Livslångt Lärande </p>
          <p><b> Roll: </b> Backend utvecklare </p>
          <p><b> Projekt: </b> Skapa ett web API med JAX-RS. </p>
          <p><b> Uppdrag: </b>Teamets uppgift var att bygga ett web - API som använder sig av JAX-RS för att exponera deras system över HTTP.  Ta reda på hur Auditing i Spring Data fungerar, implementera detta i hennes datalager på lämpliga ställen. </p>
          <p><b> Tekniker/Verktyg: </b> Java, JAX-RS, Spring, datalagring, REST, Eclipse, Postman, MySQL, JDBC, MySQL Workbench, enhetstest JUnit och Git. </p>
          <br>
          <p><b> Utbildning: </b> C3L Centrum för Livslångt Lärande </p>
          <p><b> Roll: </b> Backend utvecklare </p>
          <p><b> Projekt: </b> Använda Spring-Data-JPA för att hantera datalagring. </p>
          <p><b> Uppdrag: </b> Haydees uppdrag bestod av att konstruera ett pragmatiskt ärendehanteringssystem. Detta krävde ett lager för att hantera lagring av data. Systemet hade funktionalitet som vanliga ärendehanteringssystem. t.ex. uppläggning av ärende, hantering, prioritering och avslut. </p>
          <p><b> Tekniker/Verktyg: </b> Java, datalagring, Maven, Eclipse, Postman, MySQL, JDBC, MySQL WorkBench och Git. </p>
          <br>
          <p><b> Utbildning: </b> C3L Centrum för Livslångt Lärande </p>
          <p><b> Roll: </b> Backend utvecklare </p>
          <p><b> Projekt: </b> Bygga ett datalager för att hantera en webshop.
          <p><b> Uppdrag: </b> Teamets uppgift var att hantera kommunikationen mot den lagringsmodell som används, lagringsmodellen ska vara serialisering. </p>
          <p><b> Tekniker/Verktyg: </b> Java, datalagring, Eclipse, MySQL, JPA och MySQL Workbench. </p>
          <br>
        </section>

        <section class="praktik-section"  id="praktik">
          <h4 id="title">Praktik</h4>
          <p>Webbutvecklare	Ungapped 2016/11–2017/04 </p>
          <p>Utvecklade Widgets (callout, banner, popup)
             Använde MVC, C#, .Net, JavaScript, JQuery. HTML och CSS.
		        Jobbade agilt med Scrum och Kanban</p>
          <p>Lärarassistent	AcadeMedia 2009/08-2009/12</p>
          <p>Lärarassistent på en Oracle systemutvecklare utbildningen på Academedia</p>
          <p>Dataprogrammerare Regesa(Peru) 2009/01- 03</p>
          <p>Dataprogrammerare TCC(Peru) 2009/04- 06</p>
          <br>
        </section>

        <section class="utbildningar-section" id="utbildningar">
          <h4 id="title"> Utbildningar</h4>
          <p> Lexicon University	Java Systemutvecklare 2017/08–2017/11 </p>
          <p> C3L Systemutvecklare med Java (400 Yh-p.)	2015/06–2017/05 </p>
          <p> AcadeMedia 	Oracle Systemutvecklare (300 Yh-p.) 2008/08–2009/12 </p>
          <p> Cibertec(Peru)	Datateknik/programmerare (Yh) 1995–1998 </p>
          <br>
        </section>

        <section class="kurser-section" id="kurser">
          <h4 id="title">Kurser</h4>
          <p>Sogeti AB ISTQB Foundation 1 2018 </p>
          <p>Vuxenutbildning Nacka Engelska 1,2,3,4,5 &nbsp;&nbsp;&nbsp;2004</tab> </p>
			                              <p>Lokala nätverk A, Persondatorer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	2003 </p>
			                              <p>IT-samordning, Databashantering &nbsp;&nbsp;&nbsp; 2002 </p>
			                              <p>SFI, SAS grundläggande, A, B	2000, 2003	</p>
        <br>
        </section>

        <section class="certifieringar-section" id="certifieringar">
          <h4 id="title"> Certiferingar</h4>
          <p> Technologies / Certified UIPath RPA Developer</p>
          <br>
        </section>

        <section class="yrkeserfarenhet-section" id="yrkeserfarenhet">
          <h4 id="title"> Yrkeserfarenhet </h4>
          <p> IT-Konsult: Fullstack utvecklare Sogeti AB 2018– nu </p>
          <p> Personlig Assistant	JAG Brukarkooperativet 2010–2015 </p>
          <br>
        </section>

        <section class="språk-section" id="sprok">
          <h4 id="title"> Språk </h4>
          <ul id="språk-list">
            <li> Spanska, modersmål </li>
            <li> Svenska, flytande i tal och skrift </li>
            <li> Engelska, mycket god i tal och skrift </li>
          </ul>
          <br>
        </section>

      </div>
       <footer id="cvfooter">
         <p>Copyright © 2018 Haydee Arbieto. Allt innehåll tillhör Sogeti AB.</p>
       </footer>
   </div>
  </div>
</template>

<script>
export default {
  name: "MyCV"
};
</script>
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/styles/mycvstyle.css";
</style>
