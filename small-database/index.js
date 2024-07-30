const data = [{
    "name": "foo1",
    "value": "bar1",
},
{
    "name": "foo2",
    "value": "bar2",
},
{
    "name": "foo3",
    "value": "bar3",
}]


// DOM MANIPULATION

const list = document.querySelector('.list')
const input = document.getElementById('input')
const save = document.getElementById('save')

// counting the amount and adding a specific key to each element on the creation process
let c = 0
let divs = [];
let identifier;
// generating the list according to the data
data.forEach((item) => {
    let div = document.createElement('div')
    divs.push(div)
    div.id = c
    div.classList.add('card')
    let idSpan = document.createElement('span')
    let nameSpan = document.createElement('span')
    let valueSpan = document.createElement('span')
    idSpan.textContent = c
    c++
    nameSpan.textContent = item.name
    valueSpan.textContent = item.value
    idSpan.id = 'id'
    nameSpan.id = 'name'
    valueSpan.id = 'value'
    list.appendChild(div)
    div.appendChild(idSpan)
    div.appendChild(nameSpan)
    div.appendChild(valueSpan)
})

divs.forEach(div => {
    div.addEventListener('click', () => {
        document.querySelector('.edit').classList.remove('none')
        input.value = div.children[2].textContent
        identifier = div.id

        save.addEventListener('click', () => {
            if (identifier == div.id) {
                edit(div)
                identifier = undefined
            }
            else {
                console.log('error')
            }
        })
        input.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                if (identifier == div.id) {
                    edit(div)
                    identifier = undefined
                }
                else {
                    console.log('error')
                }
            }
        })
    })
})

function edit(div) {
    div.children[2].textContent = input.value
    // Empty input value for UI
    input.value = ''
}