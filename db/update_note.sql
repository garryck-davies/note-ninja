UPDATE notes
SET title = $1, note = $2
WHERE id = $3;

SELECT * from notes;