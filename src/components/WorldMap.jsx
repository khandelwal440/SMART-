import { LAND, MAP } from '../data/worldDots.js';
import { useInView } from './Reveal.jsx';

const CELL = 10; // svg units per grid cell

// Pre-compute the dot positions once (module scope) – ~1.7k circles.
const DOTS = [];
LAND.forEach((row, r) => {
  for (let c = 0; c < row.length; c++) if (row[c] === '1') DOTS.push([c * CELL + CELL / 2, r * CELL + CELL / 2]);
});

/** Equirectangular lat/lon -> svg coordinates matching the dot grid. */
function project(lat, lon) {
  const x = ((lon + 180) / 360) * MAP.cols * CELL;
  const y = ((MAP.latTop - lat) / (MAP.latTop - MAP.latBottom)) * MAP.rows * CELL;
  return [x, y];
}

// Label placement per marker so names don't collide around the Gulf / India.
const LABEL_POS = {
  UK: { dx: 0, dy: -18, anchor: 'middle' },
  UAE: { dx: -14, dy: -12, anchor: 'end' },
  India: { dx: 0, dy: 26, anchor: 'middle' },
  Singapore: { dx: 14, dy: 4, anchor: 'start' },
  Africa: { dx: 0, dy: 26, anchor: 'middle' },
};

/** Dotted world map with gold office markers. */
export default function WorldMap({ markers, className = '' }) {
  const [ref, inView] = useInView();
  const width = MAP.cols * CELL;
  const height = MAP.rows * CELL;
  const names = markers.map((m) => m.label).join(', ');

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      className={`${inView ? 'map-in' : ''} ${className}`}
      role="img"
      aria-label={`World map showing SMARTANK in ${names}`}
    >
      {/* dots sweep in left to right; markers pop in afterwards, one by one */}
      <g className="map-dots" fill="#ffffff" fillOpacity="0.16">
        {DOTS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={3.2} />
        ))}
      </g>
      {markers.map((m, i) => {
        const [x, y] = project(m.lat, m.lon);
        const pos = LABEL_POS[m.label] || { dx: 0, dy: -16, anchor: 'middle' };
        return (
          <g key={m.label} className="map-marker" style={{ transitionDelay: inView ? `${1100 + i * 180}ms` : '0ms' }}>
            <circle cx={x} cy={y} r="16" fill="#F2C230" opacity="0.25">
              <animate attributeName="r" values="8;22;8" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0;0.45" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r="7" fill="#F2C230" stroke="#0B1F3A" strokeWidth="2.5" />
            <text x={x + pos.dx} y={y + pos.dy} textAnchor={pos.anchor} fill="#ffffff" fontSize="22" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
              {m.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
