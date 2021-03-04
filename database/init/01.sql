SELECT 'CREATE DATABASE beemassistant'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'beemassistant')\gexec
GRANT ALL PRIVILEGES ON DATABASE beemassistant TO postgres;
