CREATE TABLE notes (
    title VARCHAR(1000),
    note VARCHAR(10000),
    id SERIAL PRIMARY KEY
)

select * from notes;

insert into notes (title, note)
values 
('title 1', 'note 1'),
('title 2', 'note 2'),
('title 3', 'note 3');

