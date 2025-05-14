-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database bycooked;

use bycooked;

create table usuario (
id int not null auto_increment,
nome varchar(90),
email varchar(50) unique,
senha varchar(40),
preferencia varchar(30),
primary key (id)
);

create table receitas (
id int not null auto_increment,
nome varchar(40),
descricao varchar(120),
tipo varchar(30),
primary key (id),
constraint ck_tipo_receita check (tipo in("salgado", "doce", "vegetariano"))
);

create table favoritos (
fk_usuario int,
fk_receitas int,
constraint fk_usuario_favoritou foreign key (fk_usuario) references usuario(id),
constraint fk_receita_favorita foreign key (fk_receitas) references receitas(id),
primary key (fk_usuario, fk_receitas)
);