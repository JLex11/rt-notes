export function enableSmoothHorizontalScroll(element: HTMLElement) {
  if (!element) return

  let currentScrollPosition = 0
  let targetScrollPosition = 0
  let animationFrameId: number | null = null
  const SCROLL_SPEED = 2 // Factor de velocidad ajustable
  const SMOOTHING_FACTOR = 0.15 // Factor de suavizado (0-1)

  function smoothScroll() {
    const difference = targetScrollPosition - currentScrollPosition

    // Si la diferencia es muy pequeña, detener la animación
    if (Math.abs(difference) < 0.5) {
      currentScrollPosition = targetScrollPosition
      element.scrollLeft = currentScrollPosition
      animationFrameId = null
      return
    }

    // Aplica el factor de suavizado
    currentScrollPosition += difference * SMOOTHING_FACTOR

    // Actualiza la posición del scroll
    element.scrollLeft = currentScrollPosition

    // Continúa la animación
    animationFrameId = requestAnimationFrame(smoothScroll)
  }

  element.addEventListener(
    'wheel',
    (evt: Event) => {
      const event = evt as WheelEvent
      event.preventDefault()

      const delta = event.deltaY || event.deltaX
      targetScrollPosition += delta * SCROLL_SPEED

      // Limita la posición objetivo al rango válido del scroll
      targetScrollPosition = Math.max(
        0,
        Math.min(
          targetScrollPosition,
          element.scrollWidth - element.clientWidth,
        ),
      )

      // Inicia la animación si no está en curso
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(smoothScroll)
      }
    },
    { passive: false },
  )

  // Limpia la animación cuando el usuario interactúa con la página
  element.addEventListener('touchstart', () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  })
}