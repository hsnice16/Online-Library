const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/user", require("server/api/routes"));

app.listen(PORT, (error) => {
  if (error) throw error;

  console.log("Server is Listening");
});
