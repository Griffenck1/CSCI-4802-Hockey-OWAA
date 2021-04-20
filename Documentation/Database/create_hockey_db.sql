DROP TABLE IF EXISTS WAA_data.Team;
DROP TABLE IF EXISTS WAA_data.Player;

DROP SCHEMA IF EXISTS WAA_data;


--Build Schema and table
CREATE SCHEMA WAA_data;

CREATE TABLE WAA_data.Team (
    Tm VARCHAR NOT NULL UNIQUE PRIMARY KEY,
    SV FLOAT
);

CREATE TABLE WAA_data.Player (
    ID INT NOT NULL UNIQUE PRIMARY KEY,
    Name VARCHAR,
    Age INT,
    Tm VARCHAR,
    Pos VARCHAR,
    GP INT,
    GC INT,
    xGA FLOAT,
    CFrel FLOAT,
    CONSTRAINT player_has_team
        FOREIGN KEY(Tm)
        REFERENCES WAA_data.Team(Tm)
);