const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');
routes.route('/colaboradores').get(controle.listar);

routes.route('/colaboradores').post(controle.incluir);


routes.route('/usuarios').put(controle.alterar);
routes.route('/usuarios/:id').delete(controle.excluir);
routes.route('/usuarios/:id').get(controle.obterPeloId);
routes.route('/usuarios/filtro/:filtro').get(controle.filtrar);
module.exports = routes;