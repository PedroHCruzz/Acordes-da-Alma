document.addEventListener('DOMContentLoaded', function() {
    let nextButton = document.querySelector('.next');
    let prevButton = document.querySelector('.prev');

    nextButton.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
        updateContent(items);
    });

    prevButton.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
        updateContent(items);
    });

   
    function updateContent(items) {
        items.forEach((item, index) => {
            item.style.order = index; 
        });
    }
});
