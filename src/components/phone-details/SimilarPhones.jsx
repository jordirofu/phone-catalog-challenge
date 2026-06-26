import { useCallback, useEffect, useState } from 'react'
import PhoneCard from './PhoneCard'
import { useDragScroll } from '../hooks/useDragScroll'

const THUMB_SCALE = 0.25 // 1 = proporción real; <1 = más estrecho

export default function SimilarPhones({ phones }) {
  const { ref, isDragging, dragHandlers } = useDragScroll()
  const [thumb, setThumb] = useState({ width: 0, left: 0 })

  const updateThumb = useCallback(() => {
    const track = ref.current
    if (!track) {
      return
    }
    const { clientWidth, scrollWidth, scrollLeft } = track
    const maxScroll = scrollWidth - clientWidth
    const width = (clientWidth / scrollWidth) * 100 * THUMB_SCALE
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0
    setThumb({
      width,
      left: progress * (100 - width),
    })
  }, [ref])

  useEffect(() => {
    updateThumb()
    window.addEventListener('resize', updateThumb)
    return () => window.removeEventListener('resize', updateThumb)
  }, [updateThumb, phones])

  return (
    <section className="similar-phones">
      <h2 className="similar-phones__title">Similar items</h2>
      <ul
        ref={ref}
        {...dragHandlers}
        onScroll={updateThumb}
        className={`similar-phones__track${isDragging ? ' similar-phones__track--dragging' : ''}`}
      >
        {phones.map((phone) => (
          <li key={phone.id}>
            <PhoneCard phone={phone} />
          </li>
        ))}
      </ul>

      <div className="similar-phones__scrollbar">
        <div className="similar-phones__line">
          <div
            className="similar-phones__thumb"
            style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
          />
        </div>
      </div>
    </section>
  )
}
