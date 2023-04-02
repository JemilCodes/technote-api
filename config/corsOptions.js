const appState = process.env.NODE_ENV;
const allowedOrigins = [
  ...(appState === "production"
    ? ["https://technotebyjemil.onrender.com"]
    : ["http://localhost:3000"]),
];
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin, "hekeio");
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
