# Movies express backend

This project is backend api for movies db
https://gitlab.thedigitalacademy.co.za/fullstack_dev_dec_2021/mean-stack101/isaac_malebana.git

## Development server

Run `npm start` for a dev server on `http://localhost:8080/`.
This runs nodemon on the `server.js`.
The app will automatically reload if you change any of the source files .

## Run through

the app is a simple Rest CRUD API , connected to MongoDB .
perfoms basic CRUD for Movies

## Routes 

basepath = `/api/v1/movies/`

>**CREATE a Movie**

>POST : `/add_movie` 

```JSON
{
  "title":"string",
  "description":"string",
   "genre": "String",
    "rate": 7,
    "year": "String",
    "length":"String"
}
```
returns a single Movie that uou created 
**UPDATE a Movie**

>PUT : `/movie/update/:id`

```JSON
{
  "title":"string",
  "description":"string",
   "genre": "String",
    "rate": 7,
    "year": "String",
    "length":"String"
}
```
updates Movie from provided `id` [request.params.id==id]
**GET a Movie**

>GET : `/movie/:id`

returns a single Movie from provided `id` [request.params.id==id]

**GET a list of Movies**

>GET : `/`

returns list of all Movies

**DELETE a Movie**

>DELETE : `/movie/delete/:id`

deletes a single Movie from provided `id` [request.params.id==id]

**DELETE all Movies**

>DELETE : `/delete`