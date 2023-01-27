const numbers = document.querySelectorAll('.number');
const submit = document.querySelector('.rating__submit');
const thanks = document.querySelector('.thanks');
const rating = document.querySelector('.rating');
const thanksRate = document.querySelector('.thanks__rate');
console.log(numbers);
let rate = 0;
let i = 0;
numbers.forEach( (number) => {
    number.addEventListener('click', () => {
        if(document.querySelector('.active')) {
            let active = document.querySelector('.active');
            if (number === active) {
                number.classList.toggle('active');
                number.classList.toggle('numberHover');
                rate = parseInt(number.innerHTML);
            } else {
                number.classList.toggle('active');
                number.classList.toggle('numberHover');
                active.classList.toggle('active');
                active.classList.toggle('numberHover');
                rate = parseInt(number.innerHTML);
            }
        } else {
            number.classList.toggle('active');
            number.classList.toggle('numberHover');
            rate = parseInt(number.innerHTML);
        }    
})
})
submit.addEventListener('click', () => {
    if (document.querySelector('.active')) {
        createElement();
        rating.classList.toggle('disable');
        thanks.classList.toggle('disable');
    } else {
        alert('Please rate before hitting the submit button!');
    }
})
function createElement() {
    let span = document.createElement('span');
    span.innerHTML = `You select ${rate} out of 5`;
    span.className = 'thanks__rate__text';
    thanksRate.appendChild(span);
}