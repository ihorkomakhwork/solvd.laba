psql -f install.sql -U postgres
PGPASSWORD=postgres psql -d bookstore -f structure.sql -U postgres