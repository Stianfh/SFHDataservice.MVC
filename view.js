const view = {
    pages: {
        home: `
            <h2>Velkommen til SFH Dataservice</h2>
            <p>Vi tilbyr profesjonelle IT-tjenester innen teknisk support, nettverksadministrasjon og cloud computing.</p>
        `,
        tjenester: `
            <h2>Våre Tjenester</h2>
            <p>Vi tilbyr skreddersydde løsninger innen IT-drift og support.</p>
        `,
        helpdesk: `
            <h2>Helpdesk</h2>
            <p>Få hjelp med dine tekniske problemer.</p>
        `,
        admin: `
            <h2>Admin Panel</h2>
            <p>Administrasjon av tjenester og brukere.</p>
        `,
        personvern: `
            <h2>Personvern</h2>
            <p>Les om hvordan vi håndterer dine data.</p>
        `,
        vilkar: `
            <h2>Vilkår og Betingelser</h2>
            <p>Våre vilkår for bruk av tjenestene.</p>
        `
    },
    // navbar: `
    //     <nav>
    //         <button onclick="controller.changePage('home')">Hjem</button>
    //         <button onclick="controller.changePage('tjenester')">Tjenester</button>
    //         <button onclick="controller.changePage('helpdesk')">Helpdesk</button>
    //         <button onclick="controller.changePage('admin')">Admin</button>
    //         <button onclick="controller.changePage('personvern')">Personvern</button>
    //         <button onclick="controller.changePage('vilkar')">Vilkår</button>
    //     </nav>
    // `
};

function backgroundPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <nav>
            <button onclick="changePage('home')">Hjem</button>
            <button onclick="changePage('tjenester')">Tjenester</button>
            <button onclick="changePage('helpdesk')">Helpdesk</button>
            <button onclick="changePage('admin')">Admin</button>
            <button onclick="changePage('personvern')">Personvern</button>
            <button onclick="changePage('vilkar')">Vilkår</button>
        </nav>
        ${updateView()}
    `
}
backgroundPage()

function homePageView(){
    return /*HTML*/`
        <div id="home" class="section" style="display: block;">
            <div class="section-content">
                <h2>Velkommen til SFH Dataservice</h2>
                <p>Vi er et profesjonelt IT-tjenesteselskap som spesialiserer oss på teknisk support, nettverksadministrasjon, og cloud computing. Vi hjelper bedrifter med å optimalisere deres IT-infrastruktur for å sikre driftseffektivitet og pålitelighet.</p>
                <p>Vår misjon er å tilby skreddersydde løsninger som oppfyller våre kunders unike behov, samtidig som vi sørger for at sikkerhet, personvern og pålitelighet er alltid i fokus.</p>
            </div>
        </div>
    `;
}

function tjenester() {
    return /*HTML*/` 
        <div id="services" class="section">
            <div class="section-content">
                <h2>Tjenester</h2>
                <p>Vi tilbyr en rekke tjenester som kan hjelpe deg med å forbedre din bedrifts IT-arbeidsflyt og infrastruktur. Våre tjenester er skreddersydde for å møte de spesifikke behovene til små og mellomstore bedrifter, samt store organisasjoner.</p>
                <div class="services-grid">
                    <div class="service-item">
                        <i class="fas fa-laptop-code"></i>
                        <h3>IKT-Rådgivning</h3>
                        <p>Vi tilbyr rådgivningstjenester for å hjelpe deg med å finne de beste IT-løsningene for din virksomhet. Vi analyserer dine behov og anbefaler effektive teknologier og verktøy.</p>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-cloud"></i>
                        <h3>Cloud Computing</h3>
                        <p>Våre cloud computing-tjenester gjør det enklere for deg å håndtere data og applikasjoner eksternt. Vi hjelper deg med migrering, administrasjon og sikkerhet i skyen.</p>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-network-wired"></i>
                        <h3>Nettverksadministrasjon</h3>
                        <p>Vi tilbyr komplette løsninger for administrasjon og overvåkning av nettverk. Vår ekspertise gjør at ditt nettverk fungerer optimalt og er godt beskyttet mot angrep.</p>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-server"></i>
                        <h3>Serveradministrasjon</h3>
                        <p>Vi tar ansvar for vedlikehold, overvåkning og optimalisering av servere. Våre løsninger sørger for at dine systemer fungerer feilfritt.</p>
                    </div>
                </div>
            </div>
        </div>
    `
}



function helpdeskView() {
    return /*HTML*/` 
        <div id="helpdesk" class="section">
            <div class="section-content">
                <h2>Helpdesk</h2>
                <p>Vårt dedikerte helpdesk-team er klar til å hjelpe deg med tekniske problemer og forespørsler. Vårt mål er å tilby rask og effektiv støtte slik at du kan fokusere på det som er viktigst – din virksomhet.</p>
                <p>Fyll ut skjemaet under for å kontakte oss og få hjelp med ditt tekniske problem.</p>
                <div class="helpdesk-form-container">
                    <form id="helpdeskForm">
                        <label for="navn">Navn:</label>
                        <input type="text" id="navn" name="navn" required>
    
                        <label for="telefon">Telefonnummer:</label>
                        <input type="tel" id="telefon" name="telefon" required>
    
                        <label for="email">E-post:</label>
                        <input type="email" id="email" name="email" required>
    
                        <label for="kategori">Kategori:</label>
                        <select id="kategori" name="kategori" required>
                            <option value="teknisk-support">Teknisk Support</option>
                            <option value="databaseservice">Databaseservice</option>
                            <option value="cloud-computing">Cloud Computing</option>
                            <option value="nettverksadministrasjon">Nettverksadministrasjon</option>
                            <option value="serveradministrasjon">Serveradministrasjon</option>
                            <option value="webutvikling">Webutvikling</option>
                        </select>
    
                        <label for="underkategori">Underkategori:</label>
                        <select id="underkategori" name="underkategori" required>
                        </select>
    
                        <label for="beskrivelse">Beskrivelse:</label>
                        <textarea id="beskrivelse" name="beskrivelse" rows="4" required></textarea>
    
                        <label for="kontaktmetode">Kontaktmetode:</label>
                        <select id="kontaktmetode" name="kontaktmetode" required>
                            <option value="telefon">Telefon</option>
                            <option value="epost">E-post</option>
                        </select>
    
                        <button type="submit" class="cta-button">Send inn</button>
                    </form>
                    <div id="feedbackMessage" class="feedback-message">Takk for at du kontaktet oss. Vi vil svare deg så snart som mulig.</div>
                </div>
            </div>
        </div>
    `;
}

function adminView() {
    return /*HTML*/` 
    <div class="section-content">
        <h2>Admin</h2>
        <p>Administrer og organisér alle dine IT-oppgaver gjennom vårt admin panel. Følg med på uferdige oppgaver, tildel ressurser, og overvåk fremdriften i sanntid.</p>
        <div class="tasks-container">
            <h3>Uferdige oppgaver</h3>
            <div class="task-item">
                <span>Oppgave 1: Server vedlikehold</span>
                <div class="task-actions">
                    <button>Fullfør</button>
                    <button>Sett på vent</button>
                </div>
            </div>
            <div class="task-item">
                <span>Oppgave 2: Nettverksproblem løst</span>
                <div class="task-actions">
                    <button>Fullfør</button>
                    <button>Sett på vent</button>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}