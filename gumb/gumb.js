
document.getElementsByTagName("body")[0].onscroll = function(){kolizija();};
 
 
function kolizija(){    
    linkElement = document.getElementById("link").getBoundingClientRect();
    sekcijaElement = document.getElementById("sekcija").getBoundingClientRect();
    ostatakSekcijeElement = document.getElementById("ostatak-sekcije").getBoundingClientRect();
         
    if (linkElement.bottom >= ostatakSekcijeElement.top){
        document.getElementById("link").style.zIndex = "2";
    }
     
    if (linkElement.top <= sekcijaElement.bottom){
        document.getElementById("link").style.zIndex = "0";
    }
     
}