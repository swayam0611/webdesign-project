let currentIndex = 0;
        const slides = document.querySelectorAll('#slideshow img')

        function showSlide(index){
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if(i===index){
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide(){
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
        function prevSlide(){
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
        setInterval(nextSlide, 3000);