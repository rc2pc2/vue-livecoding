const { createApp } = Vue;

createApp({
    data() {
        return {
            // list of image urls to be used as a slide
            images: [
                'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
                'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
                'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
                'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
                'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
            ],
            activeIndex : 0,
            autoplay: false,
        }
    },
    methods: {
        previousSlide(){
            if ( this.activeIndex === 0){
                this.activeIndex = this.images.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        nextSlide(){
            if ( this.activeIndex === this.images.length - 1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },

        goToSlide(slideIndex){
            if (slideIndex >= this.images.length || slideIndex < 0){
                return 0;
            }

            this.activeIndex = slideIndex;
        },

        startAutoplay(){
            if (!this.autoplay){
                this.autoplay = setInterval(this.nextSlide, 3000);
                console.log('autoplay started');
            } else {
                console.warn('Autoplay is already active');
            }
        },

        stopAutoplay(){
            if (!this.autoplay ){
                console.warn('There is no autoplay to stop');
            } else {
                console.log('autoplay cleared');
                clearInterval(this.autoplay);
                this.autoplay = false;
            }
        }
    },
    mounted(){
        this.startAutoplay();
    },

}).mount('#app');
