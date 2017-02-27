fetch('BlankMap-World6-Equirectangular.svg').then(res => res.text()).then(svgText => {
    var svg = document.createElement('svg');
    svg.outerHTML = svgText;
    document.body.appendChild(svg);
});
