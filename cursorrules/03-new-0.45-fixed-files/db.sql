CREATE TABLE meals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    time VARCHAR(20) NOT NULL
);

INSERT INTO meals (name, time) VALUES
    ('Breakfast', '08:00 AM'),
    ('Lunch', '12:00 PM'),
    ('Dinner', '07:00 PM');