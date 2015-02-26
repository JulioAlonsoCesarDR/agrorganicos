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

### Developing Flow

---

#### 1.- Update branch from origin master (remote)

```sh
git checkout jacBranch
git pull --rebase origin master
```

###### *Resolve conflicts if needed

#### 2.- Make changes in the code

#### 3.- Once resolved and tested code changes commit them

```sh
git commit -a
// Put comment and save commit message (Nano editor: Ctrl + O, Enter, Ctrl + X )
```

#### 4.-Push to origin (remote branch)

```sh
git push origin jacBranch
```

#### 5.- Deploy to server (zoraba.mx)

```sh
grunt deploy
```

