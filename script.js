var isDark = true

function darkMode() {
    var body = document.querySelector('body');
    var titles = document.querySelectorAll('h2');
    var labels = document.querySelectorAll('label');


    if(isDark == true) {
        body.style.backgroundColor = '#3b3b3b';
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.color = '#fff'
        };

        for (let j = 0; j < labels.length; j++) {
            labels[j].style.color = '#fff'
        };

        isDark = false;
    } else {
        body.style.backgroundColor = '#fff';
        for (let i = 0; i < titles.length; i++) {
            titles[i].style.color = '#888888'
        };

        for (let j = 0; j < labels.length; j++) {
            labels[j].style.color = '#000'
        };

        isDark = true;
    }
}