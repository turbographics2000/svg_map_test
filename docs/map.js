fetch('BlankMap-World6-Equirectangular.svg').then(res => res.text()).then(svgText => {
    var svg = document.createElement('svg');
    document.body.appendChild(svg);
    svg.outerHTML = svgText;
    setTimeout(setClickEvent);
});

function setClickEvent() {
    var path = document.getElementsByTagName('path');
    console.log(path);
}
