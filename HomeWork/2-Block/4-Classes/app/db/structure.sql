CREATE TABLE "book" (
    "id" BIGINT GENERATED ALWAYS AS IDENTITY,
    "title" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "isbn" VARCHAR(255) NOT NULL,
    "price" INT NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "customer" (
    "id" BIGINT GENERATED ALWAYS AS IDENTITY, 
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "cart" (
    "id" BIGINT GENERATED ALWAYS AS IDENTITY,
    "customerId" int NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "bookList" (
    "id" BIGINT GENERATED ALWAYS AS IDENTITY,
    "bookId" int NOT NULL,
    "cartId" int NOT NULL,
    FOREIGN KEY ("bookId") REFERENCES book("id"),
    FOREIGN KEY ("cartId") REFERENCES cart("id"),
    PRIMARY KEY ("id")
);

CREATE TABLE "order" (
    "id" BIGINT GENERATED ALWAYS AS IDENTITY,
    "cartId" int NOT NULL,
    "customerId" int NOT NULL,
    "total" int NOT NULL,
    PRIMARY KEY ("id")
);
