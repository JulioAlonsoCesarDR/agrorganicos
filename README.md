# Agrorganicos

### Dependencies

List of dependencies to run and deploy:

* NodeJS
* Mysql Server running on localhost
* Bower
* GruntJS

### Installation

Set Mysql root user pass to 'root':

```sh
mysqladmin -u root password NEWPASSWORD
```

Create Mysql database:

```sh
CREATE DATABASE agrorganicos_dev;
```
Install Dependencies

```sh
npm install
bower install
```

Run Project locally

```sh
grunt php
```

Deploy to server

```sh
grunt ftp
```


