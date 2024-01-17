//This js file is made to interact with the DOM.
import {reviewGenerator} from './generator.js'

const btn = document.getElementById('btn_generator');
const paragraph = document.getElementById('generated_text');

btn.onclick = function() {
    document.getElementsByTagName('h2')[0].innerHTML = 'Your random review is:'
    paragraph.innerHTML = reviewGenerator.stringGenerator()
    paragraph.style.fontSize = '20px'   
}


