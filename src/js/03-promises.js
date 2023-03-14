import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const buttonSubmit = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    };
  });
};

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  for (let index = 0; index < amountInput.value; index ++) {
    let time = index * Number(stepInput.value) + Number(delayInput.value);
    setTimeout (() => {
      createPromise(index + 1, time)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }, time);
  };
});
































// function createPromise(position, delay) {

//   const promise =  new Promise((resolve, reject) => {

//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//           // Fulfill
//           resolve('+');
//           console.log(promise);
//         } else {
//           // Reject
//           reject('-');
//           console.log(promise);
//         };
//     }, delayInput.textContent);
//   });
// };



