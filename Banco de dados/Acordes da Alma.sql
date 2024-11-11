create database acordesdaalma;
use acordesdaalma;

create table usuario (
    idusuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null unique,
    senha varchar(45) not null,
    confirmar_senha varchar(45) not null,
    data_cadastro date not null
);

create table musica (
    idmusica int primary key auto_increment,
    titulo varchar(45) not null,
    artista varchar(45) not null,
    album varchar(45),
    genero varchar(50),
    duracao time
);

create table emocao (
    idemocao int primary key auto_increment,
    descricao varchar(50) not null unique
);

create table usuario_musica (
    idusuario int,
    idmusica int,
    data_escolha date not null,
    primary key (id_usuario, id_musica),
    foreign key (id_usuario) references usuario(id_usuario) on delete cascade,
    foreign key (id_musica) references musica(id_musica) on delete cascade
);


create table musica_emocao (
    id_musica int,
    id_emocao int,
    primary key (id_musica, id_emocao),
    foreign key (id_musica) references musica(id_musica) on delete cascade,
    foreign key (id_emocao) references emocao(id_emocao) on delete cascade
);
