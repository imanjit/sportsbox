const path = require('path');
const express = require('express');
const routes = require('./controllers/index');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

<<<<<<< HEAD
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`SportsBox is live on ${PORT}`));
});
=======
sequelize.sync({force:false}).then(()=> {
    app.listen(PORT, () => 
      console.log(`App listening on port ${PORT}!`));
    });
>>>>>>> 95f1d512e2dd0153c730b07657473ccd879cf1b4
