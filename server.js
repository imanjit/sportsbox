const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index');
const passport = require('passport');
const morgan = require('morgan');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

//need to move these somewhere ???
const sess = {
  secret:'super secret',
  cookie:{},
  resave:false,
  saveUninitialized:true,
  store:new SequelizeStore ({
    db:sequelize
  })
};
app.use(morgan('dev')); // log every request to the console

app.use(cookieParser()); 
app.use(session(sess));
// ---------------------------------
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`SportsBox is live on ${PORT}`));
});
