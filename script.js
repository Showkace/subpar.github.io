let newImg;
newImg = document.getElementById("gifImg").firstChild();
console.log(newImg);

setTimeout (() => {
      
    newImg.appendChild( "<a " + "src = ./imgs/hey.png" + "/>" )
}, 10000);


