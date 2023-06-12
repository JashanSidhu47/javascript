const featuredImage = document.getElementById('featuredImage');
const caption = document.getElementById('caption');
const thumbnails = document.querySelectorAll('#thumbnails .thumbnail');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    featuredImage.src = thumbnail.src;
    featuredImage.alt = thumbnail.alt;

    caption.textContent = thumbnail.alt;

    thumbnails.forEach((t) => t.classList.remove('active'));

    thumbnail.classList.add('active');
  });
});
