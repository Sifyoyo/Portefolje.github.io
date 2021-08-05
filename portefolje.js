window.onload = oppstart;



function oppstart(){
//   window.scrollTo(0,500);


   document.addEventListener('scroll', function(e) {
   var hoyde = document.getElementById("container");



    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
 
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
 
    //h1 Fade
    if(percent <= 5){
         document.getElementById("h1").style.opacity = "1";

    }
     else{
         document.getElementById("h1").style.opacity = "0";
    }

    //h2 Fade
    if(percent <= 5){
        document.getElementById("h2").style.opacity = "1";
   
   }
    else{
        document.getElementById("h2").style.opacity = "0";
   }

    //linje Fade
     if(percent <= 5){
        document.getElementById("line").style.opacity = "1";
   
   }
    else{
        document.getElementById("line").style.opacity = "0";
   }
   



    })

}

