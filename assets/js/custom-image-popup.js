function openLightbox(block) {
  const img = block.querySelector('img');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightbox = document.getElementById('lightbox');

  lightboxImg.src = img.src;
  lightbox.classList.add('open');
  setTimeout(() => lightboxImg.classList.add('active'), 10);
}

function openVideoLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');

  lightboxImg.style.display = 'none';
  lightboxVideo.style.display = 'block';
  lightboxVideo.src = src + '?autoplay=1&mute=1';
  lightbox.classList.add('open');
  setTimeout(() => lightboxVideo.classList.add('active'), 10);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');

  lightboxImg.classList.remove('active');
  lightboxVideo.classList.remove('active');
  setTimeout(() => {
    lightbox.classList.remove('open');
    lightboxVideo.src = ''; // stops the video
    lightboxImg.style.display = 'block';
    lightboxVideo.style.display = 'none';
  }, 250);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});