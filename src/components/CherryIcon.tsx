type Props = {
  size?: number
  className?: string
}

export function CherryIcon({ size = 32, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 8 C 28 18, 22 26, 16 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M34 8 C 36 18, 42 26, 48 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M18 12 C 26 6, 36 6, 42 14 C 38 12, 30 12, 22 16 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <circle cx="20" cy="44" r="14" fill="currentColor" />
      <circle cx="44" cy="44" r="14" fill="currentColor" opacity="0.85" />
      <ellipse cx="16" cy="40" rx="3" ry="2" fill="white" opacity="0.55" />
      <ellipse cx="40" cy="40" rx="3" ry="2" fill="white" opacity="0.45" />
    </svg>
  )
}
