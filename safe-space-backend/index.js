const cors = require("cors");
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
require("dotenv").config();

// importing Routers
const AppointmentsRouter = require("./routers/appointmentsRouter");
const ClientsRouter = require("./routers/clientsRouter");
const JournalsRouter = require("./routers/journalsRouter");
const MemosRouter = require("./routers/memosRouter");
const TherapistsRouter = require("./routers/therapistsRouter");
const ArticlesRouter = require("./routers/articlesRouter");

// importing Controllers
const AppointmentsController = require("./controllers/appointmentsController");
const ClientsController = require("./controllers/clientsController");
const JournalsController = require("./controllers/journalsController");
const MemosController = require("./controllers/memosController");
const TherapistsController = require("./controllers/therapistsController");
const ArticlesController = require("./controllers/articlesController");

// importing DB
const db = require("./db/models/index");
const {
  client,
  memoentry,
  client_therapists,
  religion,
  age,
  language,
  specialization,
  specialization_therapists,
  appointment,
  journalentry,
  journaltemplate,
  recommendationarticle,
  therapist,
  blockeddate,
} = db;

const checkJwt = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER,
});

// initializing Controllers -> note the lowercase for the first word

//FOR CLIENT get one appt, update one appt, delete one appt, create one appt. FOR THERAPISTS get all appt, get one appt, create one appt.
const appointmentsController = new AppointmentsController(
  appointment,
  client,
  therapist
);

//FOR CLIENT getone therapist, get all journals, get all appointments, update one client, update one clients_therapist, get all clients_therapists, create one client, get one client. FOR THERAPISTS get one client, update one client, get all clients_therapist,update one clients_therapist.
//FOR CLIENT update one client, get all therapists, create many clients_therapists.

const clientsController = new ClientsController(
  client,
  therapist,
  client_therapists,
  appointment,
  journalentry,
  specialization,
  specialization_therapists,
  memoentry
);

//FOR CLIENT, get all and get one recommendation articles
const articlesController = new ArticlesController(recommendationarticle);

//FOR CLIENT update one journal. FOR THERAPISTS, get all journals, get one journal, create one journal,
const journalsController = new JournalsController(
  journalentry,
  journaltemplate,
  client,
  therapist
);

//FOR THERAPIST, get all memos, get one memo, create one memo.
const memosController = new MemosController(memoentry, client, therapist);

//FOR THERAPIST, get all clients, get one therapist, get all blocked dates, create one blocked date, delete one blocked date.
//FOR CLIENT, get all blocked dates.

const therapistsController = new TherapistsController(
  therapist,
  client,
  blockeddate,
  client_therapists
);

// initializing Routers

const appointmentsRouter = new AppointmentsRouter(
  appointmentsController
).routes();

const clientsRouter = new ClientsRouter(clientsController, checkJwt).routes();

const journalsRouter = new JournalsRouter(journalsController).routes();

const memosRouter = new MemosRouter(memosController).routes();

const therapistsRouter = new TherapistsRouter(
  therapistsController,
  checkJwt
).routes();

const articlesRouter = new ArticlesRouter(articlesController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// enable and use router

app.use("/appointments", appointmentsRouter);
app.use("/clients", clientsRouter);
app.use("/journals", journalsRouter);
app.use("/memos", memosRouter);
app.use("/therapists", therapistsRouter);
app.use("/articles", articlesRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
