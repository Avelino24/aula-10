
document.addEventListener("click", bulb);


function bulb(){

if(document.getElementById("imagem").src==="https://i.postimg.cc/KjK1wL3c/bulb-off.png"){



document.getElementById("imagem").src="https://i.postimg.cc/6QyTynzr/bulb-on.png";
document.body.style.background="#ffdd00";
document.getElementById("butt").innerHTML="OFF";

document.body.style.transition="all 1.5s";

}else{


    document.getElementById("imagem").src="https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    document.body.style.background="black";
    document.getElementById("butt").innerHTML="ON";
   
    document.body.style.transition="all 1.5s";
}


}

