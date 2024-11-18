-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database acordesdaalma;
use acordesdaalma;

-- drop database acordesdaalma;

create table usuario (
    idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null unique,
    senha varchar(45) not null,
    confirmar_senha varchar(45) not null
);

select * from usuario;

create table musica (
    idMusica int primary key auto_increment,
    titulo varchar(45) not null,
    artista varchar(45) not null
);

select * from musica;

create table emocao (
    idEmocao int primary key auto_increment,
    descricao varchar(200) not null unique
);

select * from emocao;

create table usuario_musica (
    fkUsuario int,
    fkMusica int,
    data_escolha date not null,
    primary key (fkUsuario, fkMusica),
    foreign key (fkUsuario) references usuario(idUsuario) on delete cascade,
    foreign key (fkMusica) references musica(idMusica) on delete cascade
);

select * from usuario_musica;

create table musica_emocao (
    fkMusica int,
    fkEmocao int,
    primary key (fkMusica, fkEmocao),
    foreign key (fkMusica) references musica(idMusica),
    foreign key (fkEmocao) references emocao(idEmocao)
);

select * from musica_emocao;
