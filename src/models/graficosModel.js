const database = require("../database/config");

function contarFavoritosPorTipo(idUsuario) {
    const instrucao = `
        SELECT r.tipo, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        WHERE f.fk_usuario = ${idUsuario}
        GROUP BY r.tipo;
    `;
    return database.executar(instrucao); 
}

function topReceitasFavoritas() {
    const instrucao = `
        SELECT r.nome, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        GROUP BY r.nome
        ORDER BY total DESC
        LIMIT 3;
    `;
    return database.executar(instrucao);
}

function favoritasUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS total
        FROM favoritos
        WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function tipoPreferido(idUsuario) {
    var instrucaoSql = `
        SELECT r.tipo, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        WHERE f.fk_usuario = ${idUsuario}
        GROUP BY r.tipo
        ORDER BY total DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    contarFavoritosPorTipo,
    topReceitasFavoritas,
    favoritasUsuario,
    tipoPreferido
};
