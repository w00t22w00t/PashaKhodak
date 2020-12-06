(function(){
    var bttnMenu = document.querySelector('.header__menu-button'),
        headerWrap = document.querySelector('.header .wrap'),
        sliderButtons = document.querySelectorAll('.specialties__slider-buttons .specialties__slider-button'),
        sliderWindow = document.querySelectorAll('.specialties__slider-elem'),
        timerHours = document.querySelector('.header__timer-hours'),
        timerMinutes = document.querySelector('.header__timer-minutes');

    bttnMenu.addEventListener('click', function() {
        headerWrap.classList.toggle('open-menu');
    });

    sliderButtons.forEach(function(item, index) {
        item.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                sliderButtons.forEach(function(elem) {
                    elem.classList.remove('active');
                })
                this.classList.add('active');
                sliderWindow.forEach(function(elem) {
                    elem.style.left = -33.33 * index + "%";
                })
            }
        })
    });

    var t = new Date(2020, 11, 8);
    

    var timer = setInterval(function() {
        var timeNow = Date.now();
        var result = t.getTime() - timeNow;
        console.log(Math.round(result/1000/60));
        var hours = Math.round(result/1000/60/60);
        var minutes = Math.round(result/1000/60%60);
        timerHours.textContent = String(hours).length > 1 ? hours : '0' + hours;
        timerMinutes.textContent = String(minutes).length > 1 ? minutes : '0' + minutes;
        if (result<0) {
            clearInterval(timer);
            timerHours.textContent = '0';
            timerMinutes.textContent = '0';
        }
    }, 1000)
}())