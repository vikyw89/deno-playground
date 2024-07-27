import express from "npm:express@4";
import react from "npm:react@18.2.0";


const app = express();

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.listen(3000);
