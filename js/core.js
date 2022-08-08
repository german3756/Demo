const app = document.getElementById
('Typewriter');

const Typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('La capital del Sol')    
.pauseFor(200)
.start();