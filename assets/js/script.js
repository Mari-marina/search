function test(a, b) {
    return a + b
}



const number = document.querySelector('.text-righ');
const email = document.querySelector('.text-email');

const secondBlock = document.querySelector('.authorization_second-block');
const firstBlock = document.querySelector('.authorization_first-block');


number.addEventListener('click', function () {
  secondBlock.classList.toggle('second-block-active');
});
number.addEventListener('click', function () {
  firstBlock.classList.toggle('first-block-active');
});


email.addEventListener('click', function () {
  firstBlock.classList.toggle('first-block-inactive');
});
email.addEventListener('click', function () {
  secondBlock.classList.toggle('first-block-active');
});
//# sourceMappingURL=script.js.map


