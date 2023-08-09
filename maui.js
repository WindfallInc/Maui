const small = window.matchMedia('(max-width: 767px)');
const medium = window.matchMedia('(min-width:768px) and (max-width: 1022px)');
const large = window.matchMedia('(min-width: 1023px)');

function applyClassesForSize(prefix) {
    const allElements = document.querySelectorAll('[x-class]');
    allElements.forEach(el => {
        const xClassValue = el.getAttribute('x-class');
        const newClassValue = xClassValue.replace(`${prefix}:`, '');
        el.setAttribute('class', newClassValue);
    });
}

function swapClasses() {
    if (small.matches) {
        applyClassesForSize('sm');
    } else if (medium.matches) {
        applyClassesForSize('md');
    } else if (large.matches) {
        applyClassesForSize('lg');
    }
}

window.addEventListener("resize", swapClasses);
window.addEventListener("load", swapClasses);
