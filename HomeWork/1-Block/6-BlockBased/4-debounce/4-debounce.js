"use strict";
const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
    };
};
const inputElement = document.getElementById('search-input');
if (!inputElement)
    throw new Error('Input element not found');
const search = (searchTerm) => {
    const element = document.getElementById(searchTerm);
    if (element)
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    else {
        const message = document.createElement('span');
        message.innerText = `Element ${searchTerm} not found!`;
        const searchSection = document.getElementById('search-section');
        searchSection.append(message);
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
};
const debouncedSearchHandler = debounce(search, 1000);
inputElement.addEventListener('input', (event) => {
    const { value } = event.target;
    if (value)
        debouncedSearchHandler(value);
});
//# sourceMappingURL=4-debounce.js.map