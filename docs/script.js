document.addEventListener('DOMContentLoaded', (event) => {
    let containers = document.getElementsByClassName("image-fading");

    window.addEventListener('scroll', function() {
        for (let i = 0; i < containers.length; i++) {
            if (containers[i].getBoundingClientRect().top < window.innerHeight - 94) {
                containers[i].classList.add("aparecer-image-container-2");
            }
        }
    }
    );
});

document.addEventListener('DOMContentLoaded', (event) => {
    let containers = document.getElementsByClassName("image-fading");

    window.addEventListener('scroll', function() {
        for (let i = 0; i < containers.length; i++) {
            if (containers[i].getBoundingClientRect().top < window.innerHeight - 94) {
                containers[i].classList.add("aparecer-image-container-3");
            }
        }
    }
    );
});

document.addEventListener('DOMContentLoaded', (event) => {
    let containers = document.getElementsByClassName("image-fading");

    window.addEventListener('scroll', function() {
        for (let i = 0; i < containers.length; i++) {
            if (containers[i].getBoundingClientRect().top < window.innerHeight - 94) {
                containers[i].classList.add("aparecer-image-container-4");
            }
        }
    }
    );
});

document.addEventListener('DOMContentLoaded', (event) => {
    let containers = document.getElementsByClassName("image-fading");

    window.addEventListener('scroll', function() {
        for (let i = 0; i < containers.length; i++) {
            if (containers[i].getBoundingClientRect().top < window.innerHeight - 94) {
                containers[i].classList.add("aparecer-image-container-5");
            }
        }
    }
    );
});