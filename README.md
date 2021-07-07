
# Groupomania - P7 - OpenClassrooms

Le reséau social de Groupomania.

Afin de doter la societé Groupomania d'un réseau social, le back-end (Node, MySql) et le front-end (React) ont été totalement créés.

## Installation

Voici commencer installer le réseau social sur votre ordinateur depuis un termninal de commande après avoir cloner ce repository.

Depuis le front-end (port 3006)
```bash
    - npm install
    - npm start
```
 --- 
 

Pour le back-end il faut que vous ayez Mysql.

```bash
1. Depuis le back-end
    - npm install
```
```bash
2. Cela vous créera un fichier "config.json" dans le dossier "config" dans lequel il y aura :
```
    {
    "development": {

        "username": "adminGroupomania",

        "password": "Groupomania",

        "database": "groupomania_db",

        "host": "127.0.0.1",

        "dialect": "mysql"

    }
    }

Au besoin modifier l'username, password et database pour que cela corresponde à votre configuration.

```bash
3. A présent, pour créer la base de données et les tables il vous suffit de taper :
    - npx sequelize-cli db:create
    - npx sequelize-cli db:migrate

 TODO METTRE DONNEES DATABASE
3.1 (optionnel) Si vous souhaitez ajouter des valeurs à votre base de données, vous pouvez ajouter :
    - npx sequelize-cli db:seed:all
```

```bash
4. A présent il reste à écrire et valider
    - npm start
```


