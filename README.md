
# Groupomania

Social website for Groupomania.


## Tasks

    - Back-end with Node and MySQL
    - Front-end (React)


## Installation

Clone this repository

From the front-end (port 3006), open a terminal and write:
```bash
     npm install 
```

For Windows verify in "pacakge.json" that is written in "scripts", "start": "set PORT=3006 && react-scripts start"

For Linux and Mac in the same folder change the line by "start": "PORT=3006 react-scripts start"

```bash
     npm start
```

 --- 
 
From the back-end, you must have Mysql.

1. Open a terminal and write:
```bash
     npm install
```

2. You should have a file "config.json" in the folder "config", where it is written:
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
Change the username and password with your configuration.

3. Now create the database in the terminal with:
```bash
     npx sequelize-cli db:create
     npx sequelize-cli db:migrate
```

3.1 (optionnal) If you want some data you can import in your databasse the file Si vous souhaitez ajouter des valeurs à votre base de données, vous pouvez importer le fichier groupomania.sql (in database/groupomania.sql):
```bash
    use your habitual software 
    or with the SQL terminal replacing with your "user" and "password" write the commmand:
            mysql -u user -p password groupomania_db < groupomania.sql 
```
With this data you have acces at the account of toto@group.com (an user) and ocr@group.com (an admin) with the password GroupOcr01*


4. To finish write:
```bash
     npm start
```

Enjoy


## More projects
[Reservia](https://github.com/Haltay/JoachimRecio_2_12112020) (HTML and CSS) : [github-pages](https://haltay.github.io/JoachimRecio_2_12112020/reservia.html)

[Ohmyfood](https://github.com/Haltay/JoachimRecio_3_16122020) (SASS) : [github-pages](https://haltay.github.io/JoachimRecio_3_16122020/ohmyfood_accueil.html)

[La Chouette Agence](https://github.com/Haltay/P4_01.02.21) (SEO, Accessibility) : [github-pages](https://haltay.github.io/P4_01.02.21/)

[Orinoco](https://github.com/Haltay/JoachimRecio_5_11032021) an e-commerce website (front-end in Javascript) : [github-pages](https://haltay.github.io/JoachimRecio_5_11032021/)

[Piquante](https://github.com/Haltay/JoachimRecio_6_19052021) (back-end with Node Express) : follow instructions in "ReadMe"
