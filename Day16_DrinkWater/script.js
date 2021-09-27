const smallCups = document.querySelectorAll('.small-cups');
const litres = document.getElememtById('litres');
const remained = document.getElememtById('remained');
const percentage = document.getElememtById('percentage');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {highlightCups(idx)});
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) idx --;
        
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        }else {
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.small-cup.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = `${fullCups/totalCups * 330}px`;
        percentage.innerText = `${fullCups/totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        litres.innerText = `${2- (250 * fullCups / 1000)}`
    }
}