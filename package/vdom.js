// Select 'body' element
let body = document.querySelector('body')
console.log(body)

// Build vDOM header and append to document
let vheader = document.createElement('div')
vheader.classList.add('vdom')
vheader.innerHTML = 
    `<div class="vdom vdomrow">
        <h1 class="vdom">Visual DOM</h1>
        <p class="vdom">~<em class="vdom">for the visual learners out there</em> 💙~</p>
        <a href="https://github.com/cmderobertis" class="vdom" id="vdomLink">by Cameron De Robertis</a>
    </div>`
body.appendChild(vheader)

// Create vDOM container, append to 'body'
let vDOM = document.createElement('div')
vDOM.classList.add('vdom')
body.appendChild(vDOM)

// Build out vDiv
function vDiv(el) {
    if (el.tagName == 'SCRIPT') return
    let vEl = document.createElement('div')
    // let parent = el.parent
    vEl.classList.add('vdom', 'vdomchild', `vdom${el.tagName}`)
    // Assign attributes based on el
    vEl.innerText = `<${el.tagName}> || ${el.classList} || ${el.id}`
    // console.log(vEl)


    // check if el IS a parent, update classList and recursively build its children
    if (el.children.length > 0) {
        vEl.classList.remove('vdomchild')
        vEl.classList.add('vdomparent')
        let numChildren = el.children.length
        for (let i = 0; i < numChildren; i++) {
            vEl.appendChild(vDiv(el.children[i], vEl))
        }
    }
    
    // return newly created div to be inserted into DOM
    return vEl
}


// Run vDiv for each child of 'body'
let bodyChildren = body.children.length
for (let i = 0; i < bodyChildren; i++) {
    vDOM.appendChild(vDiv(body.children[i]))
}