import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/buscar/', LivroController.buscarPorEditora)
    .get('/livros/:id', LivroController.buscaLivro)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivro)

export default router;