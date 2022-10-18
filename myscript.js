var like = [0,0];

function addLike(idx) {
    var element = document.querySelector('#like'+idx);
    like[idx] = like[idx] + 1
    element.innerText = like[idx] + ' like(s)';
}