let slider = document.querySelector('.slider .list');
let next = document.getElementById('next');
let shuffle = document.getElementById('shuffle');
let prev = document.getElementById('prev');

let array = ["What your name?", "How old are you?", "Nice to meet you?", "How do you fill?", "Where do you live?", "What is your city like?", "my name van"]
let randomArray = shuffleArray(array);

randomArray.forEach(text => {
    let item = document.createElement('div');
    item.className = 'item';
    let p = document.createElement('p');
    p.textContent = text;
    item.appendChild(p);
    slider.appendChild(item);
});

let items = document.querySelectorAll('.slider .list .item');
let itemsContent = document.querySelectorAll('.slider .list .item p');

for (let index = 0; index < randomArray.length; index++) {
        itemsContent[index].textContent = randomArray[index];    
}

function shuffleArray(array) {
    let shuffledArray = array.slice(); 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        console.log(j)
        let temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }
    return shuffledArray;
}



let lengthItems = items.length - 1;
let active = 0;
shuffle.onclick = function(){
    randomArray = shuffleArray(array);
    for (let index = 0; index < randomArray.length; index++) {
        if (index < itemsContent.length) {
            itemsContent[index].textContent = randomArray[index];
        }
    }
    active =0;
    reloadSlider();
}
next.onclick = function(){
    if(active + 1 <= lengthItems){
        active = active + 1;
    }else {
        nextButton.disabled = true;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1  >= 0 ){
        active = active-1;
    }else {
        prevButton.disabled = true
    }
    reloadSlider();
}

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
}

window.onresize = function(event) {
    reloadSlider();
};

