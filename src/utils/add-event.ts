/**
 * Add event
 * @param eventCategory
 * @param eventName
 */
export function addEvent(eventCategory: string, eventName: string) {
  window.wcs.event(eventCategory, eventName);
}
