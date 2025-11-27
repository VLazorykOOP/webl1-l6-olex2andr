function log(event, message) {
    console.log(`[${event}] ${message}`);
}

window.addEventListener('load', () => {
    log('onload', 'active');
});

window.addEventListener('unload', () => {
    log('onunload', 'active');
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    log('onbeforeunload', 'active');
});

window.addEventListener('afterprint', () => {
    log('onafterprint', 'active');
});

window.addEventListener('beforeprint', () => {
    log('onbeforeprint', 'active');
});

document.addEventListener('DOMContentLoaded', () => {
    log('onbeforeonload (DOMContentLoaded)', 'active');
});

window.addEventListener('blur', () => {
    log('onblur', 'active');
});

window.addEventListener('error', () => {
    log('onerror', 'active');
});

window.addEventListener('focus', () => {
    log('onfocus', 'active');
});

window.addEventListener('hashchange', () => {
    log('onhaschange', 'active');
});

window.addEventListener('message', (event) => {
    log('onmessage', 'active');
});

window.addEventListener('offline', () => {
    log('onoffline', 'active');
});

window.addEventListener('online', () => {
    log('ononline', 'active');
});

window.addEventListener('pagehide', () => {
    log('onpagehide', 'active');
});

window.addEventListener('pageshow', () => {
    log('onpageshow', 'active');
});

window.addEventListener('popstate', () => {
    log('onpopstate', 'active');
});

document.addEventListener('redo', () => {
    log('onredo', 'active');
});

window.addEventListener('resize', () => {
    log('onresize', 'active');
});

window.addEventListener('storage', () => {
    log('onstorage', 'active');
});

document.addEventListener('undo', () => {
    log('onundo', 'active');
});







window.onload = function() {
    document.querySelector('.header-logo').onclick = function() {
        alert('Event: onclick');
        this.style.color = 'red';
        this.style.textDecoration = 'underline';
    };

    document.querySelector('article h2').ondblclick = function() {
        alert('Event: ondblclick');
        this.style.backgroundColor = 'yellow';
        this.style.color = 'black';
    };

    subscribeButton = document.querySelector('button[type="submit"]');

    subscribeButton.onmousedown = function() {
        console.log('Event: onmousedown');
        this.style.backgroundColor = 'green';
        this.style.transform = 'scale(0.95)';
    };
    subscribeButton.onmouseup = function() {
        alert('Event: onmouseup');
        this.style.backgroundColor = '';
        this.style.transform = 'scale(1)';
    };

    document.querySelector('.news-layout').onmousemove = function() {
        console.log('Event: onmousemove');
        this.style.borderColor = 'blue';
        this.style.borderStyle = 'dashed';
        this.style.borderWidth = '2px';
    };
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.onmouseover = function() {
            console.log('Event: onmouseover');
            this.style.fontSize = '1.2em';
            this.style.color = 'orange';
        };
        link.onmouseout = function() {
            console.log('Event: onmouseout');
            this.style.fontSize = '1em';
            this.style.color = '';
        };
    });

    document.querySelector('.sidebar').onwheel = function() {
        console.log('Event: onmousewheel');
        this.style.opacity = '0.5';
        
        setTimeout(() => {
            this.style.opacity = '1';
        }, 500);
    };

    window.onscroll = function() {
        header = document.querySelector('.header');
        console.log('Event: onscroll');
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
            header.style.padding = '5px 0';
        } else {
            header.style.backgroundColor = '#333';
            header.style.padding = '1rem 0';
        }
    };

    dragImage = document.querySelector('.article-image');
    dropZone = document.querySelector('.widget:last-child');

    dragImage.setAttribute('draggable', 'true');
    dropZone.style.transition = 'all 0.3s';

    dragImage.ondragstart = function(event) {
        console.log('Event: ondragstart');
        this.style.opacity = '0.4';
        this.style.border = '5px solid red';
    };

    dragImage.ondrag = function(event) {
        console.log('Event: ondrag');
    };

    dragImage.ondragend = function(event) {
        console.log('Event: ondragend');
        this.style.opacity = '1';
        this.style.border = 'none';
    };

    dropZone.ondragenter = function(event) {
        event.preventDefault();
        console.log('Event: ondragenter');
        this.style.backgroundColor = '#d1ffd1';
        this.style.transform = 'scale(1.05)';
    };

    dropZone.ondragleave = function(event) {
        console.log('Event: ondragleave');
        this.style.backgroundColor = '';
        this.style.transform = 'scale(1)';
    };

    dropZone.ondragover = function(event) {
        event.preventDefault();
        console.log('Event: ondragover');
    };

    dropZone.ondrop = function(event) {
        event.preventDefault();
        this.style.backgroundColor = 'gold';
        this.innerHTML += '<p style="color:green; font-weight:bold;">Картинку отримано!</p>';
    };
};







document.querySelectorAll('.smart-img').forEach(img => {
    img.onmouseover = function() {
        this.style.transform = "scale(1.05)";
        this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        this.style.transition = "0.3s";
    };

    img.onmouseout = function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    };

    img.onclick = function() {
        alert("click on img");
    };
});

function runTask3() {
    result = "1. Історія звернень: " + window.history.length + "\n";
    result += "2. Кількість посилань на сторінці (document.links): " + document.links.length + "\n";
    if (document.links.length > 0) {
        result += "3. Перше посилання: " + document.links[0].href + "\n";
    }

    result += "4. Розробник: " + document.querySelector('meta[name="author"]').content + "\n";
    result += "5. Властивості document:\n";

    count = 0;
    for (i in document) {
        if (count < 10) {
            result += "- " + i + "\n";
            count++;
        }
    }

    document.getElementById('task3Output').value = result;
}

function runTask5() {
    text = document.getElementById('regexInput').value;
    let outputHTML = "";

    words = text.match(/[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+/g);
    
    outputHTML += `<strong>Кількість слів:</strong> ${words ? words.length : 0}<br>`;
    matchesA = text.match(/\b[аa][a-zA-Zа-яА-ЯіІїЇєЄґҐ]*[аa]\b/gi);
    
    outputHTML += `<strong>Слова, що починаються і закінчуються на "а":</strong> `;
    if (matchesA) {
        outputHTML += matchesA.join(", ");
    } else {
        outputHTML += "не знайдено";
    }
    outputHTML += "<br>";

    matchesInt = text.match(/\b\d+\b/g);

    outputHTML += `<strong>Цілі числа:</strong> `;
    if (matchesInt) {
        outputHTML += matchesInt.join(", ");
    } else {
        outputHTML += "не знайдено";
    }

    document.getElementById('task5Result').innerHTML = outputHTML;
}
