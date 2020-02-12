// mon js pour ma page slideshow.html 
$(function(){

  
    $('aside a').click(function(event){
        // alert('js ok');
        //j'annule le clic sur le lien
        event.preventDefault();
        // console.log($(this).attr('href'));
        var moHref = $(this).attr('href');
        $('main').find('img').attr('src',moHref); 
        

    });

    // a revoir 
    $('aside ~ a').click(function(){
        
        var monAlt = $('aside ~ a+img').attr('alt');
        console.log($('aside a img').attr('alt'));
        $('main').find('img').attr('alt');
       
    });

   
});




    











































