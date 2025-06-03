var database = require("../database/config");

// Adicionar um favorito
function favoritar(idUsuario, idReceita) {
    const instrucao = `
        insert into favoritos (fk_usuario, fk_receitas)
        values (${idUsuario}, ${idReceita});
    `;
    return database.executar(instrucao);
}

// Remover um favorito
function desfavoritar(idUsuario, idReceita) {
    const instrucao = `
        delete from favoritos
        where fk_usuario = ${idUsuario} and fk_receitas = ${idReceita};
    `;
    return database.executar(instrucao);
}

// Verificar se é favorito
function verificarFavorito(idUsuario, idReceita) {
    const instrucao = `
        select * from favoritos
        where fk_usuario = ${idUsuario} and fk_receitas = ${idReceita};
    `;
    return database.executar(instrucao);
}

function listarFavoritosPorUsuario(idUsuario) {
    const instrucao = `
        select fk_receitas from favoritos where fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function listarDetalhesFavoritos(idUsuario) {
    const instrucao = `
        select r.idReceita, r.nome, r.descricao, r.tipo
        from receitas r
        inner join favoritos f on r.idReceita = f.fk_receitas
        where f.fk_usuario = ${idUsuario};
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


