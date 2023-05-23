const header = document.getElementById('message');

header.style.color = '#FFF';  // Makes color white
header.style.fontWeight = '100'; // makes font thin

const button = document.getElementById('see-review');

button.addEventListener('click', function() {

    console.log('click');
    const review = document.getElementById('review');
    const seeReviewButton = document.getElementById('see-review');

    if(review.classList.contains('d-none')) {
        showSeeReview("Hide Review");
        review.classList.remove('d-none');

    } else {
        showSeeReview("See Review");
        review.classList.add('d-none');
    };
    
});

let price = 49.99,
    name = "Hiking Boots",
    discounted = false;
let message = "Hello World";

showMessage(message);

changePercentOff(32);