const express = require("express");

const app = express();

app.get("/api", (req, res) => {
   res.status(200).send({message: "Hello dunyo"});
});

app.listen(3000, () => console.log("Server started on port 3000"));
