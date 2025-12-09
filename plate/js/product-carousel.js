// Produktkarusel: Gør det muligt at bladre mellem produkter
// Alt er gjort responsivt og let at forstå
// Kommentarer er på dansk for bedre forståelse

document.addEventListener('DOMContentLoaded', () => {
  // Find de nødvendige DOM-elementer
  const track = document.querySelector('.carousel-track');
  const wrapper = document.querySelector('.carousel-track-wrapper');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');

  // Stop hvis karusel-elementer ikke findes
  if (!track || !wrapper || !prevBtn || !nextBtn) return;

  let currentIndex = 0; // Aktuel position i karusellen
  let itemSize = 0;     // Bredde + mellemrum for ét produktkort
  let maxIndex = 0;     // Sidste mulige position

  // Beregn størrelser dynamisk ud fra CSS og layout
  function beregnStørrelser() {
    const førsteElement = track.querySelector('.carousel-item');
    if (førsteElement) {
      const style = window.getComputedStyle(førsteElement);
      const bredde = førsteElement.offsetWidth;
      const marginRight = parseInt(style.marginRight) || 0;
      itemSize = bredde + marginRight;
    } else {
      itemSize = 0;
    }
    const wrapperBredde = wrapper.clientWidth;
    const synligeElementer = itemSize > 0 ? Math.floor(wrapperBredde / itemSize) : 1;
    maxIndex = Math.max(0, track.children.length - synligeElementer);
    currentIndex = Math.min(currentIndex, maxIndex);
  }

  // Opdater karusellens position
  function opdaterKarusel() {
    beregnStørrelser();
    const offset = currentIndex * itemSize;
    track.style.transform = `translateX(-${offset}px)`;
  }

  // Klik på venstre pil
  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    opdaterKarusel();
  });

  // Klik på højre pil
  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex += 1;
      opdaterKarusel();
    }
  });

  // Opdater karusellen ved vinduesstørrelse-ændring
  window.addEventListener('resize', opdaterKarusel);

  // Start med at vise karusellen korrekt
  opdaterKarusel();
});
