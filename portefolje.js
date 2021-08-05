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
        document.getElementById("overskrift_2").style.opacity = "1";
   
   }
    else{
        document.getElementById("overskrift_2").style.opacity = "0";
   }

    //linje Fade
     if(percent <= 5){
        document.getElementById("line").style.opacity = "1";
   
   }
    else{
        document.getElementById("line").style.opacity = "0";
   }

    //overskrift 3
    if(percent >= 20){
        document.getElementById("overskrift_3").style.opacity = "1";
   
   }
    else{
        document.getElementById("overskrift_3").style.opacity = "0";
   }

    //overskrift 3_msc
    if(percent >= 20){
        document.getElementById("overskrift_3_msc").style.opacity = "1";
   
   }
    else{
        document.getElementById("overskrift_3_msc").style.opacity = "0";
   }

    //bakgrunn
    if(percent >= 20){
    document.getElementById("container").style.backgroundColor = "black";
    }
    
    else{
        document.getElementById("container").style.backgroundColor = "white";
    }

    //vedlag 1
    if(percent >= 20){
        document.getElementById("vedlag_1").style.opacity = "1";
   
   }
    else{
        document.getElementById("vedlag_1").style.opacity = "0";
   }

   //overskrift 4
   if(percent >= 40){
    document.getElementById("overskrift_4").style.opacity = "1";

    }
    else{
        document.getElementById("overskrift_4").style.opacity = "0";
    }

    //overskrift 4_msc
    if(percent >= 40){
        document.getElementById("overskrift_4_msc").style.opacity = "1";

    }
    else{
        document.getElementById("overskrift_4_msc").style.opacity = "0";
    }

    //vedlag 2
    if(percent >= 40){
        document.getElementById("vedlag_2").style.opacity = "1";
   
   }
    else{
        document.getElementById("vedlag_2").style.opacity = "0";
   }

   //overskrift 4 --- fade ut
   if(percent >= 80){
    document.getElementById("overskrift_4").style.opacity = "0";

    }


    //overskrift 4_msc --- fade ut
    if(percent >= 80){
        document.getElementById("overskrift_4_msc").style.opacity = "0";

    }


    //vedlag 2 --- fade ut
    if(percent >= 80){
        document.getElementById("vedlag_2").style.opacity = "0";
   
   }

   //bakgrunn --- fade ut til hvit
   if(percent >= 80){
    document.getElementById("container").style.backgroundColor = "white";
    }
    

    })

}

