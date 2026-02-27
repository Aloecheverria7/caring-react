const gold = '#d6a84f';
const blue = '#1f3b4d';
const R = 36; // circle radius = viewBox center

const BgCircle = () => (
    <circle cx={R} cy={R} r={R} fill={blue} />
);

/* ── Stethoscope ─────────────────────────────────────────────── */
export function CnaIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BgCircle />
            {/* Ear tips – short angled bars */}
            <line x1="16" y1="19" x2="23" y2="19" stroke={gold} strokeWidth="3" strokeLinecap="round" />
            <line x1="49" y1="19" x2="56" y2="19" stroke={gold} strokeWidth="3" strokeLinecap="round" />
            {/* Ear tubes curving inward to Y join */}
            <path d="M19 19 L19 27 Q19 33 28 33" stroke={gold} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M53 19 L53 27 Q53 33 44 33" stroke={gold} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Main tube: Y-join → down → curve to chest piece */}
            <path d="M28 33 Q36 33 36 39 L36 49 Q36 57 46 57" stroke={gold} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Chest piece – diaphragm */}
            <circle cx="46" cy="57" r="6" stroke={gold} strokeWidth="2.5" fill="none" />
            <circle cx="46" cy="57" r="2.5" fill={gold} />
        </svg>
    );
}

/* ── House with Heart ────────────────────────────────────────── */
export function HomemakerIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BgCircle />
            {/* Roof */}
            <path d="M14 35 L36 14 L58 35" stroke={gold} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Walls */}
            <path d="M20 35 L20 56 L52 56 L52 35" stroke={gold} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Heart inside house – filled */}
            <path d="M36 43
                     C36 41 33.5 38.5 30.5 40
                     C27.5 41.5 27.5 45 30.5 47.5
                     L36 53
                     L41.5 47.5
                     C44.5 45 44.5 41.5 41.5 40
                     C38.5 38.5 36 41 36 43 Z"
                fill={gold} />
        </svg>
    );
}

/* ── Medical Cross (RN) ──────────────────────────────────────── */
export function RnIcon() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <BgCircle />
            {/* Vertical bar */}
            <rect x="30" y="16" width="12" height="40" rx="3" fill={gold} />
            {/* Horizontal bar */}
            <rect x="16" y="30" width="40" height="12" rx="3" fill={gold} />
            {/* Small inner circle for depth */}
            <circle cx="36" cy="36" r="5" fill={blue} />
            <circle cx="36" cy="36" r="2.5" fill={gold} />
        </svg>
    );
}
