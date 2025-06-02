import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import produtosRoutes from './routes/produtos.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/produtos', produtosRoutes);

app.get('/', (req, res) => {
    app.listen('Rota raiz')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))