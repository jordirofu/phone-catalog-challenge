import { useRef, useState } from 'react'

const DRAG_THRESHOLD = 5 // px movidos para considerarlo "arrastre" y no "click"

export function useDragScroll() {
  const ref = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const moved = useRef(false)

  const onMouseDown = (e) => {
    e.preventDefault() // evita la selección de texto y el inicio del arrastre nativo (imagen/texto)
    setIsDragging(true)
    moved.current = false
    startX.current = e.pageX - ref.current.offsetLeft
    startScrollLeft.current = ref.current.scrollLeft
  }

  const onMouseMove = (e) => {
    if (!isDragging) {
      return
    }
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = x - startX.current
    if (Math.abs(walk) > DRAG_THRESHOLD) {
      moved.current = true
    }
    ref.current.scrollLeft = startScrollLeft.current - walk
  }

  const stopDragging = () => setIsDragging(false)

  // Si hubo arrastre, cancela el click para que no navegue el <Link> de la card
  const onClickCapture = (e) => {
    if (moved.current) {
      e.preventDefault()
      e.stopPropagation()
      moved.current = false
    }
  }

  return {
    ref,
    isDragging,
    dragHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp: stopDragging,
      onMouseLeave: stopDragging,
      onClickCapture,
      onDragStart: (e) => e.preventDefault(),
    },
  }
}
