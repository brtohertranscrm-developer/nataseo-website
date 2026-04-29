export default function Logo({ white = false, size = 'md' }) {
  const sizes = {
    sm: { width: 130, height: 32, fontSize: 24, barW1: 20, barW2: 17, barW3: 20, barX: 74, eX: 97, tagSize: 7 },
    md: { width: 170, height: 42, fontSize: 32, barW1: 26, barW2: 22, barW3: 26, barX: 98, eX: 127, tagSize: 8 },
    lg: { width: 220, height: 54, fontSize: 42, barW1: 34, barW2: 28, barW3: 34, barX: 128, eX: 166, tagSize: 9 },
  }
  const s = sizes[size]
  const textColor = white ? '#FFFFFF' : '#0AB5A0'
  const tagColor = white ? 'rgba(255,255,255,0.75)' : '#6B7280'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${s.width} ${s.height}`}
      width={s.width}
      height={s.height}
    >
      {/* NATA */}
      <text
        x="0"
        y={s.height * 0.72}
        fontFamily="'Arial Black', Impact, sans-serif"
        fontSize={s.fontSize}
        fontWeight="900"
        fill={textColor}
        letterSpacing="-1"
      >
        NATA
      </text>
      {/* Gold bars (S icon) */}
      <rect x={s.barX} y={s.height * 0.08} width={s.barW1} height={s.height * 0.14} rx="1.5" fill="#B8972A" />
      <rect x={s.barX} y={s.height * 0.37} width={s.barW2} height={s.height * 0.14} rx="1.5" fill="#B8972A" />
      <rect x={s.barX} y={s.height * 0.66} width={s.barW3} height={s.height * 0.14} rx="1.5" fill="#B8972A" />
      {/* EO */}
      <text
        x={s.eX}
        y={s.height * 0.72}
        fontFamily="'Arial Black', Impact, sans-serif"
        fontSize={s.fontSize}
        fontWeight="900"
        fill={textColor}
        letterSpacing="-1"
      >
        EO
      </text>
      {/* ® */}
      <text
        x={s.width - 10}
        y={s.height * 0.22}
        fontFamily="Arial"
        fontSize={s.tagSize + 3}
        fill={textColor}
      >
        ®
      </text>
    </svg>
  )
}
