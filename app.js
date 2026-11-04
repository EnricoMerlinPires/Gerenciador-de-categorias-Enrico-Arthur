const express = require("express");
const path = require("path");

const app = express();

// ========================================
// CONFIGURAÇÃO DO EJS
// ========================================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// ========================================
// MIDDLEWARES
// ========================================

// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));

// Permite receber requisições com JSON
app.use(express.json());

// Serve arquivos estáticos (CSS, imagens, etc.)
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));


// ========================================
// ROTAS
// ========================================

const categoriaRoutes = require("./routes/categoriaRoutes");

app.use("/categorias", categoriaRoutes);


// ========================================
// ROTA PRINCIPAL
// ========================================

app.get("/", (req, res) => {

    res.render("index");

});


// ========================================
// SERVIDOR
// ========================================

app.listen(3000, () => {

    console.log(
        "Servidor rodando em http://localhost:3000"
    );

});