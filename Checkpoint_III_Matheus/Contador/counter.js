function counter() {
    let count = 0;
    const counterValue = document.getElementById('counterValue');
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');
    const resetButton = document.getElementById('resetButton');

    if (!counterValue || !incrementButton || !decrementButton || !resetButton) {
        console.error('Elementos do contador não foram encontrados no HTML.');
        return;
    }

    function render() {
        counterValue.textContent = String(count);
    }

    incrementButton.addEventListener('click', () => {
        count += 1;
        render();
    });

    decrementButton.addEventListener('click', () => {
        count -= 1;
        render();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        render();
    });

    render();
}

document.addEventListener('DOMContentLoaded', counter);