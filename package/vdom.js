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
        //consider using line below to insert <span>s and color-code items
    // vEl.innerHTML = `<span class></span>`
    vEl.innerText = `< ${el.tagName.toLowerCase()} >`
    if (el.classList.length) {
        vEl.innerText += ` ✦ ${el.classList}`
    }
    if (el.id) {
        vEl.innerText += ` ✦ ${el.id}`
    }
    console.log(el.style.flexDirection)
    if (el.style.display == 'flex') console.log('hello')
    
    if (el.style.flexDirection == "row") {
        // vEl.classList.add('vdomrow')
        console.log('hello world')
        
    }
    if (el.style.flexDirection == "column") {
        vEl.classList.add('vdomcol')
    }

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
    if (body.children[i].tagName == 'SCRIPT') break
    vDOM.appendChild(vDiv(body.children[i]))
}