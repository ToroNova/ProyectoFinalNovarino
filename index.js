
window.sr = ScrollReveal();

    sr.reveal('.banner, .carousel, #menu',{
        duration: 1000,
        origin: 'top',
        distance: '100px',
        reset: 'true',
        /* delay: 100, */
    })

    sr.reveal('#menu',{
        origin: 'left',
        duration: 1600,
   
    })

    sr.reveal('.carousel',{
        origin: 'right',
        duration: 1400,
    })  
    
    sr.reveal('.card1, .card3',{
        duration: 1600,
        origin: 'left',
        distance: '100px',
        reset: 'true',
    })  

    sr.reveal('.card2, .card4',{
        duration: 1600,
        origin: 'right',
        distance: '100px',
        reset: 'true',
        
    }) 
