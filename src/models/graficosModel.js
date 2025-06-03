const database = require("../database/config");

//KPI 1 e 2 (qtd favoritos do usuário)
function favoritasUsuario(idUsuario) {
    var instrucaoSql = `
        select count(*) as total from favoritos
        where fk_usuario =  ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

//KPI 3 (tipo preferido com base nas favoritadas)
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

//Gráfico 1 - comparação de atividade entre usuários.
function atividadeUsuario(idUsuario) {
    const instrucao = `
        select (select count(*) from favoritos where fk_usuario = ${idUsuario}) as mediaUser,
        (select avg(qtd) from (select count(*) as qtd from favoritos where fk_usuario != ${idUsuario}
        group by fk_usuario)as subDeMedia) as mediaOutros;
    `;
    return database.executar(instrucao);
}

// Gráfico 2 (top 3 receitas mais favoritadas)
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

//Gráfico 3 (Pizza - favoritos por tipo)
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

//Gráfico 4 - Quiz.
function obterResumoUltimosResultados() {
    const instrucaoSql = `
        select resultadoQuiz, COUNT(*) as quantidade from quiz
        where idQuiz in (select MAX(idQuiz) from quiz group by fk_usuario)
        group by resultadoQuiz;
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    favoritasUsuario,
    tipoPreferido,
    atividadeUsuario,
    topReceitasFavoritas,
    contarFavoritosPorTipo,
    obterResumoUltimosResultados
};
