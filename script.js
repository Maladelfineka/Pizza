let root = document.querySelector('.root');

let id = '';

let notatki = localStorage.getItem("notatki");
if(!notatki){
    localStorage.setItem("notatki", '')
}
let notatkiArray = localStorage.getItem("notatki").split(' ');

localStorage.removeItem(id);


let add = document.querySelector('.add');

let deleteButton = document.querySelector('.delete');

let textarea = document.querySelector('#text');

console.log(textarea);

function notatkiWidok() {

    if (notatki) {

        for (let i of notatkiArray) {

            if(i){

                root.innerHTML += `

                <div class="notatki1">

                    ${localStorage.getItem(i)}

                    <button onclick="usun(${i})" >-</button>

                </div>

                `

            }

            

        }

    }

}

function usun(id) {

    console.log(id);

    localStorage.removeItem(id);

    console.log(id);

    let noweNotatki = notatki.replace(" " + id, '');

    console.log(noweNotatki);

    localStorage.setItem('notatki', noweNotatki);

    notatki = localStorage.getItem("notatki");

    notatkiArray = localStorage.getItem("notatki").split(' ');

    console.log(notatkiArray);

    root.innerHTML = '';

    notatkiWidok();

    

}

add.onclick = () => {

    id = Date.now();

    console.log(textarea.value);

    localStorage.setItem(id, textarea.value);

    localStorage.setItem("notatki", notatki + " " + id);

    notatki = localStorage.getItem("notatki");

    notatkiArray = localStorage.getItem("notatki").split(' ')

    console.log(notatkiArray);

    root.innerHTML = '';

    notatkiWidok();

}

deleteButton.onclick = () => {


    localStorage.removeItem(id);

    console.log(id);

    let noweNotatki = notatki.replace(" " + id, '');

    console.log(noweNotatki);

    localStorage.setItem('notatki', noweNotatki);

    notatkiArray = localStorage.getItem("notatki").split(' ');

    console.log(notatkiArray);

}




notatkiWidok();

///6 min do odrobienia