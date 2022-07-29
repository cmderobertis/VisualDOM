# VisualDOM

<img src="./package/assets/vDom-logo-w360px.png" alt="vDOM logo">

*A visual representation of the Document Object Model to aid in web development.*

## Features

- Parses HTML and generates new elements at the end of your `<body>`, visualizing nested children in your markup.
- Each node provides the element's tag name, classes, and ID, color-coded for easy identification.
- Managing 100+ `<div>`s has never been this easy!

## How to use this in your project

1. Download and extract .zip
2. Place 'package' directory in the **root** of your project. *(Feel free to store 'package' elsewhere, as long as your import tags point to that location.)*
3. Add this `<script>` tag to the end of `<body>` (immediately before closing tag) 👇  
```<script src="./package/vdom.js"></script>``` VisualDOM will automatically link up its CSS just before `</head>` end tag.
4. Build out your project, and VisualDOM will render additional elements in the `<body>` below your markup!
5. Done with VisualDOM? Remove the `<link>` and `<script>` tags associated with VisualDOM, and remove 'package' directory from your project.

## Want to contribute?

This project is licenced under The MIT Open Source Licence. Feel free to fork this project or shoot me an <a href="mailto:cmderobertis@gmail.com">email</a>.
