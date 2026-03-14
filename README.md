# 🌍 PlanetPoints - Web Stranica

Modernu, responsivnu web stranicu za PlanetPoints aplikaciju sa **email notifikacijama**!

## 📁 Fajlovi u Projektu

- **index.html** - Glavna HTML datoteka sa svim sekcijama
- **styles.css** - CSS stilovi sa eco-friendly bojama i responsivnim dizajnom
- **script.js** - JavaScript za interaktivnost (sa email slanjem)
- **server.js** - Node.js/Express backend za email slanje
- **package.json** - NPM zavisnosti
- **.env** - Konfiguracija za Gmail kredencijale
- **planetpointslogo.png** - Vaš logo

## 🎨 Sekcije na Web Stranici

1. **Početna** - Hero sekcija sa CTA dugmetom
2. **O Nama** - Misija, vizija i vrijednosti
3. **Funkcije Aplikacije** - 6 glavnih funkcionalnosti sa ikonama
4. **Kako Funkcionira** - 5-korak proces korištenja
5. **Kontakt** - Email, Instagram i **kontakt forma sa email notifikacijama** ✨
6. **Footer** - Brzi linkovi, pravni tekstovi i copyright

## 🎯 Posebne Karakteristike

✅ **Potpuno Responsivan** - Savršeno izgleda na telefonu, tabletu i PC-u
✅ **Eco-Friendly Boje** - Zelena, teal i earth tone boje
✅ **Interaktivni Elementi** - Mobile meni, modalni prozori, animacije
✅ **📧 Email Notifikacije** - Korisnik i tim dobivaju email notifikacije
✅ **Brz i Lagan** - Bez zavisnosti, čist kod
✅ **SEO Optimiziran** - Semantička HTML struktura
✅ **Pristupačan** - Dobar kontrast i čitljivost
✅ **Terenu of Use i Privacy Policy** - Na srpskom jeziku

## 🚀 Kako Postaviti

### Zahtjevi
- Node.js (verzija 14 ili viša)
- npm ili yarn package manager

### Instalacija

1. **Instalirajte zavisnosti:**
   ```bash
   npm install
   ```

2. **Konfigurirajte Gmail kredencijale** (`.env` datoteka):
   ```
   EMAIL_USER=info.planetpoints@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   PORT=3000
   ```

   **Kako dobiti Gmail App Password:**
   - Idite na https://myaccount.google.com/security
   - Omogućite 2FA (Two-Factor Authentication) ako već nije omogućen
   - Pronađite opciju "App passwords" 
   - Kreirajte novu aplikacijsku lozinku (tip: Mail, Device: Windows Computer)
   - Kopirajte generisku lozinku i stavite je u `.env` datoteku

3. **Pokrenite server:**
   ```bash
   npm start
   ```
   
   Server će biti dostupan na `http://localhost:3000`

## 📧 Email Funkcionalnost

Kada korisnik pošalje poruku kroz kontakt formu:

### 1️⃣ Korisnik Dobiva Email
- Potvrda da je poruka primljena
- Pregled imena, emaila i sadržaja poruke
- Obavijest da će tim kontaktirati
- Profesionalno oblikovan sa PlanetPoints brandigom

### 2️⃣ Tim Dobiva Email
- Notifikacija o novoj poruci
- Svi detalji od korisnika
- Email koji treba izazvati za odgovor
- Vremenska oznaka kada je poruka primljena

## 🎨 Boja Šema

- **Primary Green**: #1b5e20
- **Accent Teal**: #00897b
- **Light Green**: #81c784
- **Light BG**: #f1f8f6
- **Earth Brown**: #795548

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🛠️ Razvoj

Za razvoj sa auto-reload funkcionalnosti (trebate instalirati `nodemon`):
```bash
npm install -g nodemon
npm run dev
```

Ili koristeći lokalnu instalaciju:
```bash
npx nodemon server.js
```

`nodemon` će automatski restartovati server kada se datoteke promijene.

## 🔒 Sigurnost

- `.env` datoteka sadrži čuvane kredencijale
- `.gitignore` osigurava da se `.env` **NE** commituje u Git
- CORS je konfiguriran za domaću stranicu
- Validacija podataka na backend-u

## 🤝 Kontakt

- 📧 Email: info.planetpoints@gmail.com
- 📱 Instagram: @planetpoints2026

---

**Zajedno čuvamo planet, jedan poeni odjednom.** ♻️🌍


## 🔧 Kako Editovati Sadržaj

### Tekst i Informacije
- Otvorite `index.html` u tekstualnom editoru
- Nađite tekst koji želite promijeniti
- Saveujte fajl

### Boje
- Otvorite `styles.css`
- Nađite CSS varijable na početku fajla (`:root`)
- Promijenjite HEX kodove boja

