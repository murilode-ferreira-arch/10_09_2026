const pool = require('../database/db');

class EquipamentoService {

    async listarTodos() {
        const resultado = await pool.query('SELECT * FROM equipamentos');

        return resultado.rows;
    }

}

module.exports = EquipamentoService;