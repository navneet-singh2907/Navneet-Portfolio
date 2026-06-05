void main() {
  // Distance from center of point sprite (gl_PointCoord is 0..1)
  float dist = length(gl_PointCoord - vec2(0.5));

  // Discard pixels outside the circle — no square particles
  if (dist > 0.5) discard;

  // Soft falloff: bright core, transparent edge
  float alpha = 1.0 - smoothstep(0.1, 0.5, dist);

  gl_FragColor = vec4(0.0, 0.85, 1.0, alpha);
}
