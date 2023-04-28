CREATE TABLE cliente (
  idCliente BIGSERIAL NOT NULL,
  cnpj varchar(45) NOT NULL,
  name varchar(45) NOT NULL,
  PRIMARY KEY (idCliente)
);

INSERT INTO cliente VALUES (1,'324321234','Microsft'),(2,'123123','Cisco');

CREATE TABLE equipamentos (
  idequipamentos BIGSERIAL NOT NULL,
  serialNumber varchar(45) NOT NULL,
  partNumber varchar(45) NOT NULL,
  description varchar(45) NOT NULL,
  name varchar(45) NOT NULL,
  status varchar(45) NOT NULL,
  quantidade varchar(45) NOT NULL,
  responsavel varchar(45) DEFAULT NULL,
  PRIMARY KEY (idequipamentos)
);

INSERT INTO equipamentos VALUES (1,'1231231 ','123123 ','teclado ','teclado ','Ocupado','12 ','Microsft'),(2,'1231212','123123','123','Mouse','Ocupado','1','Microsft');
