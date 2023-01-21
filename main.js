var $gallery = document.querySelector('main');
var imageUrls = [];

var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', myFunction);
function myFunction() {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
}

imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://i0.wp.com/cyclry.com/wp-content/uploads/2019/12/zejps58yfwl21.jpg?fit=630%2C420&ssl=1',
  'https://i.pinimg.com/originals/15/4a/d9/154ad9170f537d4252f885fa77d49a69.jpg',
  'https://d2p6e6u75xmxt8.cloudfront.net/2/2016/04/face-2.jpg'
];

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}
updateGallery();
