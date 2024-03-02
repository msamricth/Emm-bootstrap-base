import '../scripts/theme';
import { editorFold } from '../scripts/thefold/src/wordpress.editor.js';
//import './scripts/navbar';
//import './scripts/posts';
import { get_slider } from '../scripts/carousel.js';
import { get_stats } from '../scripts/content.js';
import { forms } from '../scripts/forms.js';
import '../scripts/final';

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(
        function () {
            editorFold();
            forms();
            get_slider();
            get_stats();
        }, 1000);
});