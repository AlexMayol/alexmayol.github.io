const projectsinfo = [
    {
        "name": "Framework Remedy",
        "year": "2018",
        "excerpt": "Un framework CSS basado en CSS Variables y enfocado en utilidades para un rápido desarollo de interfaces.",
        "description": "En un ecosistema dominado por Boostrap y sus variantes, he querido aportar mi granito de arena desarrollando un framework que supliera mis necesidades básicas de maquetación, a la vez que me proporcionara una manera de dar estilo a cada proyecto de manera rápida, y sin ocupar muchos Kb.",
        "image": "img/remedy.png",
        "stack": "CSS, Parcel bundler",
        "link": "https://github.com/AlexMayol/remedy",
        "type": "app"
    },
    {
        "name": "Blog Integratur",
        "year": "2018",
        "excerpt": "Blog para la empresa Integratur, usando la API REST de WordPress y Vue para crear una SPA",
        "description": "Con la API REST de WordPress se puede tener lo mejor de ese CMS sin los peor: los tediosos tiempo de carga. Esta Single Page Application suple esos problemas y sirve como demostración de blog accesible.",
        "image": "img/blog.png",
        "stack": "Vue, WP API, Vue-router, Bootstrap-Vue",
        "link": "https://blog.integratur.com",
        "type": "app"
    },
    {
        "name": "Hotel Integratur",
        "year": "2016-2017",
        "excerpt": "Un diseño atractivo no implica un sitio web poco accesible. Esta demo se desarrolló para mostrar esa premisa.",
        "description": "Para demostrar que un diseño bonito no está reñido con la accesibilidad web, desarrollé este portal de demostración totalmente responsive y sin el uso de ningún framework CSS. Mi primer proyecto en el que aprendí mucho sobre maquetación y optimización del tiempo de carga.",
        "image": "img/hotel.png",
        "stack": "HTML, CSS, JS, W3.CSS",
        "link": "https://integratur.com/hotel/",
        "type": "web"
    },
    {
        "name": "Midnight Recipes",
        "year": "2018",
        "excerpt": "Plataforma web que utiliza la API de Blogger para listar  y categorizar posts de recetas de cocina.",
        "description": "Una alternativa gratuita a la API REST de WordPress es la de Blogger. De manera muy similar, permite listar y mostrar las entradas de un blog. Este blog colaborativo también tiene un selector de temas que demuestra la potencia de las variables CSS y lo fácil que es implementar una característica que aporta mucho al valor de un sitio web.",
        "image": "img/recipes.png",
        "stack": "HTML, CSS, JS, Vue, Blogger API",
        "link": "https://play.google.com/store/apps/details?id=com.tomateteam.healthmato",
        "type":"web"    
    },
    {
        "name": "AccesTitan",
        "year": "2016",
        "excerpt": "Proyecto de fin de Grado. Portal que analiza la accesibilidad web de otra página web y detalla los resultados del análisis.",
        "description": "Para mi Trabajo de Fin de Grado en Ingeniería Multimedia desarrollé un portal capaz de evaluar la accesibilidad web de otras páginas web. Para ello, listé todas las pautas de las WCAG 2.0 que podía testear de manera automática y utilicé PhantomJS para ejecutar este código en un servidor. Como resultado, el usuario obtiene una nota orientativa, una lista de errores y enlaces a la documentación oficial para poder arreglarlos.",
        "image": "img/accestitan.png",
        "stack": "HTML, CSS, JS, PHP, PhantomJS, Heroku",
        "link": "https://accestitan.herokuapp.com/",
        "type":"web"    
    },
    {
        "name": "Casaverde Integratur",
        "year": "2018",
        "excerpt": "Clon de la página de portada del Centro Casaverde, para demostrar las distintas mejoras que se pueden aplicar en materia de accesibilidad.",
        "description": "Clon de la landing page de un cliente potencial donde reproduzco todos los elementos de una página genérica hecha en WordPress, consiguiendo un mejor tiempo de carga (puntuación en PageSpeed Insights) y mejor accesibilidad (puntiación en Tenon.io, Achecker, etc.).",
        "image": "img/casaverde.png",
        "stack": "HTML, CSS, Vue, Vue-Bootstrap",
        "link": "https://integratur.com/casaverde/",
        "type":"web"    
    },
    {
        "name": "Soccer Lineup",
        "year": "2018",
        "excerpt": "Crea rápidamente alineaciones de fútbol y expórtalas como imagen.",
        "description": "Multiples webs pequeñas que se dedican a seguir las diferentes ligas de fútbol e informar de sus resultados utilizan imágenes que deben crear ellos en programas como Photoshop, o directamente cogen contnido de sitios web más importantes. Con esta herramienta pueden crear alineaciones y configurarlas a su gusto desde un panel muy intuitivo.",
        "image": "img/soccer.png",
        "stack": "name",
        "link": "name",
        "type":"app"    
    },
    {
        "name": "CSS Grid Playground",
        "year": "2017-2018",
        "excerpt": "Una característica de CSS tan importante merece un buen 'patio de juegos' donde experimentar con ella.",
        "description": "Diversos ejemplos donde exploro la potencia de esta nueva implementación a CSS. Actualizo estos ejemplos periódicamente con todos los ejemplos de prueba que realizo.",
        "image": "img/cssgrid.png",
        "stack": "name",
        "link": "https://alexmayol.github.io/css-grid-playground/src/",
        "type":"web"    
    },
    {
        "name": "Theme Swapper",
        "year": "2018",
        "excerpt": "Simplifica la tarea de cambiar el tema de tu web con este componente de Vue",
        "description": "Demostración de un componente de Vue que ayuda a cambiar el tema de una página entera, en este caso con la ayuda de mi framework Remedy.",
        "image": "img/theme.png",
        "stack": "name",
        "link": "name",
        "type":"app"    
    },
    {
        "name": "Mythia",
        "year": "2016",
        "excerpt": "Proyecto final para el itinerario de Videojuegos en el grado en Ingerniería Multimedia",
        "description": "Durante el último año de Ingeniería Multimedia realizamos un proyecto que englobaba las diferentes asignaturas de ese año. El proyecto consistía en un juego que creamos desde cero y en el que aprendimos todo lo necesario para desarrollar videojuegos. Fuimos el proyecto con mayor puntuación de todos, e incluso aparecimos en el periódico local.",
        "image": "img/mythia.png",
        "stack": "OpenGL, C++, Irllciht, Unity, Box2D, Raknet",
        "link": "",
        "type":"game"    
    },
    {
        "name": "Healthmato",
        "year": "2013",
        "excerpt": "Videojuego para Android desarrollado como proyecto para la asignatura Sistemas Multimedia",
        "description": "name",
        "image": "img/healthmato.png",
        "stack": "Android, Java, Libgdx, Eclipse",
        "link": "https://play.google.com/store/apps/details?id=com.tomateteam.healthmato",
        "type":"game"    
    },
    {
        "name": "Walpurgis Rush",
        "year": "2016",
        "excerpt": "Videojuego para Android realizado durante la Global Game Jam 2016",
        "description": "name",
        "image": "img/walpurgis.png",
        "stack": "Unity, C#, 3DS Max",
        "link": "https://play.google.com/store/apps/details?id=com.Pixys.WalpurgisRush",
        "type":"game"    
    },
    {
        "name": "Cifrador",
        "year": "2015",
        "excerpt": "Aplicación para Android desarrollada como proyecto para la asignatura Compresión y seguridad.",
        "description": "name",
        "image": "img/cifrador.png",
        "stack": "Android, Java, Eclipse",
        "link": "https://play.google.com/store/apps/details?id=cs.cifrador",
        "type":"app"    
    },
    {
        "name": "Aztecalypse",
        "year": "2014",
        "excerpt": "Videojuego para escritorio desarrollado como proyecto para la asignatura Fundamentos de los videojuegos",
        "description": "name",
        "image": "img/aztecalypse.png",
        "stack": "Android, Java, Libgdx, Eclipse",
        "link": "https://github.com/miquelgalianallorca/Aztecalypse",
        "type":"game"    
    },

    {
        "name": "Adaptamos Group",
        "year": "2018",
        "excerpt": "Mejora del portal en cuanto a tiempo de carga y accesibilidad.",
        "description": "name",
        "image": "img/adaptamos.png",
        "stack": "WordPress, CSS",
        "link": "http://www.adaptamosgroup.com/",
        "type":"web"    
    },
    {
        "name": "Stardust Images",
        "year": "2014",
        "excerpt": "Práctica para la asigantura Programación Hipermedia I donde creamos un portal con registro y posibilidad de subir imágenes.",
        "description": "name",
        "image": "img/hotel.png",
        "stack": "HTML, CSS, JS, PHP",
        "link": "https://github.com/AlexMayol/Stardust-Images",
        "type":"web"    
    },
 


]