let slides = [];
slides = document.querySelectorAll('.container');
console.log(slides.length)

for(let i = 0; i < slides.length; i++){
    if(i == 0) continue;
    console.log(i)
    setTimeout(function(){

        slides[i].style.opacity = "1";
        console.log('sadsfdsfsd' + i)
    }, 5000 * i)
}