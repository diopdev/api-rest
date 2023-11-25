import app from "./src/app.js";

const PORT = 3000;

// Escuta porta
app.listen(PORT, () => {
  console.log(`Server running on addres http://localhost:${PORT}`);
});
