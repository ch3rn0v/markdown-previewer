document.addEventListener('DOMContentLoaded', function(event) {
	var textareaElement = document.getElementById('md-source-textarea');
	var mdPreviewElement = document.getElementById('md-preview');

	/*  This function gets scroll position of the source element, normalizes it,
        then denormalizes it according to the target element's size,
        then sets new scroll position to the target element.
    */
	var synchronizeScroll = (sourceElement, targetElement) => {
		// 1. Get and normalize scroll position
		var sourceHeighDiff = sourceElement.scrollHeight - sourceElement.clientHeight;
		if (sourceHeighDiff < 1) {
			// Avoid division by zero.
			return;
		}
		var currentNormalizedScrollPosition = sourceElement.scrollTop / sourceHeighDiff;
		// 2. Denormalize scroll position
		var targetScrollPosition =
			currentNormalizedScrollPosition * (targetElement.scrollHeight - targetElement.clientHeight);
		// 3. Set new scroll position
		targetElement.scrollTo(0, targetScrollPosition);
	};

	// Scroll event handlers enter neverending loop unless they are intentionally stopped.
	// Hence queue-like behavior.
	var currentScrollEvent = null;
	var scrollSyncTimer;

	var scrollHandler = (initializer) => {
		// If one element initialized scroll sync, prevent the other one from doing so.
		// If there are no elements syncing scroll at the moment, allow one of them to initialize scroll sync.
		if (currentScrollEvent !== initializer && currentScrollEvent !== null) {
			return;
		}

		clearTimeout(scrollSyncTimer);
		// Remember that the current element initialized scroll
		currentScrollEvent = initializer;

		if (initializer === 'textarea') {
			synchronizeScroll(textareaElement, mdPreviewElement);
		} else if (initializer === 'mdPreview') {
			synchronizeScroll(mdPreviewElement, textareaElement);
		}

		// Allow any other element for new scroll sync as soon as 0.2s have passed after current sync started.
		scrollSyncTimer = setTimeout(function() {
			currentScrollEvent = null;
		}, 200);
	};

	textareaElement.onscroll = function() {
		scrollHandler('textarea');
	};

	mdPreviewElement.onscroll = function() {
		scrollHandler('mdPreview');
	};
});
