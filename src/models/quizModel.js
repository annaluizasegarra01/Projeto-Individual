var database = require("../database/config");

function verResultado(resultadoQuiz, idUsuario) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (fk_usuario, resultadoQuiz) VALUES ('${idUsuario}', '${resultadoQuiz}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verResultado
};