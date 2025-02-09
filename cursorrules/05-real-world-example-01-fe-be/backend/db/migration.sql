create table users (
    id uuid primary key default uuid_generate_v4(),
    name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null
);
