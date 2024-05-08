

function dot(num){
    let sliderarray = document.getElementsByClassName("imgg");
    let dotarray  = document.getElementsByClassName("dot");

    for (let  i =0;i<sliderarray.length;i++){
        if(num-1 == i){
           sliderarray[i].style.display = "block";
           dotarray[i].classList.add("click");
           continue;
        }

        sliderarray[i].style.display = "none";
        dotarray[i].classList.remove("click");
    }


}