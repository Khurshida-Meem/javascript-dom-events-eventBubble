// li
document.getElementById('second-item').addEventListener('click', function (event) {
    console.log('second1 item clicked');
    // event.stopPropagation();
    event.stopImmediatePropagation();
});
document.getElementById('second-item').addEventListener('click', function (event) {
    console.log('second2 item clicked');

});
document.getElementById('second-item').addEventListener('click', function (event) {
    console.log('second3 item clicked');

});
document.getElementById('second-item').addEventListener('click', function (event) {
    console.log('second4 item clicked');

});
// ul
document.getElementById('list-container').addEventListener('click',function () {
    console.log('ul clicked');
});
// section
document.getElementById('section-container').addEventListener('click',function () {
    console.log('section clicked');
});
