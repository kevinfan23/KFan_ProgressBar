$(document).ready(function() {
	initProgressBar();

});

    // SIGNATURE PROGRESS
function initProgressBar() {
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
        
    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').animate({
        left: progressTotal
    }, 1500);
}