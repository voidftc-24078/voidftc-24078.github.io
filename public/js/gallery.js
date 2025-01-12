// get list of images
let images = document.querySelectorAll('img')
// get wrapper element
let wrapper = document.getElementById('wrapper')
// get fullscreen image element
let imgWrapper = document.getElementById('fullImg')
// get close button element
let closebutton = document.querySelector('span')

/* var $galleryContainer = $('.img-gallery').isotope({
    itemSelector: '.grid-item',
        percentPosition: true,
      masonry: {
          columnWidth: '.grid-sizer'
      }
}) */

images.forEach((img,index) => {
    img.addEventListener("click", () => {
        openImage(`img/image${index}.png`)
    })
})

closebutton.addEventListener("click", () => (wrapper.style.display = 'none'))

function openImage(img) {
    wrapper.style.display = 'flex'
    imgWrapper.src = img
}
