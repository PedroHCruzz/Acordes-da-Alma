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

 INSERT INTO usuario (nome, email, senha, confirmar_senha) VALUES
 ('zé', 'ze@gmail.com', '1234', '1234');

select * from usuario;

create table musica (
    idMusica int primary key auto_increment,
    titulo varchar(45) not null,
    artista varchar(45) not null
);

select * from musica;

SELECT nome, email, senha FROM usuario WHERE email = 'ze@gmail.com' AND senha = '1234';

create table emocao (
    idEmocao int primary key auto_increment,
    descricao varchar(500) not null unique
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

create table votos (
    idVotos int primary key,          
    fkusuario int not null,   
    foreign key (fkusuario) references usuario(idUsuario),
    quantidade int,
    opcao int not null,        
    data_voto TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table comentarios (
idComentario int primary key,
fkusuario int,
foreign key (fkusuario) references usuario(idUsuario),
fkemocao int,
foreign key (fkemocao) references emocao(idEmocao),
conteudo varchar(500)
);


select * from musica_emocao;
