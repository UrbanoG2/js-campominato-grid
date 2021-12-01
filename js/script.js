//aggiungo evento per il quale, una volta selezionata la difficoltà e anche dopo aver cliccato play apparirà la griglia selezionata


const playBtn = document.getElementById("btnPlay");

// const medium = document.getElementById("medium");
// console.log(medium);

// const hard = document.getElementById("hard");
// console.log(hard);



//creo l'evento click -- voglio che al click di play in pagina si veda l'elemento che ha la classe active

//variabile difficoltà



playBtn.addEventListener("click", 
    function () {

        let difficulty =  document.getElementById("difficulty").value;
        console.log(difficulty);

        if (difficulty == "Easy") {
            
            let easy_container = document.getElementById("easy_container");
            console.log(easy_container);
    
            easy_container.classList.add ("active");
            medium_container.classList.remove ("active");
            hard_container.classList.remove ("active");
            
            
        } else if (difficulty == "Medium") {
            
            let medium_container = document.getElementById("medium_container");
            console.log(medium_container);
    
            medium_container.classList.add ("active");
            easy_container.classList.remove ("active");
            hard_container.classList.remove ("active");


        } else if (difficulty == "Hard") {
            let hard_container = document.getElementById("hard_container");
            console.log(hard_container);
    
            hard_container.classList.add ("active");
            medium_container.classList.remove ("active");
            easy_container.classList.remove ("active");
            
        }
        
})

    