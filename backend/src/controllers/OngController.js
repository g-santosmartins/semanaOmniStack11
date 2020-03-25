const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //index nome default para funcoes que fazem a listagem
    async index(request, response) {
        const ongs = await connection('ongs').select('*'); //retorna todos os registros
    
        return response.json(ongs); //retorna a lista de ongs
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email, 
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }

    
};