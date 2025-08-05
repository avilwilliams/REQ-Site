interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width="60"
        height="40"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-500"
      >
        {/* Ornate Key Design */}
        <g fill="currentColor">
          {/* Key head with decorative swirls */}
          <circle cx="25" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15 35 Q20 30 25 35 Q30 30 35 35 Q30 40 25 35 Q20 40 15 35 Z" fill="currentColor" opacity="0.8" />
          <path d="M20 45 Q25 50 30 45 Q25 40 20 45 Z" fill="currentColor" opacity="0.6" />

          {/* Key shaft */}
          <rect x="43" y="38" width="50" height="4" fill="currentColor" />
          <rect x="43" y="36" width="50" height="2" fill="currentColor" opacity="0.7" />
          <rect x="43" y="44" width="50" height="2" fill="currentColor" opacity="0.7" />

          {/* Key teeth */}
          <rect x="85" y="42" width="8" height="6" fill="currentColor" />
          <rect x="93" y="38" width="6" height="4" fill="currentColor" />
          <rect x="99" y="42" width="4" height="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  )
}
