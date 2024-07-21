function WordMarker(text, textlength, classname) {
    let array = text.split(' ').map((Eachword) => {
        if (Eachword.length >= textlength) {
            return `<span class="${classname}">${Eachword}</span>`
        }
        else {
            return Eachword
        }
    }).join(' ')
    return array
}
// Code
let p = document.querySelector("#find");
p.innerHTML = WordMarker(p.textContent, 9, 'selected')