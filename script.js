

var inputref = document.querySelector('.theinput')
var the1ref = document.querySelector('.the1')
var the2ref = document.querySelector('.the2')

inputref.addEventListener("mousehover", e => {
    console.log(e)
    the1ref.style.backgroundColor = '#C7C7C7';
})