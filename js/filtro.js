$(function(){
    //$('.filter').click(function(){
    //    $(this).addClass('active').siblings().removeClass('active');
    //    let valor = $(this).attr('data-nombre');
    //    if(valor =='todos'){
    //        $('.cont-work').show('1000');
    //    }else{
    //        $('.cont-work').not('.'+ valor).hide('1000');
    //        $('.cont-work').filter('.'+ valor).show('1000');
   //     }
    //});

    let identidad = $('#identidad').offset().top,
        service = $('#service').offset().top,
        metodo = $('#metodo').offset().top,
        beneficio = $('#beneficio').offset().top,
        testimonio = $('#testimonio').offset().top,
        faqs = $('#faqs').offset().top,
        //equipo = $('#equipo').offset().top,
        //servicio = $('#servicio').offset().top,
        //trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    
    window.addEventListener('resize', function(){
        let identidad = $('#identidad').offset().top,
            service = $('#service').offset().top,
            metodo = $('#metodo').offset().top,
            beneficio = $('#beneficio').offset().top,
            testimonio = $('#testimonio').offset().top,
            faqs = $('#faqs').offset().top,
            //servicio = $('#servicio').offset().top,
            //trabajo = $('#trabajo').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });
 

    $('#enlace-identidad').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: identidad -60
        },600);
    });

    $('#enlace-service').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: service -50
        },600);
    });

    $('#enlace-metodo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: metodo -60
        },600);
    });

    $('#enlace-beneficio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: beneficio -60
        },600);
    });

    $('#enlace-testimonio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: testimonio -75
        },600);
    });
  
    $('#enlace-faqs').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: faqs -80
        },600);
    });

    // $('#enlace-servicio').on('click', function(e){
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: servicio -60
    //     },600);
    // });

    // $('#enlace-equipo').on('click', function(e){
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: equipo -80
    //     },600);
    // });



    // $('#enlace-trabajo').on('click', function(e){
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: trabajo -70
    //     },600);
    // });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto 
        },600);
    });

});