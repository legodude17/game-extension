document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('gnmg').onclick = function (e) {
        var w = window.open('http://gamesnmoregames.weebly.com');
        if (w) {
            console.error('Could not open scripty like');
            e.preventDefault();
        }
    }
    document.getElementById('dct').onclick = function (e) {
        var w = window.open('http://designcodeteam.weebly.com');
        if (w) {
            console.error('Could not open scripty like');
            e.preventDefault();
        }
    }
});