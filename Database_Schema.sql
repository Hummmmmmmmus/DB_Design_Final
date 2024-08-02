-- DROP SCHEMA IF EXISTS "Marketplace" CASCADE;
-- DROP SCHEMA IF EXISTS "Users" CASCADE;

CREATE SCHEMA IF NOT EXISTS "Marketplace";
CREATE SCHEMA IF NOT EXISTS "Users";

-- ::: Users Tables

-- DROP TABLE IF EXISTS "Users"."Customers";

CREATE TABLE IF NOT EXISTS "Users"."Customers"
(
    Cust_ID bigserial NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
	Address text COLLATE pg_catalog."default" NOT NULL,
    balance decimal(12,2) NOT NULL,
    PRIMARY KEY (Cust_ID)
);

-- DROP TABLE IF EXISTS "Users"."CCInfo";

CREATE TABLE IF NOT EXISTS "Users"."CCInfo"
(
    Cust_ID bigserial NOT NULL REFERENCES "Users"."Customers"(Cust_ID),
    BillingAddress text COLLATE pg_catalog."default" NOT NULL,
    cc_num bigint NOT NULL,
    sec_num integer NOT NULL,
	PRIMARY KEY (cc_num, sec_num)
);

-- DROP TABLE IF EXISTS "Users"."Employees";

CREATE TABLE IF NOT EXISTS "Users"."Employees"
(
    Empl_ID bigserial NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    Address text COLLATE pg_catalog."default" NOT NULL,
    salary integer NOT NULL,
    title text NOT NULL,
    PRIMARY KEY (Empl_ID)
);


-- ::: Marketplace Tables

-- DROP TABLE IF EXISTS "Marketplace"."Products";

CREATE TABLE IF NOT EXISTS "Marketplace"."Products"
(
    Prod_ID bigserial NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
	type text COLLATE pg_catalog."default" NOT NULL,
	brand text COLLATE pg_catalog."default" NOT NULL,
	Description text COLLATE pg_catalog."default" NOT NULL,
	size decimal(12,2) NOT NULL,
	price decimal(12,2) NOT NULL,
    PRIMARY KEY (Prod_ID)
);

-- DROP TABLE IF EXISTS "Marketplace"."Warehouses";

CREATE TABLE IF NOT EXISTS "Marketplace"."Warehouses"
(
    Ware_ID bigserial NOT NULL,
	Address text COLLATE pg_catalog."default" NOT NULL,
	capacity decimal(12,2) NOT NULL,
    PRIMARY KEY (Ware_ID)
);

-- DROP TABLE IF EXISTS "Marketplace"."Stock";

CREATE TABLE IF NOT EXISTS "Marketplace"."Stock"
(
    Prod_ID bigserial NOT NULL REFERENCES "Marketplace"."Products"(Prod_ID),
	Ware_ID bigserial NOT NULL REFERENCES "Marketplace"."Warehouses"(Ware_ID),
	count integer NOT NULL,
    PRIMARY KEY (Prod_ID, Ware_ID)
);

-- DROP TABLE IF EXISTS "Marketplace"."Orders";

CREATE TABLE IF NOT EXISTS "Marketplace"."Orders"
(
    Ordr_ID bigserial NOT NULL,
    Prod_ID bigserial NOT NULL REFERENCES "Marketplace"."Products"(Prod_ID),
	count integer,
    PRIMARY KEY (Ordr_ID, Prod_ID)
);

-- DROP TABLE IF EXISTS "Marketplace"."Suppliers";

CREATE TABLE IF NOT EXISTS "Marketplace"."SupplierIDs"
(
    Supp_ID bigserial NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    Address text COLLATE pg_catalog."default" NOT NULL,
    PRIMARY KEY (Supp_ID)
);

CREATE TABLE IF NOT EXISTS "Marketplace"."Supplies"
(
    Supp_ID bigserial NOT NULL,
    Prod_ID bigserial NOT NULL REFERENCES "Marketplace"."Products"(Prod_ID),
    cost decimal(12,2) NOT NULL,
    PRIMARY KEY (Supp_ID)
);





