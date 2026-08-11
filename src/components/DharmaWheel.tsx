/**
 * Kaal Chakra — The ancient cosmic wheel of Time.
 *
 * 4 spokes like the Sudarshan Chakra / chariot wheel from
 * Mahabharata era — a circle spinning through the Brahmand
 * (cosmos) with a serrated outer edge.
 */

interface DharmaWheelProps {
  size?: number;
  spinning?: boolean;
  color?: string;
}

export default function DharmaWheel({ size = 40, spinning = false, color = '#C24D2B' }: DharmaWheelProps) {
  const c = size / 2; // center
  const outerR = c * 0.92;
  const innerR = c * 0.72;
  const hubR = c * 0.16;
  const spokeW = size * 0.04;
  const teeth = 32; // serrated edge teeth count
  const toothDepth = size * 0.045;

  // Build serrated outer ring path
  const teethPath: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a3 = ((i + 1) / teeth) * Math.PI * 2;
    const ox = (r: number, a: number) => c + r * Math.cos(a);
    const oy = (r: number, a: number) => c + r * Math.sin(a);
    if (i === 0) teethPath.push(`M ${ox(outerR, a1)} ${oy(outerR, a1)}`);
    teethPath.push(`L ${ox(outerR + toothDepth, a2)} ${oy(outerR + toothDepth, a2)}`);
    teethPath.push(`L ${ox(outerR, a3)} ${oy(outerR, a3)}`);
  }
  teethPath.push('Z');

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`${
        spinning ? 'kaal-chakra-spinning cosmic-glow-active' : 'kaal-chakra-idle'
      }`}
    >
      <defs>
        <radialGradient id={`wg-${size}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Cosmic aura behind the wheel */}
      <circle cx={c} cy={c} r={c} fill={`url(#wg-${size})`} />

      {/* Serrated outer edge — like Sudarshan Chakra */}
      <path
        d={teethPath.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth={size * 0.02}
        opacity={0.55}
      />

      {/* Outer rim */}
      <circle cx={c} cy={c} r={outerR} fill="none" stroke={color} strokeWidth={size * 0.035} opacity={0.85} />

      {/* Inner rim */}
      <circle cx={c} cy={c} r={innerR} fill="none" stroke={color} strokeWidth={size * 0.02} opacity={0.4} />

      {/* 4 Spokes — the ancient cross of the cosmic wheel */}
      {[0, 90, 180, 270].map(angle => {
        const rad = (angle * Math.PI) / 180;
        const x1 = c + hubR * Math.cos(rad);
        const y1 = c + hubR * Math.sin(rad);
        const x2 = c + innerR * Math.cos(rad);
        const y2 = c + innerR * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color}
            strokeWidth={spokeW}
            opacity={0.8}
            strokeLinecap="round"
          />
        );
      })}

      {/* Spoke-to-rim connectors (small wedge shapes at the rim end) */}
      {[0, 90, 180, 270].map(angle => {
        const rad = (angle * Math.PI) / 180;
        const bx = c + innerR * Math.cos(rad);
        const by = c + innerR * Math.sin(rad);
        const ex = c + outerR * Math.cos(rad);
        const ey = c + outerR * Math.sin(rad);
        return (
          <line
            key={`ext-${angle}`}
            x1={bx} y1={by} x2={ex} y2={ey}
            stroke={color}
            strokeWidth={spokeW * 0.7}
            opacity={0.5}
            strokeLinecap="round"
          />
        );
      })}

      {/* Hub — solid center */}
      <circle cx={c} cy={c} r={hubR} fill={color} opacity={0.9} />

      {/* Hub inner dot */}
      <circle cx={c} cy={c} r={hubR * 0.4} fill="none" stroke="white" strokeWidth={size * 0.015} opacity={0.5} />
    </svg>
  );
}
