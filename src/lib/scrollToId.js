/**
 * Scroll the window (vertically only) so the element with `id` sits just
 * below the fixed header.
 *
 * Don't use element.scrollIntoView() here: it also scrolls clipped ancestors
 * sideways to reach elements that are still translated off-screen by a
 * slide-in animation, which shifted the whole Services page left.
 */
export function scrollToId(id, behavior = 'smooth') {
  const el = document.getElementById(id);
  if (!el) return false;
  const header = document.querySelector('header');
  const offset = (header ? header.getBoundingClientRect().height : 0) + 16;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}
