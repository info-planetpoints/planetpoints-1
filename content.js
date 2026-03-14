const pageContent = `
    <!-- Hero Section -->
    <section id="pocetna" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Zajedno Gradimo Bolji Planet</h1>
                <p>Recikliraj, skupljaj poene i dobij nagrade - sve dok čuvaš okolinu</p>
                <button class="cta-button">Preuzmi Aplikaciju</button>
            </div>
            <div class="hero-image">
                <img src="planetpointslogo.png" alt="PlanetPoints" class="hero-logo">
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="onama" class="about">
        <div class="container">
            <h2>O Nama</h2>
            <p class="section-intro">PlanetPoints je aplikacija posvećena podizanju svijesti o važnosti recikliranja i ekološki odgovornog ponašanja.</p>
            <div class="about-grid">
                <div class="about-card">
                    <h3>🌍 Naša Misija</h3>
                    <p>Podići svijest kod ljudi o važnosti recikliranja i ekoloških akcija, stvarajući pozitivnu promjenu u zajednici.</p>
                </div>
                <div class="about-card">
                    <h3>♻️ Naša Vizija</h3>
                    <p>Stvoriti planet gdje je svaki čin zaštite okoline nagradjen, i gdje se ekološka odgovornost jača svakodnevno.</p>
                </div>
                <div class="about-card">
                    <h3>⭐ Naše Vrijednosti</h3>
                    <p>Transparentnost, inovacija i zajednica - jer zajedno možemo postići najveće promjene.</p>
                </div>
            </div>
            <div class="mission-text">
                <h3>Kako Započinjemo?</h3>
                <p>Aplikacija je namjenjena da podigne svjest ljudima o recikliranju i ekološkim akcijama. Podstičemo nove korisnike da koriste aplikaciju, recikliraju i čine ekološki odgovorne izbore. Korisnici skupljaju poene za svaki ekološki odgovoran čin. Ti poeni se mogu koristiti za kupovinu različitih bedževa i nagrada, dok koje skupljaju korisnici se osjećaju dijelom jednog većeg pokreta.</p>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="funkcije" class="features">
        <div class="container">
            <h2>Funkcije Aplikacije</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>Skupljanje Poena</h3>
                    <p>Sakupi poene za svaki ekološki odgovoran čin - recikliranje, čišćenje, i druge eco akcije.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏆</div>
                    <h3>Bedževi i Nagrade</h3>
                    <p>Otključavaj posebne bedževe dok naprediraš u svojoj eco putanji i osvajaj virtualne i fizičke nagrade.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Tracking Napretka</h3>
                    <p>Prati svoj napredak i vidi koliko si pomogo planetu sa detaljnim statistikama i analizama.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>Društvena Zajednica</h3>
                    <p>Uključi se u zajednicu drugih eco-aktivista, deli iskustva i inspiriraj druge za promjenu.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌱</div>
                    <h3>Edukacija</h3>
                    <p>Nauči sve o recikliranju, održivosti i kako dnevno možeš doprinijeti zaštiti okoline.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎁</div>
                    <h3>Marketplace</h3>
                    <p>Kupi bedževe, specijalne stavke i ekskluzivne nagrade sa poenom koje si zaradio.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How it Works Section -->
    <section id="kako" class="how-it-works">
        <div class="container">
            <h2>Kako Funkcionira</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3>Preuzmi Aplikaciju</h3>
                    <p>Kreni sa preuzimanjem PlanetPoints aplikacije na svoj telefon.</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3>Registruj se</h3>
                    <p>Kreiraj svoj profil u nekoliko jednostavnih koraka.</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3>Počni Akcije</h3>
                    <p>Loguj svoje ekološke čine - recikliranje, clean-up akcije, i više.</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h3>Skupljaj Poene</h3>
                    <p>Automatski skupljaj poene za sve ekološke akcije.</p>
                </div>
                <div class="step">
                    <div class="step-number">5</div>
                    <h3>Kupi Nagrade</h3>
                    <p>Koristi poene za kupovinu bedževa, stavki i drugih nagrada.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="kontakt" class="contact">
        <div class="container">
            <h2>Kontaktiraj Nas</h2>
            <p class="section-intro">Imaš pitanja? Želiš da se uključiš? Kontaktiraj nas sada!</p>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>📧 Email</h3>
                        <p><a href="mailto:Info.planetpoints@gmail.com">Info.planetpoints@gmail.com</a></p>
                    </div>
                    <div class="contact-item">
                        <h3>📱 Instagram</h3>
                        <p><a href="https://www.instagram.com/planetpoints2026/" target="_blank">@planetpoints2026</a></p>
                    </div>
                    <div class="contact-item">
                        <h3>🌐 Društvene Mreže</h3>
                        <p>Pratimo nas na svim platformama za poslednje vjesti i ažuriranja.</p>
                    </div>
                </div>
                <form class="contact-form">
                    <input type="text" name="name" placeholder="Tvoje Ime" required>
                    <input type="email" name="email" placeholder="Tvoj Email" required>
                    <textarea name="message" placeholder="Tvoja Poruka" rows="5" required></textarea>
                    <button type="submit" class="submit-button">Pošalji Poruku</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>PlanetPoints</h4>
                    <p>Zajedno čuvamo planet, jedan poeni odjednom.</p>
                </div>
                <div class="footer-section">
                    <h4>Brzi Linkovi</h4>
                    <ul>
                        <li><a href="#pocetna">Početna</a></li>
                        <li><a href="#onama">O Nama</a></li>
                        <li><a href="#funkcije">Funkcije</a></li>
                        <li><a href="#kako">Kako Funkcionira</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Pravni</h4>
                    <ul>
                        <li><a href="#terms">Uslovi Korištenja</a></li>
                        <li><a href="#privacy">Politika Privatnosti</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Prati Nas</h4>
                    <ul>
                        <li><a href="https://www.instagram.com/planetpoints2026/" target="_blank">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 PlanetPoints. Sva Prava Zadržana. | Zajedno za Bolji Planet 🌍</p>
            </div>
        </div>
    </footer>

    <!-- Terms Modal -->
    <div id="termsModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Uslovi Korištenja</h2>
            <div class="modal-body">
                <h3>1. Prihvatanje Uslova</h3>
                <p>Korišćenjem PlanetPoints aplikacije, slažeš se da ćeš se držati ovih uslova korištenja. Ako se ne slažeš sa bilo kojim dijelom, prestani koristiti aplikaciju.</p>
                <h3>2. Licenca</h3>
                <p>Dajemo ti ograničenu, neisključivu, neprenosivu licencu da koristiš PlanetPoints isključivo u lične i nekomercijalne svrhe.</p>
                <h3>3. Odgovornost Korisnika</h3>
                <p>Kao korisnik, odgovoran si za povjerljivost lozinke i aktivnosti na svom računu. Obavijesti nas odmah ako sumnjaš da je neko neovlašteno pristupio tvojem nalogu.</p>
                <h3>4. Neprihvatljivo Ponašanje</h3>
                <p>Zabranjene aktivnosti: zloupotreba, malverzacija, spam, lažno prijavljivanje akcija, i druge štetne radnje.</p>
                <h3>5. Intelektualna Svojina</h3>
                <p>Sve elemente PlanetPoints (dizajn, tekst, logo, boje) štiti intelektualno vlasništvo. Ne smiješ ih koristiti bez dozvole.</p>
                <h3>6. Odricanje Odgovornosti</h3>
                <p>Aplikacija se pruža "kako jeste". PlanetPoints ne snosi odgovornost za gubitke ili štete.</p>
                <h3>7. Promjena Uslova</h3>
                <p>Zadržavamo pravo izmjene uslova. Obavijestit ćemo korisnike o bitnim promjenama.</p>
                <h3>8. Završetak</h3>
                <p>Možemo prekinuti pristup zbog kršenja uslova.</p>
            </div>
        </div>
    </div>

    <!-- Privacy Modal -->
    <div id="privacyModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Politika Privatnosti</h2>
            <div class="modal-body">
                <h3>1. Prikupljanje Podataka</h3>
                <p>Prikupljamo ime, email, podatke o eco akcijama i preference.</p>
                <h3>2. Korištenje Podataka</h3>
                <p>Podatke koristimo za poboljšanje usluge i bolju komunikaciju.</p>
                <h3>3. Sigurnost Podataka</h3>
                <p>Primjenjujemo standarde sigurnosti, ali apsolutna sigurnost nije moguća.</p>
                <h3>4. Dijeljenje Podataka</h3>
                <p>Podatke ne dijelimo bez dozvole, osim gdje zakon nalaže.</p>
                <h3>5. Cookies i Tehnologije</h3>
                <p>Cookies koristimo za bolje iskustvo. Možeš ih isključiti u pregledniku.</p>
                <h3>6. Tvoja Prava</h3>
                <p>Imaš pravo na pristup, ispravku i brisanje podataka. Piši na Info.planetpoints@gmail.com.</p>
                <h3>7. Promjena Politike</h3>
                <p>Politika se može mijenjati; obavijestit ćemo te o ključnim promjenama.</p>
                <h3>8. Kontakt</h3>
                <p>Imate li pitanja, pišite na Info.planetpoints@gmail.com</p>
            </div>
        </div>
    </div>
`;

const pageInstance = document.getElementById('pageContent');
if (pageInstance) {
    pageInstance.innerHTML = pageContent;
}
