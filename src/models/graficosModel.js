const db = require("../database/config");

function contarFavoritosPorTipo(idUsuario) {
    const instrucao = `
        SELECT r.tipo, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        WHERE f.fk_usuario = ${idUsuario}
        GROUP BY r.tipo;
    `;
    return db.executar(instrucao); 
}

function topReceitasFavoritas() {
    const instrucao = `
        SELECT r.nome, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        GROUP BY r.nome
        ORDER BY total DESC
        LIMIT 5;
    `;
    return db.executar(instrucao);
}


module.exports = {
    contarFavoritosPorTipo,
    topReceitasFavoritas
};
