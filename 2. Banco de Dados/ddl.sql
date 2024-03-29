CREATE database NUTRICIONISTA;
use NUTRICIONISTA;

create table TB_USUARIO(
ID_USUARIO  INT PRIMARY KEY AUTO_INCREMENT,
NM_USUARIO		VARCHAR(100),
DS_EMAIL  		VARCHAR(100),
DS_SENHA 		VARCHAR(100)
);

create table TB_AGENDAMENTO(
	ID_AGENDAMENTO INT primary key auto_increment,
    ID_USUARIO		INT,
	NM_PACIENTE VARCHAR(200),
	DS_TELEFONE VARCHAR(100),
    DT_NASCIMENTO DATETIME,
    DS_GENERO VARCHAR(100),
    DS_CPF VARCHAR(14) unique,
    DS_OBSERVACAO VARCHAR(200),
    DT_CONSULTA DATETIME unique,
    DS_PAGAMENTO VARCHAR(100),
    VL_VALORTOTAL DOUBLE,
    BT_COMPARECEU BOOL,
	FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);

 

 
 
 
 