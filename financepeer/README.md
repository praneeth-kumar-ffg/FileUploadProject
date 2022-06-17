# Json File Upload

## Overview

FinancePeer is a simple user authentication demonstration that uses
Django, and the Django Rest Framework on the backend, and React on the frontend.

## Dependencies

1. Python 3.5 or greater
2. Django 3.1
3. React 17.0

## Installation

download nodejs and npm for frontend.  Python for backend. Postgres for database.
## frontend
1.Head over to the client directory which is out frontend and run npm install(downloads all packages).
and "npm start" to trigger the localhost:3000.
## backend
2.Head over to the mysite directory which is our backend app.

3. Run the following commands in the same directory as `manage.py`:  
   `pipenv install` and `pipenv install --dev`. If pipenv not present install via pip.
   
4. After setting up your database with configurations found in settings.py inside mysite directory, Run
   i)python manage.py makemigrations
   ii)python manage.py migrate
   to migrate the data to postgres.
   and finally "python manage.py runserver" to start the backend application.

