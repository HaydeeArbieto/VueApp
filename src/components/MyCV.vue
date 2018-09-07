<template>
  <div class="hello">
    <div>
      <nav id="sideNav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <img id="my-picture" class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../assets/harbieto.jpg" >
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
              <!--a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()"> KONTAKTA MIG </a-->
              <!--router-link to="/ContactPage"> KONTAKTA MIG </router-link--> 
            </li>
        </ul>  
      </nav>
    </div>
    
    <div id="split right" class="container-fluid p-0" > 
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
 
      <div>
        <h1>{{ msg }}</h1>
        <h3>Fullstackutvecklare (Java,  JavaScript,  SQL)</h3> 
 
        <section class="profil-section p-3 p-lg-4 d-flex d-column" id="profil">
          <p>Problemlösare med ett brinnande intresse för frontend- och backendutveckling som jag gärna utövar både professionellt och privat. Jag strävar efter kontinuerlig utveckling av mina kunskaper som fullstackutvecklare. Jag har erfarenhet i både frontend- och backend utveckling. Scrum och Kanban är agila arbetsätt som jag är van att jobba med.
            Jag programmerar med stor noggranhet, är lösningsorienterat och kontinuerligt strävar jag efter att fördjupa mina kunskaper inom teknik och systemutveckling. Jag är även en mycket kommunikativ, initiativtagande och stresstålig person. 
            En av mina stora passion är att hjälpa andra människor. 
            En stor del av min yrkeserfarenhet har jag fått från mina flera år i vården, detta är en positiv erfarenhet som bidragit till att jag har god social förmåga, samarbetar bra med olika människor i små och stora team. 
          </p>
        </section>
    
        <section class="uppdrag-section" id="uppdrag" >
          <h4>Uppdrag/Projekt:</h4>

          <p><b> Företag:</b> Husqvarna AB - 06/2018-08/2018 </p>
          <p><b> Roll:</b> Backend utvecklare</p>
          <p><b> Projekt:</b>Utveckla en mobilapplikation </p>
          <p><b> Uppdrag:</b>Teamets uppgift var att fortsätta bygga en mobilapp och lösa buggarna på den applikationen.
          <p><b> Tekniker/Verktyg:</b> Java, Intellij, Docker, Postman, Zeplin, Bamboo, XConfluence, Jira, Bitbucket och Datadog.</p>
          <br>
          
          <p><b> Företag:</b> Sogeti AB	- 05/2018-06/2018 </p>
          <p><b> Roll:</b>Fullstack utvecklare </p>
          <p><b> Projekt:</b> Utveckla en chatbot för en kundtjänst. </p>
          <p><b> Uppdrag:</b> Haydee skapade konversationen i IBM Watson tjänster och kopplade med JavaScript för att kunna bygga chatboten. </p>
          <p><b> Tekniker/Verktyg:</b> Javascript, NodeJS, Nodemon, IBM Watson Bluemix, HTML, CSS, REST API, Angular, Bootstrap och Visual Studio.</p>
          <br>
          
          <p><b> Företag:</b>Sogeti AB	- 02/2018-04/2018 </p>
          <p><b> Roll:</b> Fullstack utvecklare </p>
          <p><b> Projekt:</b> Utveckla Magic Mirror- En spegel som fungerar som en user interface och används med röststyrningen för att föra en dialog med en användare. Spegeln skall kunna ta en bild och gör en ansikt analysis på talaren för att få en uppfattning om känslorna hos användaren. </p>
          <p><b> Uppdrag:</b> Haydee använde IBM Watson tjänster och JavaScript för att tillsammans med teamet kunna skapa en dialog mellan människan och spegeln. </p>
          <p><b> Tekniker/Verktyg:</b> Javascript, NodeJS, Express, IBM Watson Bluemix, Microsoft tjänster, HTML, CSS, Visual Studio, MySQL och MySQL Workbench. </p>
          <br>
          
          <p><b> Företag: </b> Ungapped	- 11/2016-05/2017	</p>
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
          <h4>Praktik</h4>
          <p>Webbutvecklare	Ungapped			2016/11– 2017/04 </p> 
          <p>Utvecklade Widgets (callout, banner, popup)
            Använde MVC, C#, .Net, JavaScript, JQuery. HTML och CSS.
		        Jobbade agilt med Scrum och Kanbanp</p>
 
          <p>Lärarassistent	AcadeMedia		 2009/08-2009/12	</p>
          <p>Lärarassistent på en Oracle systemutvecklare utbildningen på Academedia</p>
				
          <p>Dataprogrammerare Regesa(Peru)		2009/01- 03</p>
          <p>Dataprogrammerare TCC(Peru)			2009/04- 06</p>
        </section>

        <section class="utbildningar-section"  id="utbildningar">
          <h4> Utbildningar</h4>
          <p> Lexicon University	Java Systemutvecklare			2017/08 – 2017/11 </p>
          <p> C3L Systemutvecklare med Java (400 Yh-p.)	2015/06 –2017/05 </p> 
          <p> AcadeMedia 	Oracle Systemutvecklare (300 Yh-p.) 	2008/08–2009/12 </p>
          <p> Cibertec(Peru) 	Datateknik/programmerare (Yh)    1995 – 1998 </p>     
        </section>

        <section class="kurser-section" id="kurser">
          <h4>Kurser</h4>
          <p>Sogeti AB		ISTQB Foundation 1 		2018 </p>
          <p>Vuxenutbildning Nacka	Engelska 1,2,3,4,5 &nbsp;&nbsp;&nbsp; 2004</tab> </p>
			                              <p>Lokala nätverk A, Persondatorer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	2003 </p>
			                              <p>IT-samordning, Databashantering &nbsp;&nbsp;&nbsp; 	2002 </p>
			                              <p>SFI, SAS grundläggande, A, B	2000, 2003	</p>
          
        </section>

        <section class="certifieringar-section" id="certifieringar">
          <h4> Certiferingar</h4>
          <p> Technologies / Certified UIPath RPA Developer</p>
        </section>

        <section class="yrkeserfarenhet-section" id="yrkeserfarenhet">
          <h4> Yrkeserfarenhet </h4>
          <p> IT-Konsult: Fullstack utvecklare	Sogeti AB			2018– nu </p>
          <p> Personlig Assistant		JAG Brukarkooperativet		2010–2015 </p>
        </section>

        <section class="språk-section" id="sprok">
          <h4> Språk </h4>
          <ul id="språk-list">
            <li> Spanska, modersmål </li>
            <li> Svenska, flytande i tal och skrift </li>
            <li> Engelska, mycket god i tal och skrift </li>
          </ul>
        </section>

      </div>
       
      <a href="https://www.sogeti.se/" target="_blank"> Sogeti </a>
    
    
  <!--FORM-->

 <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="Full Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      
      <b-form-group id="exampleInputGroup3"
                    label="Subject:"
                    label-for="exampleInput3">
         <b-form-input id="exampleInput3">
                      type="text"
                      v-model="form.subject"
                      required
                      placeholder="Enter subject">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup4"
                    label="Country:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="text"
                      v-model="form.country"
                      required
                      placeholder="Enter country">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleGroup5">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>

  <!--Finish FORM -->
   </div>
   </div>
</template>

<script>
 
  export default {
    name: 'MyCV',
    data () {
      return {
        msg: 'Haydee Arbieto',
        form: {
          email: "",
          name: "",
          subject: "",
          country: "",
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset (evt) {
        evt.preventDefault();

        this.form.email = '';
        this.form.name = '';
        this.form.subject = '';
        this.form.country = '';
        this.form.checked = [];
        this.show = false;
        this.$nextTick(() => { this.show = true });
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  h4, p {
    text-align: left;
  }

</style>