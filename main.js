function yearsDifference(date1, date2) {
    var difference = date1.getTime() - date2.getTime();
    return (difference / 1000 / 60 / 60 / 24 / 365.25).toFixed(8);
}

function age() {
    var currentdate = new Date();
    var birthdate = new Date(2001, 12, 7, 12, 30, 0, 0);

    document.querySelector('h1').innerHTML = yearsDifference(currentdate, birthdate);
}

document.addEventListener('DOMContentLoaded', function () {
    age();
    setInterval(age, 500);
});

var scrolling = {
    "fixed": false,
    "fixedY": null
};

window.onscroll = function () {
    var div = document.querySelector('#paco');
    var paddingTop = window.getComputedStyle(div, null).getPropertyValue('padding-top');
    paddingTop = parseInt(paddingTop);

    if (document.querySelector('#paco').getBoundingClientRect().top === 0) {
        if (!scrolling.fixed || scrolling.fixed && window.scrollY < scrolling.fixedY) {
            scrolling = {
                "fixed": true,
                "fixedY": window.scrollY
            };
        }
        document.querySelector('#paco').style.padding = Math.max(200 - window.scrollY + scrolling.fixedY, 10) + 'px 0px';

        console.log(Math.max(200 - window.scrollY + scrolling.fixedY, 0));
        // console.log(window.getComputedStyle(document.querySelector('#paco'), null).getPropertyValue('padding-top'))
    }
};