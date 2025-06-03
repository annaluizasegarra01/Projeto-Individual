const database = require("../database/config");

function contarFavoritosPorTipo(idUsuario) {
    const instrucaoSql = `
        select r.tipo, COUNT(*) as total
        from favoritos as f
        inner join receitas as r on f.fk_receitas = r.idReceita
        where fk_usuario = ${idUsuario}
        group by r.tipo
        order by total desc;
    `;
    return database.executar(instrucaoSql);
}

function topReceitasFavoritas() {
    const instrucaoSql = `
        select r.nome, count(*) as total from favoritos as f 
        inner join receitas as r on f.fk_receitas = r.idReceita
        group by r.nome 
        order by total desc
        limit 3;
    `;
    return database.executar(instrucaoSql);
}

function favoritasUsuario(idUsuario) {
    var instrucaoSql = `
        select count(*) as total from favoritos
        where fk_usuario =  ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function tipoPreferido(idUsuario) {
    var instrucaoSql = `
        select tipo from (select r.tipo, COUNT(*) AS total from favoritos as f
        inner join receitas as r on f.fk_receitas = r.idReceita
        where fk_usuario = ${idUsuario}
        group by r.tipo
        ) as contagem
        order by total desc
        limit 1;
    `;
    return database.executar(instrucaoSql);
}


// Quiz Gráfico.
function obterResumoUltimosResultados() {
    const instrucaoSql = `
        select resultadoQuiz, COUNT(*) as quantidade from quiz
        where idQuiz in (select MAX(idQuiz) from quiz group by fk_usuario)
        group by resultadoQuiz;
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