### Logo
- Zamijenjite `planetpointslogo.png` sa vašim logom
- Održite istu veličinu ako moguće
- Ili prilagodite `height` i `width` u CSS-u

## 🏆 Rang Lista - Detalji Implementacije

Rang lista je potpuno funkcionalna sa **demo podacima**:

### Vremenski Periodi:
- **🎯 Dnevno** - Prikazuje top 5 korisnika sa aktivnostima iz dana
- **📊 Sedmično** - Vrhunski korisnici sedmične rang liste
- **📈 Mjesečno** - Mjesečne rank liste sa većim bodovima
- **🏆 Godišnje** - Godišnje rank liste sa aktivistima godine

### Prikazane Informacije:
- **Rang** - Pozicija sa medaljem za top 3 (🥇 🥈 🥉)
- **Korisnik** - Inicijali u avatar kružiću
- **Broj Akcija** - Koliko eco aktivnosti je korisnik obavio
- **Bodovi** - Ukupni prikupljeni bodovi (sa star ikonicom 🌟)
- **Nivo** - Korisnikov nivo: Eco Starter, Green Friend, Eco Warrior, Eco Master, itd.
- **Bedževi** - Specijalni bedževi i dostignuća za top korisnika

### Demo Korisnici:
Trenutno sistem prikazuje 5 demo korisnika sa realističnim podacima za svakoperiodu. Kada integrirate sa aplikacijom, zamijenjujte demo podatke sa stvarnim korisnicima iz baze.

### Kako Prilagoditi Podatke:
1. Otvorite `script.js`
2. Nađite `leaderboardData` objekat na početku fajla
3. Zamijenjite vrednosti sa stvarnim podacima iz vaše baze podataka
4. Struktura za svaki korisnik je: `{ id, name, actions, points, level, achievement }`

## 🎖️ Dostignuća i Bedževi Sekcija

Ova sekcija prikazuje bedževa koje korisnici mogu otključati:

- **6 Različitih Bedževa** sa ikonama i opisima
- **Rarity Sistem** - Obično, Rijetko, Epsko, Legendarno
- **Animirani Bedževi** - Šumu animacija za vizuelni efekt
- **Hover Efekti** - Interaktivni prikaz

Bedževi uključuju: Recikler Početnik, Zeleni Prijatelj, Planet Guardian, Eco Legenda, Dijeli Znanje, Streamline Aktivista

## 🚀 Što Dolazi Uskoro Sekcija

Prikazuje 6 budućih karakteristika koje se razvijaju:

1. **Team Challenges** - Grupne eco izazove
2. **Local Events** - Lokalne eco aktivnosti
3. **AI Recommendations** - Personalizovane preporuke
4. **Gamification Levels** - Nivoi sa izazovima
5. **AR Experience** - Augmented reality iskustvo
6. **Shopping Partnership** - Partnership sa eco brendovima

Svaka karakteristika ima:
- Redni broj
- Naziv i opis
- "Uskoro" badge
- Hover animaciju sa gradient efektom

## � Responsive Breakpoints

- **Desktop** - Do 1200px optimal prikaz
- **Tablet** - 768px i niže
- **Mobilni** - 480px i niže

## �🔗 Linkovi koji TreebaJu Korekcija

Prije nego što pokrenete web stranicu, prilagodite:

1. **Email** - `Info.planetpoints@gmail.com` (već je unesen)
2. **Instagram** - `https://www.instagram.com/planetpoints2026/` (već je unesen)
3. **Kontakt forma** - Trebate backend za slanje poruka
4. **Preuzimanje aplikacije** - Dodajte linkove za App Store i Google Play

## 💾 Kontakt Forma

Trenutno kontakt forma samo provjerava je li popunjene polja. Za
 pravu funkcionalnost trebate:

- Backend servera (Node.js, PHP, Python, itd.)
- Email servis
- Ili treću stranku servisa kao Formspree, Firebase, itd.

## 📧 Za Dodatne Izmjene

Ako trebate:
- Dodatne sekcije
- Promjenu boja  
- Integraciju rang liste sa pravom bazom podataka
- Povezivanje sa bazom podataka
- Blog sekciju
- Galeriju slika
- Dinamičko učitavanje korisnika iz API-ja

Samo mi kažite i prilagođam web stranicu!

## 🌐 Tehnologije Korištene

- HTML5
- CSS3 (Flexbox, Grid, Gradients)
- Vanilla JavaScript
- Responsive Design
- CSS Animations

## ✨ Dodatni Savjeti

1. Testirajte web stranicu na različitim uređajima
2. Koristite istraživač boja za prilagođavanje boja
3. Dodajte Google Analytics za praćenje posjetilaca
4. Razmislite o SSL certificiranom na serveru
5. Periodički ažurirajte informacije

---

**Sav kod je spreman za produkciju! Uživajte sa web stranicom PlanetPoints! 🌍♻️**
