
type scienists = {
    name: string;
    age: number;
    minions: number; 
    desc: string;
}

const madScientists: scienists[] = [
    {
        name: "Rick",
        age: 60, 
        minions: 12,
        desc: "Drunken crazy scientist",
    },
    {
        name: "Morty",
        age: 15, 
        minions: 0,
        desc: "Always wants Ricks attention",
    },
    {
        name: "Voldemort",
        age: 120, 
        minions: 100,
        desc: "Wish to live forever",
    },
]


const addBtn = document.querySelector('button') as HTMLButtonElement;
let sec1 = document.getElementById('main-content') as HTMLElement;
let sec2 = document.getElementById('informationbox') as HTMLElement;
let par1 = document.getElementById('descText') as HTMLParagraphElement;


// --- Print out Scientists / Shows description on far right column ---

let printcard = function() {
    let length =  madScientists.length;

    for (let i = 0; i < length; i++) {
        let div1 = document.createElement('div') as HTMLDivElement;
        div1.className = "card";
        div1.innerHTML = `${madScientists[i].name}`;
        let btn1 = document.createElement('button');
        btn1.className = "descBtn";
        btn1.innerHTML = "Description";
        sec1.append(div1);
        sec1.append(btn1);
    }

    let showBtn = document.getElementsByClassName("descBtn");

    for (let n = 0; n < showBtn.length; n++){
        showBtn[n].addEventListener("click", function(show){
            par1.innerHTML = `${madScientists[n].desc}`

        })
    }

}

//    ---- Add Scientists ----

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    let sciName = document.querySelector('#fname') as HTMLInputElement;
    let sciDesc = document.querySelector('#description') as HTMLInputElement;
    let sciAge = document.querySelector('#age') as HTMLInputElement;
    let sciMinion = document.querySelector('#minions') as HTMLInputElement;

    let arr:scienists = {
        name: sciName.value,
        age: parseFloat(sciAge.value),
        minions: parseFloat(sciMinion.value),
        desc: sciDesc.value,
    }
    madScientists.push(arr);
    sec1.innerHTML = "";
    printcard();
})

printcard();