// Insert vdom.css into head
let head = document.getElementsByTagName('head')[0]
let linkTag = document.createElement('link')
head.appendChild(linkTag)
linkTag.rel = 'stylesheet'
linkTag.type = 'text/css'
linkTag.href = './package/vdom.css'

// Select 'body' element
let body = document.querySelector('body')

// Build vDOM header and append to document
let vheader = document.createElement('div')
vheader.classList.add('vdom', 'vdomheader')
vheader.innerHTML = 
    `<div id="vdomheader" class="vdom vdomrow">
        <div class="vdom vdomLogoBox">
            <h1 class="vdom">Visual<span class="vdom">DOM</span></h1>
            <img id="vdomLogo" class="vdom" src="./package/assets/vDOM-logo-w360px.png">
        </div>
        <p class="vdom"><em class="vdom">for the visual learners out there</em> 💙</p>
        <p class="vdom">by <a href="https://github.com/cmderobertis/visualDOM" class="vdom" id="vdomRepoLink">Cameron De Robertis</a></p>
    </div>`
body.appendChild(vheader)

// Create vDOM container, append to 'body'
let vDOM = document.createElement('div')
vDOM.classList.add('vdom', 'vdombody', 'vdomcol')
body.appendChild(vDOM)

// Build out vDiv
function vDiv(el) {
    if (el.tagName == 'SCRIPT') return
    let vEl = document.createElement('div')
    vEl.classList.add('vdom', 'vdomchild', `vdom${el.tagName}`)

    
    // Assign attributes based on el
    vEl.innerHTML += `<span class="vdomTagName">< ${el.tagName.toLowerCase()} ><span> <span class="vdomClasses">${el.classList}</span> <span class="vdomID">${el.id}</span>`
    
    // check if el IS a parent, update classList and recursively build its children
    if (el.children.length > 0) {
        vEl.classList.remove('vdomchild')
        vEl.classList.add('vdomparent')
        
        // create container for children
        let childBox = document.createElement('div')
        childBox.classList.add('vdom', 'vdomchildbox')
        vEl.appendChild(childBox)

        // if el is flexed, flex the vEl
        if (getComputedStyle(el).flexDirection == "row" && getComputedStyle(el).display == 'flex') {
            childBox.classList.add('vdomrow')   
        }
        let numChildren = el.children.length
        for (let i = 0; i < numChildren; i++) {
            childBox.appendChild(vDiv(el.children[i]))
        }
    }
    
    // return newly created div to be inserted into DOM
    return vEl
}


// Run vDiv for each child of 'body'
let bodyChildren = body.children.length

for (let i = 0; i < bodyChildren; i++) {
    if (body.children[i].tagName == 'SCRIPT') break
    vDOM.appendChild(vDiv(body.children[i]))
}