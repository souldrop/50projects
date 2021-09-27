const textarea = document.getElementsById('textarea');

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10);
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split('.').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    console.log(tags)

    tags.forEach(tag => {
        const t = document.createElement('span');
        t.classList.add('tag');
        t.innerText = tag;
        tagsEl.append(t);
    })
}


function randomSelect() {

    const times = 30;
    const int = 100;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, int);
    }, int);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
           const randomTag = pickRandomTag();
           highlightTag(randomTag);

        }, timeout);
    }, int * times);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}