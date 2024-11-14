# About

TNP WEBSITE - [Website Link](https://www.tnpgndec.com/)

# Installation

### Quick install

```
git clone https://github.com/TNP-GNDEC/TNP-WEBSITE.git
```

Once the Repositary is cloned jump into the cloned directory using :

```
cd TNP-WEBSITE
```

**Create a file named .env and copy the contents of .env.example into .env file.Now fill the Database name and password for phpmyadmin**

Run the following commands inorder to install all the dependencies :

```
composer install
npm install
```

Generate the php application key :

```
php artisan key:generate
php artisan migrate
```

For JWT Token:

```
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret
```

Now you are Ready to launch the web application :

```
php artisan serve
npm run watch
```


