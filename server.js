/* ========================================
   PLANETPOINTS - BACKEND SERVER
   ======================================== */

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'info.planetpoints@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password-here'
    }
});

// Email template za korisnika
function getUserEmailTemplate(name, email, message) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f1f8f6; }
                .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
                .header { background: linear-gradient(135deg, #1b5e20 0%, #00897b 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .header h2 { margin: 0; }
                .content { color: #212121; line-height: 1.6; }
                .message-box { background-color: #f1f8f6; padding: 15px; border-left: 4px solid #00897b; margin: 20px 0; border-radius: 4px; }
                .footer { color: #666666; font-size: 12px; margin-top: 30px; border-top: 1px solid #f1f8f6; padding-top: 15px; }
                .green { color: #1b5e20; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>✅ Poruka Primljena</h2>
                </div>
                
                <div class="content">
                    <p>Pozdrav <span class="green">${name}</span>,</p>
                    
                    <p>Hvala što ste se javili timu <span class="green">PlanetPoints</span>! 🌍</p>
                    
                    <p>Vaša poruka je uspešno primljena. Evo pregleda onoga što ste nam poslali:</p>
                    
                    <div class="message-box">
                        <p><strong>Ime:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Poruka:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <p>Odgovorit ćemo vam što je moguće brže na email adresu <span class="green">${email}</span>.</p>
                    
                    <p>Hvala što podržavate našu misiju zaštite planeta! ♻️</p>
                    
                    <p>Pozdrav,<br><span class="green">PlanetPoints Tim</span></p>
                </div>
                
                <div class="footer">
                    <p>© 2026 PlanetPoints. Zajedno čuvamo planet, jedan poeni odjednom.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}

// Email template za tim
function getTeamEmailTemplate(name, email, message) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f1f8f6; }
                .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
                .header { background: linear-gradient(135deg, #1b5e20 0%, #00897b 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .header h2 { margin: 0; }
                .content { color: #212121; line-height: 1.6; }
                .message-box { background-color: #f1f8f6; padding: 15px; border-left: 4px solid #00897b; margin: 20px 0; border-radius: 4px; }
                .footer { color: #666666; font-size: 12px; margin-top: 30px; border-top: 1px solid #f1f8f6; padding-top: 15px; }
                .green { color: #1b5e20; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>📨 Nova Poruka sa Kontakt Forme</h2>
                </div>
                
                <div class="content">
                    <p>Stigla je nova poruka preko kontakt forme na web stranici!</p>
                    
                    <div class="message-box">
                        <p><strong>Ime:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Poruka:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    
                    <p>Odgovorite na email: <span class="green">${email}</span></p>
                    
                    <p style="color: #666666; font-size: 14px; margin-top: 20px;">
                        Vreme: ${new Date().toLocaleString('sr-RS')}
                    </p>
                </div>
                
                <div class="footer">
                    <p>© 2026 PlanetPoints. Zajedno čuvamo planet.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}

// Endpoint za slanje emaila
app.post('/send-message', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validacija
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Sva polja su obavezna' });
        }

        // Email za korisnika
        const userMailOptions = {
            from: process.env.EMAIL_USER || 'info.planetpoints@gmail.com',
            to: email,
            subject: 'Vaša Poruka je Primljena - PlanetPoints ♻️',
            html: getUserEmailTemplate(name, email, message)
        };

        // Email za tim
        const teamMailOptions = {
            from: process.env.EMAIL_USER || 'info.planetpoints@gmail.com',
            to: 'info.planetpoints@gmail.com',
            subject: `Nova Poruka od ${name} - PlanetPoints Kontakt`,
            html: getTeamEmailTemplate(name, email, message)
        };

        // Slanje emaila
        await transporter.sendMail(userMailOptions);
        console.log(`✅ Potvrda poslana korisniku: ${email}`);

        await transporter.sendMail(teamMailOptions);
        console.log(`✅ Poruka poslana timu: info.planetpoints@gmail.com`);

        res.json({ success: true, message: 'Poruka je uspešno poslana!' });

    } catch (error) {
        console.error('❌ Greška pri slanju emaila:', error);
        res.status(500).json({ error: 'Greška pri slanju poruke. Pokušajte kasnije.' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server je pokrenut' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n🌍 PlanetPoints Server pokrenut na http://localhost:${PORT}`);
    console.log(`📧 Email servis je odabran\n`);
});
