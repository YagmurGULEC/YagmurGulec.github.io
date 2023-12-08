/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const canvas=document.getElementById("myCanvas");
const ctx=canvas.getContext("2d");
const params=document.querySelectorAll("input");
let colors=["red","green","blue","yellow","pink"];
function draw(game){
    let noOfPoles=3;
    let noOfDisks=3;
    for (let i=0;i<noOfPoles;i++){
        ctx.fillStyle=colors[i];
        ctx.fillRect(0,canvas.height-10,10+i*10,canvas.height);
    }
};

window.addEventListener ("DOMContentLoaded", function(){
    draw();
    params.forEach((item) =>{
        item.onchange=function(){
            if (item.id==="reve" && item.checked)
                document.querySelector('#hanoi').checked=false;
            else if (item.id==="hanoi" && item.checked)
                document.querySelector('#reve').checked=false;
            draw();
        }
        });
});

