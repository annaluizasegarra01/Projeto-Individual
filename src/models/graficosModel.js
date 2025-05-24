const database = require("../database/config");

function contarFavoritosPorTipo(idUsuario) {
    const instrucaoSql = `
        SELECT r.tipo, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        WHERE f.fk_usuario = ${idUsuario}
        GROUP BY r.tipo;
    `;
    return database.executar(instrucaoSql);
}

function topReceitasFavoritas() {
    const instrucaoSql = `
        SELECT r.nome, COUNT(*) AS total
        FROM favoritos f
        JOIN receitas r ON f.fk_receitas = r.idReceita
        GROUP BY r.nome
        ORDER BY total DESC
        LIMIT 3;
    `;
    return database.executar(instrucaoSql);
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

function obterResumoUltimosResultados() {
    const instrucaoSql = `
        SELECT resultadoQuiz, COUNT(*) AS quantidade
        FROM quiz
        WHERE idQuiz IN (
            SELECT MAX(idQuiz)
            FROM quiz
            WHERE fk_usuario IS NOT NULL
            GROUP BY fk_usuario
        )
        GROUP BY resultadoQuiz;
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    contarFavoritosPorTipo,
    topReceitasFavoritas,
    favoritasUsuario,
    tipoPreferido,
    obterResumoUltimosResultados
};
