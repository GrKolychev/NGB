CREATE SEQUENCE IF NOT EXISTS CATGENOME.S_BLAST_DATABASE START WITH 1 INCREMENT BY 1;

CREATE TABLE IF NOT EXISTS CATGENOME.BLAST_DATABASE (
    DATABASE_ID BIGINT NOT NULL PRIMARY KEY,
    NAME        VARCHAR(500) NOT NULL,
    PATH        VARCHAR NOT NULL,
    TYPE        BIGINT NOT NULL
);