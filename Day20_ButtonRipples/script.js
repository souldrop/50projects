const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += 'hold'
    setTimeout(() => this.className = 'invsible', 0)
    this.className += 'invisible'
}

function dragEnd() {
    console.log('drag end')
}

function dragStart() {
    console.log('drag start')
}

function dragEnd() {
    console.log('drag end')
}

function dragStart() {
    console.log('drag start')
}

function dragEnd() {
    console.log('drag end')
}