// video.js
let previewTimer;

document.querySelectorAll('.video-card').forEach(card => {
  const videoId = card.dataset.video;
  const iframe = card.querySelector('.preview');
  const thumb = card.querySelector('.thumb');
  const playBtn = card.querySelector('.play-btn');

  // Preview Logic
  card.addEventListener('mouseenter', () => {
    // Show Iframe
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`;
    iframe.classList.remove('hidden');
    
    // Hide UI Elements with a small fade if you add CSS transitions
    thumb.style.opacity = '0';
    if(playBtn) playBtn.style.opacity = '0';

    // Auto-stop preview after 20 seconds to save bandwidth
    previewTimer = setTimeout(() => stopPreview(card), 20000);
  });

  card.addEventListener('mouseleave', () => stopPreview(card));
  
  // Click Logic
  card.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(videoId);
  });
});

function stopPreview(card) {
  const iframe = card.querySelector('.preview');
  const thumb = card.querySelector('.thumb');
  const playBtn = card.querySelector('.play-btn');

  clearTimeout(previewTimer);
  iframe.src = '';
  iframe.classList.add('hidden');
  thumb.style.opacity = '1';
  if(playBtn) playBtn.style.opacity = '1';
}

function openModal(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');

  // Prevent scrolling on body when modal is open
  document.body.style.overflow = 'hidden';

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');

  // Re-enable scrolling
  document.body.style.overflow = 'auto';

  iframe.src = '';
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}