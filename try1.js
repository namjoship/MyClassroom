let input = document.getElementById('user_input');
let enter = document.getElementById('enter');
let show1 = document.querySelector('h5');

const showName = (event) => {
    let name = input.value;
    if(event.keyCode === 13) {
        return show1.innerHTML = name;
    }
}

async function findData() {
    let response = await fetch('http://numbersapi.com/'+input.value+'/math');
    let data = await response.text();
    console.log(data);
    return show1.innerHTML = data;
}

input.addEventListener("keypress", showName);
enter.addEventListener("click", findData);
