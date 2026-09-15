const pool = require('./src/database/db');

async function testarConexao() {
    try {
        const resultado = await pool.query('SELECT * FROM equipamentos');

        console.log(resultado.rows);
    } catch (erro) {
        console.log('Erro ao conectar ao banco:', erro);
    }
}

testarConexao();