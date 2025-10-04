# Bandas de Música — Express + EJS

Aplicación MVC hecha con **Express** y **EJS** que muestra un **listado de bandas**, el **detalle** de cada banda y un **filtro por género**. Usa estáticos desde `public/` para las imágenes de las bandas.

## 🧰 Stack
- Node.js + Express
- EJS (vistas y parciales)
- Nodemon (dev)

## 🚀 Cómo correr
```
npm install
npm run dev   # nodemon (recomendado para desarrollo)
# o
npm start     # node ./bin/www
La app corre en http://localhost:3000/.
```
## 🌐 Rutas
Método	Ruta	Vista	Descripción
- GET	/	listadoBandas*	Portada (puede listar todo o linkear a géneros)
- GET	/bandas (opcional)	listadoBandas	Listado completo de bandas
- GET	/id/:id	detalleBanda	Detalle de una banda por id
- GET	/genero/:genero	porGenero	Listado de bandas filtradas por género


## 🗂️ Estructura
```
.
├── app.js
├── bin/www
├── db
│   └── bands.js
├── controllers
│   └── bandsController.js
├── routes
│   └── bands.js
├── views
│   ├── listadoBandas.ejs
│   ├── detalleBanda.ejs
│   ├── porGenero.ejs
│   ├── error.ejs
│   └── partials
│       ├── header.ejs
│       └── footer.ejs
└── public
    ├── images/
    

```
## 📦 Datos (DB)
El archivo db/bands.js exporta un objeto con list (o lista) de bandas:
```
{
  list: [
    {
      id: 1,
      nombre: "AC/DC",
      genero: "Rock",
      integrantes: 5,
      topCanciones: ["Thunderstruck", "Highway to hell", "Back in black"],
      cover: "images/acdc.jpg",
      video: "https://www.youtube.com/..."
    },
    // ...
  ]
}
```
## 🧭 Controlador (resumen)
index → render listadoBandas con todas las bandas.

showBand → busca por id, si no existe devuelve 404 con error.ejs.

showGender → filtra por genero (case-insensitive), render porGenero. Si no hay resultados, muestra mensaje ilustrativo.

## ✅ Checklist rápido
app.use('/', bandsRouter); montado antes del 404.

Ruta de género definida con barra inicial: router.get('/genero/:genero', ...).

En vistas, usar rutas absolutas para imágenes: 
```
<img src="/<%= b.cover %>">.
```
Links a género robustos: 
```
<a href="/genero/<%= encodeURIComponent(b.genero) %>">.
```

## 👤 Autor
Guillermo Mangiante.
