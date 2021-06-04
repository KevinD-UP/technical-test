# KPI Intelligence - Full-stack Developer Test 🛠 

Before anything please create a database in PostgreSQL using 
```CREATE DATABASE technicaltest```

## REST API

### Preparation
Please fill in `settings.py` the information to connect to your database, do the same for the file `insert.py`.
Then use :
```
python manage.py makemigration
python manage.py migrate
```
in order to create the table.
Then use : 
```
python insert.py 
```
in order to fill the table.

### Execution 
```
python manage.py runserver 8080
```

## Angular12Crud

```
npm install
ng serve --port 8081
```

