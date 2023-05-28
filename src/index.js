import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path'
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//connect to db
db.connect();

const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);