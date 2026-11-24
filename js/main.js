//Variables

let ubicacionPrincipal=window.pageYOffset;

let nav=document.getElementById('nav');
let menu=document.getElementById('enlaces');
let abrir=document.getElementById('open');
let botones=document.getElementsByClassName('btn-header');
let cerrado=true;


    



function menus(){ 
    let Desplazamiento_Actual = window.pageYOffset; 
    if(Desplazamiento_Actual <=300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition='0.5s';
        menu.style.top = '100px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition='0.5s';
        menu.style.top = '80px';
        abrir.style.color = '#000';
    } 
}



function apertura(){
    if(cerrado){
        menu.style.width='70vw';
        cerrado=false;
    }else{
        menu.style.width='0%';
        menu.style.overflow='hidden';
        cerrado=true;

    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = this.document.querySelector('span');
        if(e.target !== span && e.target !==abrir){
            menu.style.width= '0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }
    }
});

window.addEventListener('scroll', function(){
     console.log(window.pageYOffset);
     menus();
});



window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function(){
    apertura();


});

//AOS.init();

// window.onscroll = function(){
//        let Desplazamiento_Actual = window.pageYOffset;
//        if(ubicacionPrincipal>=Desplazamiento_Actual){
//            document.getElementById("nav").style.top="0"
//        }else{
//            document.getElementById("nav").style.top="-100px"

//        }
//       ubicacionPrincipal=Desplazamiento_Actual;
//  }


// window.addEventListener("scroll", function(){
//     let Desplazamiento_Actual = window.pageYOffset;
//     if(ubicaciónPrincipal>=Desplazamiento_Actual){
//         document.getElementsByTagName("nav")[0].style.top="0px"
//     }else{
//         document.getElementsByTagName("nav")[0].style.top="-100px"

//     }
//    ubicaciónPrincipal=Desplazamiento_Actual;
// });
