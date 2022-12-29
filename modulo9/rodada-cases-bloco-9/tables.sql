-- Active: 1668047531022@@35.226.146.116@3306@Hopper-4314144-pedro-junior
CREATE TABLE IF NOT EXISTS Dog_Walking (
    id VARCHAR(64) PRIMARY KEY,
    status ENUM("STAND_BY", "WALKING", "DONE") DEFAULT "STAND_BY",
    data VARCHAR(64) NOT NULL,
    preco INT NOT NULL,
    duracao INT NOT NULL,
    latitude DECIMAL(11, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    pets INT NOT NULL,
    inicio VARCHAR(64) NOT NULL,
    fim VARCHAR(64) NOT NULL
)