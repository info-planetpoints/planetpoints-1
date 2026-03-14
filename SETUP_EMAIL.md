<<<<<<< HEAD
# 📧 SETUP EMAIL - BRZI VODIČ

## 🎯 Šta je Urađeno

✅ Backend server za email slanje (Node.js + Express)
✅ Automatske email notifikacije za korisnike
✅ Automatske email notifikacije za tim (info.planetpoints@gmail.com)
✅ Profesionalno oblikovani emaili sa HTML šablonom
✅ Sigurna konfiguracija sa .env datotekom
✅ Ažurirana kontakt forma

## 🚀 KORAK 1: Instalirajte Node.js

- Preuzmite sa: https://nodejs.org
- Preporučena verzija: LTS (Long Term Support)
- Instalacija je standardna (Next, Next, Finish)

## 🚀 KORAK 2: Otvorite Terminal

- Na Windows:
  - Desni klik u folderen → "Open in Terminal" ili "Open PowerShell here"
  - Ili: Start → cmd → otipkajte "cd" + put do foldera

## 🚀 KORAK 3: Instalirajte Zavisnosti

U terminalu, u folderui sa projektom napišite:

```bash
npm install
```

Čekajte da se sve zavisnosti instaliraju (može 1-2 minuta).

## 🚀 KORAK 4: Konfigurirajte Gmail

### Otvorite .env datoteku

U folderui trebate pronaći `.env` datoteku:

```
EMAIL_USER=info.planetpoints@gmail.com
EMAIL_PASSWORD=your-app-specific-password
PORT=3000
```

### Kako Dobiti Gmail App Password

**Važno:** Trebate 2-Factor Authentication na vašem Gmail-u!

1. Idite na: https://myaccount.google.com/security
2. Logirajte se sa info.planetpoints@gmail.com
3. Kliknite na **"2-Step Verification"** (ako nije već omogućen)
   - Pratite upustva na ekranu
   - Trebat će vam telefonski broj
4. Nakon što je 2FA omogućen, idite u **Manage your Google Account**
5. Idite na **Security** tab
6. Skrolujte dole do **App passwords**
7. Izaberite:
   - App: **Mail**
   - Device: **Windows Computer** (ili vaš device)
8. Google će generisati 16-karakternu lozinku
9. **Kopirajte tu lozinku**
10. Pribijajte je u .env:
    ```
    EMAIL_PASSWORD=xxxxxxxxxxxxx
    ```

## 🚀 KORAK 5: Pokrenite Server

U terminalu napišite:

```bash
npm start
```

Trebali biste vidjeti:

```
🌍 PlanetPoints Server pokrenut na http://localhost:3000
📧 Email servis je odabran
```

## 🧪 KORAK 6: Testirajte Email Funkcionalnost

1. Otvorite u pregledniku: `http://localhost:3000`
2. Skrolujte do sekcije **KONTAKT**
3. Popunite formu:
   - Ime: Vaše ime
   - Email: Vaš email gdje želite test poruku
   - Poruka: Test poruka
4. Kliknite **Pošalji Poruku**
5. Trebali biste vidjeti: ✅ Poruka je uspešno poslana!
6. Provjerite:
   - Vaš inbox - trebate dobiti potvrdu
   - info.planetpoints@gmail.com - trebate dobiti poruku od korisnika

## ✨ Šta Se Dešava Kada Korisnik Pošalje Poruku

1. **Korisnik Dobiva Email:**
   - Potvrda da je poruka primljena
   - Pregled svega što je poslao
   - Poruka da će tim odgovoriti

2. **Tim (info.planetpoints@gmail.com) Dobija Email:**
   - Notifikacija o novoj poruci
   - Svi detalji od korisnika
   - Email na koji treba odgovoriti

## ⚙️ Dodatne Komande

```bash
# Pokrenuti server sa auto-reload (trebate nodemon)
npm run dev

# Instalirati nodemon globalno
npm install -g nodemon
npx nodemon server.js

# Zaustaviti server
Ctrl + C (u terminalu)
```

## 🆘 Česta Pitanja

**P: Greška "Cannot find module 'express'"**
- O: Nisu instalovane zavisnosti. Pokrenite `npm install`

**P: "PORT 3000 je već u upotrebi"**
- O: Promijenite PORT u .env na 3001 ili 3002

**P: "Gmail says my password is wrong"**
- O: Provjerite da imate 2FA omogućen i da koristite "App Password", ne vašu običnu lozinku

**P: Emaili se ne slanju**
- O: Provjerite .env datoteku, provjerite gmail kredencijale, provjerite da je server pokrenut

## 🔐 Sigurnost

**VAŽNO:** 
- `.env` datoteka je ignorisana u Git (ne ide na GitHub)
- Nikada ne dijelite .env datoteku
- App Password je manja sigurnosna greška od vaše glavne lozinke

## 📞 Potrebna Vam Pomoć?

- Provjerite README.md za više informacija
- Provjerite terminal za error poruke
- Malo detalja iz error-a može pomoći u rješavanju

---

