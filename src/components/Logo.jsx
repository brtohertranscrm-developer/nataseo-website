import nataseoLogo from '../assets/nataseo.png'

const sizes = {
  sm: { width: 130 },
  md: { width: 170 },
  lg: { width: 220 },
}

export default function Logo({ white = false, size = 'md' }) {
  return (
    <img
      src={nataseoLogo}
      alt="NataSEO"
      width={sizes[size].width}
      style={white ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  )
}
