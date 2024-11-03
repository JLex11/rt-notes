export function enableHorizontalScroll(element: HTMLElement, { scrollSpeed = 2, smoothingFactor = 0.15 } = {}) {
	if (!element) return

	let currentScrollPosition = 0
	let targetScrollPosition = 0
	let animationFrameId: number | null = null

	function smoothScroll() {
		const difference = targetScrollPosition - currentScrollPosition

		if (Math.abs(difference) < 0.5) {
			currentScrollPosition = targetScrollPosition
			element.scrollLeft = currentScrollPosition
			animationFrameId = null
			return
		}

		currentScrollPosition += difference * smoothingFactor

		element.scrollLeft = currentScrollPosition

		animationFrameId = requestAnimationFrame(smoothScroll)
	}

	element.addEventListener(
		'wheel',
		(evt: Event) => {
			const event = evt as WheelEvent
			event.preventDefault()

			const delta = event.deltaY || event.deltaX
			targetScrollPosition += delta * scrollSpeed

			targetScrollPosition = Math.max(0, Math.min(targetScrollPosition, element.scrollWidth - element.clientWidth))

			if (!animationFrameId) {
				animationFrameId = requestAnimationFrame(smoothScroll)
			}
		},
		{ passive: false }
	)

	element.addEventListener('touchstart', () => {
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId)
			animationFrameId = null
		}
	})
}