**Zajedno čuvamo planet!** 🌍♻️
=======
# 📧 SETUP EMAIL - BRZI VODIČ

## 🎯 Šta je Urađeno

✅ Backend server za email slanje (Node.js + Express)
✅ Automatske email notifikacije za korisnike
✅ Automatske email notifikacije za tim (info.planetpoints@gmail.com)
✅ Profesionalno oblikovani emaili sa HTML šablonom
✅ Sigurna konfiguracija sa .env datotekom
✅ Ažurirana kontakt forma

## 🚀 KORAK 1: Instalirajte Node.js

- Preuzmite sa: https://nodejs.org
- Preporučena verzija: LTS (Long Term Support)
- Instalacija je standardna (Next, Next, Finish)

## 🚀 KORAK 2: Otvorite Terminal

- Na Windows:
  - Desni klik u folderen → "Open in Terminal" ili "Open PowerShell here"
  - Ili: Start → cmd → otipkajte "cd" + put do foldera

## 🚀 KORAK 3: Instalirajte Zavisnosti

U terminalu, u folderui sa projektom napišite:

```bash
npm install
```

Čekajte da se sve zavisnosti instaliraju (može 1-2 minuta).

## 🚀 KORAK 4: Konfigurirajte Gmail

### Otvorite .env datoteku

U folderui trebate pronaći `.env` datoteku:

```
EMAIL_USER=info.planetpoints@gmail.com
EMAIL_PASSWORD=your-app-specific-password
PORT=3000
```

### Kako Dobiti Gmail App Password

**Važno:** Trebate 2-Factor Authentication na vašem Gmail-u!

1. Idite na: https://myaccount.google.com/security
2. Logirajte se sa info.planetpoints@gmail.com
3. Kliknite na **"2-Step Verification"** (ako nije već omogućen)
   - Pratite upustva na ekranu
   - Trebat će vam telefonski broj
4. Nakon što je 2FA omogućen, idite u **Manage your Google Account**
5. Idite na **Security** tab
6. Skrolujte dole do **App passwords**
7. Izaberite:
   - App: **Mail**
   - Device: **Windows Computer** (ili vaš device)
8. Google će generisati 16-karakternu lozinku
9. **Kopirajte tu lozinku**
10. Pribijajte je u .env:
    ```
    EMAIL_PASSWORD=xxxxxxxxxxxxx
    ```

## 🚀 KORAK 5: Pokrenite Server

U terminalu napišite:

```bash
npm start
```

Trebali biste vidjeti:

```
🌍 PlanetPoints Server pokrenut na http://localhost:3000
📧 Email servis je odabran
```

## 🧪 KORAK 6: Testirajte Email Funkcionalnost

1. Otvorite u pregledniku: `http://localhost:3000`
2. Skrolujte do sekcije **KONTAKT**
3. Popunite formu:
   - Ime: Vaše ime
   - Email: Vaš email gdje želite test poruku
   - Poruka: Test poruka
4. Kliknite **Pošalji Poruku**
5. Trebali biste vidjeti: ✅ Poruka je uspešno poslana!
6. Provjerite:
   - Vaš inbox - trebate dobiti potvrdu
   - info.planetpoints@gmail.com - trebate dobiti poruku od korisnika

## ✨ Šta Se Dešava Kada Korisnik Pošalje Poruku

1. **Korisnik Dobiva Email:**
   - Potvrda da je poruka primljena
   - Pregled svega što je poslao
   - Poruka da će tim odgovoriti

2. **Tim (info.planetpoints@gmail.com) Dobija Email:**
   - Notifikacija o novoj poruci
   - Svi detalji od korisnika
   - Email na koji treba odgovoriti

## ⚙️ Dodatne Komande

```bash
# Pokrenuti server sa auto-reload (trebate nodemon)
npm run dev

# Instalirati nodemon globalno
npm install -g nodemon
npx nodemon server.js

# Zaustaviti server
Ctrl + C (u terminalu)
```

## 🆘 Česta Pitanja

**P: Greška "Cannot find module 'express'"**
- O: Nisu instalovane zavisnosti. Pokrenite `npm install`

**P: "PORT 3000 je već u upotrebi"**
- O: Promijenite PORT u .env na 3001 ili 3002

**P: "Gmail says my password is wrong"**
- O: Provjerite da imate 2FA omogućen i da koristite "App Password", ne vašu običnu lozinku

**P: Emaili se ne slanju**
- O: Provjerite .env datoteku, provjerite gmail kredencijale, provjerite da je server pokrenut

## 🔐 Sigurnost

**VAŽNO:** 
- `.env` datoteka je ignorisana u Git (ne ide na GitHub)
- Nikada ne dijelite .env datoteku
- App Password je manja sigurnosna greška od vaše glavne lozinke

## 📞 Potrebna Vam Pomoć?

- Provjerite README.md za više informacija
- Provjerite terminal za error poruke
- Malo detalja iz error-a može pomoći u rješavanju

---

**Zajedno čuvamo planet!** 🌍♻️
>>>>>>> 7def952 (PlanetPoints: split index/content and restore content)
