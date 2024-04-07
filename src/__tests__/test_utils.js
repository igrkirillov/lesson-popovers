import {placements} from "../js/placements";

export function determinePlacement(ownerElement, widgetElement) {
  const ownerRect = ownerElement.getBoundingClientRect();
  const widgetRect = widgetElement.getBoundingClientRect();
  if (widgetRect.bottom <= ownerRect.top) {
    return placements.top;
  } else if (widgetRect.left >= ownerRect.right) {
    return placements.right;
  } else if (widgetRect.top >= ownerRect.bottom) {
    return placements.bottom;
  } else if (widgetRect.right <= ownerRect.left) {
    return placements.left;
  } else {
    return null;
  }
}
