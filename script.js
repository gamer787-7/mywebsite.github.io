document.addEventListener('DOMContentLoaded', () => {
    // Initialize counters for all products
    const products = document.querySelectorAll('.product-box');
    const counts = Array(products.length).fill(0);

    products.forEach((product, index) => {
        const incrementBtn = product.querySelector('.increment');
        const decrementBtn = product.querySelector('.decrement');
        const countDisplay = product.querySelector('.count');

        incrementBtn.addEventListener('click', () => {
            counts[index]++;
            countDisplay.textContent = counts[index];
        });

        decrementBtn.addEventListener('click', () => {
            if(counts[index] > 0) {
                counts[index]--;
                countDisplay.textContent = counts[index];
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-box');
    const counts = Array(products.length).fill(0);
    const resetBtn = document.querySelector('.reset-btn');
    const countDisplays = document.querySelectorAll('.count');

    // Initialize product counters
    products.forEach((product, index) => {
        const incrementBtn = product.querySelector('.increment');
        const decrementBtn = product.querySelector('.decrement');

        incrementBtn.addEventListener('click', () => {
            counts[index]++;
            countDisplays[index].textContent = counts[index];
        });

        decrementBtn.addEventListener('click', () => {
            if(counts[index] > 0) {
                counts[index]--;
                countDisplays[index].textContent = counts[index];
            }
        });
    });

    // Reset all counters
    resetBtn.addEventListener('click', () => {
        counts.fill(0);
        countDisplays.forEach(display => {
            display.textContent = '0';
        });
    });
});