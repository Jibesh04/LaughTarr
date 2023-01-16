const joke = document.querySelector("#joke");
const punch = document.querySelector('#punch');
const btn = document.querySelector('#btn');
const icon = document.querySelector(`head > link[rel='icon']`);

let icons = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','🥲','😚', '😶‍🌫️']
let gen_icon = icons[0];

btn.addEventListener("click", getJoke);

const api = 'https://v2.jokeapi.dev/joke/Any';

let count = 0;

function getJoke() {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            if(typeof(data.setup) == 'undefined')
                getJoke();
            else{
                joke.innerHTML = `${data.setup}`;
                punch.innerHTML = `- ${data.delivery}`;
                console.log(`Generated Joke ${++count} ${count == 1 ? "Time" : "Times"}`);
            }
            setIcon(Math.floor(Math.random() * 20));
        })
}

function setIcon(x){
    // console.log("Reached here..." + x);
    gen_icon = icons[x];
    newIcon = `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${gen_icon}</text></svg>`;
    icon.setAttribute(`href`, `data:image/svg+xml,${newIcon}`);
}

document.onload = getJoke();