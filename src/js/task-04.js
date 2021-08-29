const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecreaseValue)
refs.incrementBtn.addEventListener('click', onIncreaseValue)

function onDecreaseValue() {
  counterValue -= 1;
  refs.value.textContent = counterValue
}

function onIncreaseValue() {
  counterValue += 1;
  refs.value.textContent = counterValue
}

