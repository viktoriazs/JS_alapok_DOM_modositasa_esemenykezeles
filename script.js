window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
   
});

function elemekElerese1() {
   let text1 = document.querySelectorAll("section h2")[0];
   let tart1 = text1.innerHTML;
   console.log(tart1);
}
function elemekElerese2() {
   const eleres = document.getElementById("ide")
   eleres.innerHTML+=`<p>Jo reggelt!</p>`;
    
}

function elemekElerese3() {
    /* const eleres2 = document.getElementsByClassName("ide") */
    const eleres2=document.querySelectorAll(".ide")[0]
    eleres2.innerHTML+=`<p>Jo reggelt!</p>`;
}

function elemekElerese4(){
  /*   let list = [] */
    let txt = "<ul>"
    for (let index = 0; index < 5; index++) {
        let rand = Math.floor(Math.random()*21+10)

        txt += `<li>${rand}</li>`
        
        /* list.push(rand); */
        
    }
    txt += "</ul>"

   

    /* const eleres3 = document.getElementsByClassName("lista") */
    const eleres3=document.querySelectorAll(".lista")[0]
    eleres3.innerHTML+= txt


    


}


function elemekFormazasa1(){
    const forma=document.querySelectorAll(".lista")[0]
    forma.classList.add("formazott")
}

function esemenyKezeles1(){
    const esemeny=document.querySelectorAll(".lista")[0]
    esemeny.addEventListener("click", add)
    function add(event){
        console.log(event.target)
        let kattint=document.querySelectorAll(".kattintasutan")
        console.log(kattint)
        kattint[0].append(event.target)
    }
}


function esemenyKezeles2(){
    const fel = document.querySelectorAll(".feladat")[0]
    fel.innerHTML+="<button>ok</button>"


    const button = document.querySelector(".feladat button")
    button.addEventListener("click", funct)
    function funct(event){
        let pic = `<div class="macsek">
                    <img src="kepek/download.jfif" alt="macsek">
                    </div>`
        console.log(event.target)
/*         fel[0].innerHTML+=pic.innerHTML */
        fel.innerHTML+=`<div class="macsek">
                    <img src="kepek/download.jfif" alt="macsek">
                    </div>`
        esemenyKezeles3();
    }
}


function esemenyKezeles3(){
    let pic = document.querySelectorAll(".macsek")[0]
    console.log(pic)
    pic.addEventListener("mouseover", kicsi)
    function kicsi(event){
        console.log(event.target)
        pic.classList.add("small")
    }

    pic.addEventListener("mouseleave", normal)
    function normal(event){
        console.log(event.target)
        pic.classList.remove("small")
    }
}
