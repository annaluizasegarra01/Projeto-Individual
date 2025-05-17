var database = require("../database/config");

// Adicionar um favorito
function favoritar(idUsuario, idReceita) {
    const instrucao = `
        INSERT INTO favoritos (fk_usuario, fk_receitas)
        VALUES (${idUsuario}, ${idReceita});
    `;
    return database.executar(instrucao);
}

// Remover um favorito
function desfavoritar(idUsuario, idReceita) {
    const instrucao = `
        DELETE FROM favoritos
        WHERE fk_usuario = ${idUsuario} AND fk_receitas = ${idReceita};
    `;
    return database.executar(instrucao);
}

// Verificar se é favorito
function verificarFavorito(idUsuario, idReceita) {
    const instrucao = `
        SELECT * FROM favoritos
        WHERE fk_usuario = ${idUsuario} AND fk_receitas = ${idReceita};
    `;
    return database.executar(instrucao);
}

function listarFavoritosPorUsuario(idUsuario) {
    const instrucao = `
        SELECT fk_receitas FROM favoritos WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function listarDetalhesFavoritos(idUsuario) {
    const instrucao = `
        SELECT r.idReceita, r.nome, r.descricao, r.tipo
        FROM receitas r
        INNER JOIN favoritos f ON r.idReceita = f.fk_receitas
        WHERE f.fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}


module.exports = {
    favoritar,
    desfavoritar,
    verificarFavorito,
    listarFavoritosPorUsuario,
    listarDetalhesFavoritos
};


