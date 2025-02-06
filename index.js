const express = require("express");

const app = express();

app.get("/api", (req, res) => {
   res.status(200).json({message: "Hello Coder"});
});

app.listen(3000, () => console.log("Server started on port 3000"));
