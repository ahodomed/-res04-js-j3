
function exercice1()
{
    const btn1 = document.querySelector("#btn-change-color");   
    const section1 = document.querySelector("#box1");   


    btn1.addEventListener("click",()=>{
        section1.style.backgroundColor="blue";
    });
}

exercice1();



function exercice2()
{
    const btn2 = document.getElementById("btn-move");
    const section2 = document.getElementById("box2");
    btn2.addEventListener("click",()=>{
    section2.classList.add("move");
    
});

}

    exercice2();



function exercice3()
{
    
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let btn3 = document.querySelector("btn-add-ingredients");
    
     let ul=document.getElementsByTagName("ul");

    btn3.addEventListener("click",function(){
        
        for(let ingredient of ingredients){
        let li = document.createElement("li");
        let textingredient = document.createTextNode(ingredient);
        
        ul[0].appendChild(li);
        li.appendChild(textingredient);
    }
        
    });
}

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    
    
    
}

function exercice5()
{

}

function exercice6()
{

}