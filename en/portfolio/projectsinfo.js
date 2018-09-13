const projectsinfo = [
    {
        "name": "Remedy CSS Framework",
        "year": "2018",
        "excerpt": "A CSS framework based on CSS variables and focused on utilities to quickly develop the UI.",
        "description": "In an environment ruled by Bootstraps and other frameworks, I wanted to contribute with my a project that helps mi needs while I layout mi apps, while being able to style every page differently. This portfolio is based on Remedy.",
        "image": "../../portfolio/img/remedy.png",
        "stack": "CSS, Parcel bundler",
        "src":"https://github.com/AlexMayol/remedy",
        "link": null,
        "type": "app"
    },
    {
        "name": "Integratur Blog",
        "year": "2018",
        "excerpt": "Blog for Integratur, made using the WordPress REST API and Vue to quickly build a modern SPA.",
        "description": "With WordPress REST API you can have the best of a CMS without the bad part: long loadtime because of unnecessary files. This Single Page Application solves those problems and is a good demo for an accessible blog project.",
        "image": "../../portfolio/img/blog.png",
        "stack": "Vue, WP API, Vue-router, Bootstrap-Vue",
        "src":"https://github.com/AlexMayol/Integratur-blog",
        "link": "https://blog.integratur.com",
        "type": "app"
    },
    {
        "name": "Integratur Hotel",
        "year": "2016-2017",
        "excerpt": "An attractive design doesn't imply a website has to be unaccessible. This demo shows that premise.",
        "description": "In order to demonstrate that a good designed website is able to be accessible, I built this demo, fully responsive without any framework. My first project, where I learnt a lot about layout and page speed optimizations.",
        "image": "../../portfolio/img/hotel.png",
        "stack": "HTML, CSS, JS, W3.CSS",
        "src":"https://github.com/AlexMayol/midnight-sun-hotel/tree/master/web",
        "link": "https://integratur.com/hotel/",
        "type": "web"
    },
    {
        "name": "Midnight Recipes",
        "year": "2018",
        "excerpt": "Website that uses the Blogger API to list and categorize the recipes I write.",
        "description": "A free alternative to the WordPress REST API is Blogger's. They are very similar, and you can list and show your blog entries. All the content is curated in Blogger Dashboard, so it's very easy to modify the website's design without risking the content. This blog has also implemented a theme selector to demonstrate the power of CSS Variables and how easy it is to add such a valuable feature to a website.",
        "image": "../../portfolio/img/recipes.png",
        "stack": "HTML, CSS, JS, Vue, Blogger API",
        "src":"https://github.com/AlexMayol/midn1ght-recipes",
        "link": "https://alexmayol.github.io/midn1ght-recipes/",
        "type":"web"    
    },
    {
        "name": "AccesTitan",
        "year": "2016",
        "excerpt": "My Degree Final Proyect is a website that analizes web accessibility from a desired URL and gives a detailed result.",
        "description": "For my Degree Final Project on Multimedia Engineering I developed a website that can automatically evaluate if another website is accessible. In order to do so, I listed all WCAG 2.0 guidelines that could be implemented with JavaScript and I used PhantomJS to execute this code on a server. As a result, the user obtains an approximate mark, a list of errors and links to the official documentation with information to solve them.",
        "image": "../../portfolio/img/accestitan.png",
        "stack": "HTML, CSS, JS, PHP, PhantomJS, Heroku",
        "src":"https://github.com/AlexMayol/AccesTitan",
        "link": "https://accestitan.herokuapp.com/",
        "type":"web"    
    },
    {
        "name": "Casaverde Integratur",
        "year": "2018",
        "excerpt": "Clone of Centro Casaverde's landing page made to show the accessibility improvements that can be performed.",
        "description": "Clone of Centro Casaverde's landing page where I mirror all the elements of a generic landing page made with WordPress, obtaining a better load time (and score in  PageSpeed Insights) and a better accessibility mark (with Tenon.io, AChecek, etc.) than the original one.",
        "image": "../../portfolio/img/casaverde.png",
        "stack": "HTML, CSS, Vue, Vue-Bootstrap",
        "src": null,
        "link": "https://integratur.com/casaverde/",
        "type":"web"    
    },
    {
        "name": "Soccer Lineup",
        "year": "2018",
        "excerpt": "Quickly create soccer lineups and save them as images.",
        "description": "Small websites that cover several soccer leagues and post about the results use images that they have to manually create with Photoshop or even take them from bigger websites. With this tool, they can, within a simple dashboard, select the different leagues and teams from Europe, configure the lineup with the desired players and positions and save the result as an image.",
        "image": "../../portfolio/img/soccer.png",
        "stack": "HTML, CSS, VueJS, JSON, HTML2Canvas",
        "src":"https://github.com/AlexMayol/soccer-lineup-generator",
        "link": "https://alexmayol.github.io/soccer-lineup-generator/src/",
        "type":"app"    
    },
    {
        "name": "CSS Grid Playground",
        "year": "2017-2018",
        "excerpt": "This useful CSS feature deserves a 'playground' to experiment with.",
        "description": "Several examples where I test the power of this new feature of CSS. I update it regularly with all my tests and demos.",
        "image": "../../portfolio/img/cssgrid.png",
        "stack": "CSS, CSS Grid, VueJS",
        "src":"https://github.com/AlexMayol/css-grid-playground",
        "link": "https://alexmayol.github.io/css-grid-playground/src/",
        "type":"web"    
    },
    {
        "name": "Theme Swapper",
        "year": "2018",
        "excerpt": "Simplify the task of swapping themes in your app with this Vue component.",
        "description": "Demo of a VueJS component that helps to change themes on the entire site. For this demo, I use my framework Remedy to define the colors.",
        "image": "../../portfolio/img/theme.png",
        "stack": "name",
        "src":"https://github.com/AlexMayol/color-theme-swap",
        "link": "https://alexmayol.github.io/color-theme-swap/index.html",
        "type":"app"    
    },
    {
        "name": "Mythia",
        "year": "2016",
        "excerpt": "Final project in the Videogame Development Path at our degree.",
        "description": "During our last year of Multimedia Engineering we developed a project that bringed all the subjects together. This project was a game we made from scratch where we learnt everything we need in order to develop a videogame, from the code to the art, through C++, OpenGL, 3DS Max, Photoshop and many more tool and skills. We got the best score that year and we even got an article on our local newspapper.",
        "image": "../../portfolio/img/mythia.png",
        "stack": "OpenGL, C++, Irllciht, Unity, Box2D, Raknet, Photoshop, After Effects",
        "src":null,
        "link": "https://i.imgur.com/ZY9OKL1.jpg",
        "type":"game"    
    },
    {
        "name": "Healthmato",
        "year": "2013",
        "excerpt": "Videojuego para Android desarrollado como proyecto para la asignatura Sistemas Multimedia",
        "description": "Creamos este videojuego para Android desde 0 para promover el consumo de alimentos saludables entre los más pequeños y para ello optamos por un diseño colorido y una mecánica de juego simple pero adictiva.",
        "image": "../../portfolio/img/healthmato.png",
        "stack": "Android, Java, Libgdx, Eclipse",
        "src": null,
        "link": "https://play.google.com/store/apps/details?id=com.tomateteam.healthmato",
        "type":"game"    
    },
    {
        "name": "Walpurgis Rush",
        "year": "2016",
        "excerpt": "Android videogame made during the Global Game Jam 2016.",
        "description": "We developed this game in the GGJ 2016. It's an 'endless runner' where we wanted to have 2D levels and 3D levels. It was made in 48 hours and we are very proud with the result!",
        "image": "../../portfolio/img/walpurgis.png",
        "stack": "Unity, C#, 3DS Max",
        "src": null,
        "link": "https://play.google.com/store/apps/details?id=com.Pixys.WalpurgisRush",
        "type":"game"    
    },
    {
        "name": "Cifrador",
        "year": "2015",
        "excerpt": "Android app developed as a project for my degree.",
        "description": "Using various encryption methods used along History, we developed this app so everybody can encrypt their messages, which can only be decrypt with the generated public key.",
        "image": "../../portfolio/img/cifrador.png",
        "stack": "Android, Java, Eclipse",
        "src": null,
        "link": "https://play.google.com/store/apps/details?id=cs.cifrador",
        "type":"app"    
    },
    {
        "name": "Aztecalypse",
        "year": "2014",
        "excerpt": "Desktop videogame developed as a project for my degree.",
        "description": "Videogame developed from scratch with C++. It's a tower defense game, using algorithms like A* and different special skills to achieve a fun gameplay. We also included music, sound effects and three different maps.",
        "image": "../../portfolio/img/aztecalypse.png",
        "stack": "Android, Java, Libgdx, Eclipse",
        "src":"https://github.com/miquelgalianallorca/Aztecalypse",
        "link": null,
        "type":"game"    
    },

    {
        "name": "Adaptamos Group",
        "year": "2018",
        "excerpt": "WordPress site where I improved the load time and accessibility.",
        "description": "Website for a client that wanted to change the design and branding colors and improve the SEO score. I used several techniques and WP plugins to accomplish this and the result was a success.",
        "image": "../../portfolio/img/adaptamos.png",
        "stack": "WordPress, CSS",
        "src":null,
        "link": "http://www.adaptamosgroup.com/",
        "type":"web"    
    },
    {
        "name": "Stardust Images",
        "year": "2014",
        "excerpt": "Photo site with authentication where you can upload photos.",
        "description": "My first approach with PHP where we created a Flickr-like website. Users can sign-up, log-in, upload their photos and create albums.",
        "image": "../../portfolio/img/php.jpg",
        "stack": "HTML, CSS, JS, PHP",
        "src":"https://github.com/AlexMayol/Stardust-Images",
        "link": null,
        "type":"web"    
    },
 


]