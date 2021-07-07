
# Groupomania - P7 - OpenClassrooms

Le reséau social de Groupomania.

Afin de doter la societé Groupomania d'un réseau social, le back-end (Node, MySql) et le front-end (React) ont été totalement créés.

## Installation

Voici commencer installer le réseau social sur votre ordinateur depuis un termninal de commande après avoir cloner ce repository.

Depuis le front-end (port 3006)
```bash
     npm install
     npm start
```
 --- 
 

Pour le back-end il faut que vous ayez Mysql.


1. Depuis le back-end
```bash
     npm install
```

2. Cela vous créera un fichier "config.json" dans le dossier "config" dans lequel il y aura :
```bash

    {
    "development": {

        "username": "adminGroupomania",
        "password": "Groupomania",
        "database": "groupomania_db",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    }
```
Il vous faudra modifier l'username, le password pour que cela corresponde à votre configuration, et si vous le souhaitez le nom de la database.

3. A présent, pour créer la base de données et les tables il vous suffit de taper :
```bash
     npx sequelize-cli db:create
     npx sequelize-cli db:migrate
```

3.1 (optionnel) Si vous souhaitez ajouter des valeurs à votre base de données, vous pouvez importer le fichier .sql groupomania (database/groupomania.sql).
Pour cela :
```bash
    utiliser votre logiciel habituel
    ou alors depuis l\'invité de commande de MySQL, en remplaçant par votre "user" et "password", la commande 
            mysql -u user -p password groupomania < groupomania.sql 
```
Une fois les donnéds ajoutées, vous aurez accés aux comptes de toto@group.com (un utilisateur) et de ocr@group.com (un admin) avec le mot de passe GroupOcr01*


4. A présent il reste à écrire et valider
```bash
     npm start
```

Enjoy

