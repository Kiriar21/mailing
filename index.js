import express from 'express';
import path from 'path'
import { sendWelcomeMessage } from './mailer.js';

const app = express();
app.use(express.urlencoded({ extended: true}))

const __dirname = path.resolve()

const emails = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app.post('/', async (req, res) => {
    //zapisanie maila
    const { email, wiadomosc } = req.body
    emails.push(email);
    console.log('====================================');
    console.log('Baza maili: ');
    console.log(emails);
    console.log('====================================');
    
    
    sendWelcomeMessage(email, wiadomosc)


    //wyswietlenie podziekowania
    res.sendFile(__dirname + '/views/thanks.html')
})

app.listen(1024, () => {
    console.log('listening on port 1024')
})