// Toggle searchbar beside search icon
document.addEventListener('DOMContentLoaded', function() {
	const searchToggle = document.querySelector('.search-toggle');
	const searchInput = document.querySelector('.searchbar-input');
	if (searchToggle && searchInput) {
		searchToggle.addEventListener('click', function() {
			if (searchInput.style.display === 'none' || searchInput.classList.contains('hide')) {
				searchInput.style.display = 'block';
				setTimeout(() => searchInput.classList.remove('hide'), 10);
				searchInput.focus();
			} else {
				searchInput.classList.add('hide');
				setTimeout(() => searchInput.style.display = 'none', 200);
			}
		});
		// Optional: hide on blur
		searchInput.addEventListener('blur', function() {
			searchInput.classList.add('hide');
			setTimeout(() => searchInput.style.display = 'none', 200);
		});
	}
});
/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!')

// Dot-1 hover swaps product image to htUdenBgGrøn.png, restores on mouseout
document.addEventListener('DOMContentLoaded', function() {
	// Dot hover image swap
	const productImg = document.querySelector('.product-card img');
	if (productImg) {
		const originalSrc = productImg.getAttribute('src');
		const dotConfigs = [
			{ selector: '.dot-1', img: 'Images2/htUdenBgGrøn.png' },
			{ selector: '.dot-2', img: 'Images2/htUdenBgLilla.png' },
			{ selector: '.dot-3', img: 'Images2/htUdenBgRose.png' }
		];
		dotConfigs.forEach(cfg => {
			const dot = document.querySelector(cfg.selector);
			if (dot) {
				dot.addEventListener('mouseenter', function() {
					productImg.setAttribute('src', cfg.img);
				});
				dot.addEventListener('mouseleave', function() {
					productImg.setAttribute('src', originalSrc);
				});
			}
		});
	}

	// Toggle active state for 'nyt' and 'tilbud' buttons
	const nytBtn = document.querySelector('.mest-btn-black');
	const tilbudBtn = document.querySelector('.mest-btn-white');
	if (nytBtn && tilbudBtn) {
		tilbudBtn.addEventListener('click', function() {
			tilbudBtn.classList.add('mest-btn-black');
			tilbudBtn.classList.remove('mest-btn-white');
			nytBtn.classList.add('mest-btn-white');
			nytBtn.classList.remove('mest-btn-black');
		});
		nytBtn.addEventListener('click', function() {
			nytBtn.classList.add('mest-btn-black');
			nytBtn.classList.remove('mest-btn-white');
			tilbudBtn.classList.add('mest-btn-white');
			tilbudBtn.classList.remove('mest-btn-black');
		});
	}
});
