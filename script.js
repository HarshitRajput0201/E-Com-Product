let imageSources = {
    'grey': ['./images/g1.jpg', './images/g2.jpg', './images/g3.jpg', './images/g4.jpg'],
    'blue': ['./images/b1.jpg', './images/b2.jpg', './images/b3.jpg', './images/b4.jpg']
};

var currentColor = 'grey';
var currentImageIndex = 0; 


function changeColor(color) {
    currentColor = color;
    currentImageIndex = 0; 
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.classList.remove('active');
    });
    var selectedItem = document.getElementById(color);
    selectedItem.classList.add('active');
    updateProductImages();
}

function updateProductImages() {
    var productImagesContainer = document.getElementById('productImagesContainer');
    var productImagesDiv = document.getElementById('productImages');
    productImagesDiv.innerHTML = '';

    var images = imageSources[currentColor];
    var imgElement = document.createElement('img');
    imgElement.src = images[currentImageIndex];

    productImagesDiv.appendChild(imgElement);
}

updateProductImages();

function scrollImages(direction) {
    var images = imageSources[currentColor];

    if (direction === 'next' && currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else if (direction === 'prev' && currentImageIndex > 0) {
        currentImageIndex--;
    }

    updateProductImages();
}

function selectItem(itemId) {
    var selects = document.querySelectorAll('.select');
    selects.forEach(function(select) {
        select.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked item
    var selectedItem = document.getElementById(itemId);
    selectedItem.classList.add('selected');
}