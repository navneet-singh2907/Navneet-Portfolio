import { PARTICLE_COUNT } from './createParticleGeometry.js'

const W = 1200
const H = 340

export const SEQUENCES = [
  ['Welcome'],                   // line 1 appears first
  ['Welcome to', 'My Portfolio'],   // line 2 joins 1 second later
  ['Navneet Is a', 'AI Engineer'],
  ['Software', 'Engineer'],
  ['Architecting', 'Agentic Era'],
]

export function textPositions(lines) {
  const canvas = document.createElement('canvas')
  canvas.width  = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, W, H)
  ctx.fillStyle    = '#ffffff'
  ctx.textAlign    = 'center'
  ctx.textBaseline = 'middle'

  if (lines.length === 1) {
    ctx.font = 'bold 150px Arial'
    ctx.fillText(lines[0], W / 2, H / 2)
  } else {
    const fontSize  = lines.length === 2 ? 115 : 90
    const lineGap   = fontSize * 1.25
    const totalH    = lineGap * (lines.length - 1)
    const startY    = H / 2 - totalH / 2
    ctx.font = `bold ${fontSize}px Arial`
    lines.forEach((line, i) => ctx.fillText(line, W / 2, startY + i * lineGap))
  }

  const { data } = ctx.getImageData(0, 0, W, H)
  const litPixels = []
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4] > 128) litPixels.push(x, y)
    }
  }

  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const total = litPixels.length / 2

  // Guard: if canvas produced no lit pixels fall back to a random scatter
  // so the GPU buffer never receives NaN values
  if (total === 0) {
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) positions[i] = (Math.random() - 0.5) * 9
    return positions
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const pick = Math.floor(Math.random() * total) * 2
    const i3   = i * 3
    positions[i3]     =  (litPixels[pick]     / W - 0.5) * 9
    positions[i3 + 1] = -(litPixels[pick + 1] / H - 0.5) * 3.2
    positions[i3 + 2] =  (Math.random() - 0.5) * 0.4
  }

  return positions
}

// Pre-generate all sequence targets once at module load
export const SEQUENCE_POSITIONS = SEQUENCES.map(textPositions)
