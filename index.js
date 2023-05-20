const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/*window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a'); //anchors are links on page
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {

        const anchor = anchors[i];
        anchor.addEventListener('click', e => {

            let target = e.target.href;
            console.log(target);


            e.preventDefault();
            transition_el.classList.add('is-active');
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }

}*/

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
}); //please understand how this works