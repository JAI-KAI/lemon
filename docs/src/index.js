import SimpleParallax from "simple-parallax-js/vanilla";

    //slides
    let slideIndex = 0;
    let isPaused = false;
    const autoSlideInterval = 2000;
    const pauseDuration = 5000; 

    showSlides();

    function showSlides() {
        if (isPaused) return;

        var slides = document.getElementsByClassName('slides');
        var dots = document.getElementsByClassName('dots');

        slideIndex++;
        for(let i = 0 ; i < slides.length ; i++){
            slides[i].style.display = 'none';
        }
        for(let i = 0 ; i < dots.length ; i++){
            dots[i].style.backgroundColor = 'initial';
            dots[i].onclick = function(e) {
                for(let j = 0 ; j < dots.length ; j++){
                    slides[j].style.display = 'none';
                    dots[j].style.backgroundColor = 'initial';
                }
                slideIndex = i + 1;
                slides[slideIndex-1].style.display = 'block';
                dots[slideIndex-1].style.backgroundColor = '#709339';
                pauseSlideshow()
            };
        }
        
        if(slideIndex > slides.length){slideIndex = 1};
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].style.backgroundColor = '#709339';
    }
    // setInterval(showSlides, autoSlideInterval);


    function pauseSlideshow() {
        if(isPaused) return;
        isPaused = true;
        setTimeout(() => {
            isPaused = false;
        }, pauseDuration);
    }
    

    //gotop
    document.getElementById('goTop').onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    var products = document.querySelector('.products')
    var rect = products.getBoundingClientRect().top
    var productsTop = rect + window.scrollY - 100;

    window.addEventListener("scroll",function(){
        goTop.style.opacity = (this.scrollY) > productsTop ? 1 : 0
    })
    
    //SimpleParallax
    var image = document.getElementsByClassName('thumbnail');
    new SimpleParallax(image);