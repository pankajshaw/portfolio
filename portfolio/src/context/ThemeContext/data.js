import ngrx from "../../assets/ngrx.png";
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import js from '../../assets/js.png';
import redux from '../../assets/redux.jpg';
import angular from '../../assets/angular.png';
import sass from '../../assets/sass.png';
import jquery from '../../assets/jquery.png';


export const THEMES = {
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'angular': {
        backgroundImage: angular,
        linearGradient:  createLinearGradient('#0043A9', '#B42B2C'),
        primaryColor: '#B52C2D',
        color: '#0043A9'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'rxjs': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'redux': {
        backgroundImage: redux,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
    'sass': {
        backgroundImage: sass,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
    'jquery': {
        backgroundImage: jquery,
        linearGradient: createLinearGradient('#020024', '#00d4ff'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
