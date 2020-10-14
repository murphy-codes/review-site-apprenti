CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
name VARCHAR,
cost INTEGER NOT NULL,
fun INTEGER NOT NULL,
safety INTEGER NOT NULL,
comment TEXT,
city_id INTEGER REFERENCES cities(id)
);