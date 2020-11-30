var input = prompt('risi yidva gsurs?');

if (input === 'laptop') {
    let computers = document.getElementById('pc-container');
    let laptops = computers.children[0];

    laptops.style.background = 'green';


} else if (input === 'desktop') {
    let computers = document.getElementById('pc-container');
    let desktop = computers.children[1];

    desktop.style.background = 'blue';
}

