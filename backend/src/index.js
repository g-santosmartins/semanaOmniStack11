const express = require('express'); //chama as funcionalidades do express pra mim
const cors = require('cors');
const routes = require('./routes'); //caminho relativo

const app = express();

app.use(cors()); // todas as aplicações front-end possam acessaro o back aqui
app.use(express.json());// antes de tudo converta o json em objeto
app.use(routes);
/**
 *  Rota/ Recurso
 */

 /**
  * Metodos HTTP
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar um informação no back-end
  */

  /**
   * Tipos de parametros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após ? (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('user').select('*').where()
     */


app.listen(3333); //retornou um cannot get

