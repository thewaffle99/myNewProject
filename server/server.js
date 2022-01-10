const express = require("express");
const app = express();
const port = 8000;
const personRoutes = require("./routes/person.routes");
personRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
