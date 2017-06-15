goog.provide('acgraph.enums');


/**
 @namespace
 @name acgraph.enums
 */


/**
 Stage types supported by AnyChart Data Visualization Toolkit.
 @enum {string}
 */
acgraph.enums.StageType = {
  /**
   A vector drawing technology compatible with the majority of modern browsers (both desktop and mobile).
   It is used as the main drawing technology.<br/>
   See more at <a href="http://en.wikipedia.org/wiki/Scalable_Vector_Graphics" target="_blank">Wiki Page</a>
   */
  SVG: 'svg',

  /**
   A vector drawing technology compatible only with  Microsoft Internet Explorer (versions 6-8).
   It is used as an alternative for SVG because SVG is not supported by IE.<br/>
   See more at <a href="http://en.wikipedia.org/wiki/Vector_Markup_Language" target="_blank">Wiki Page</a>
   */
  VML: 'vml'
};


/**
 * Constants for event names.
 * @enum {string}
 */
acgraph.enums.EventType = {
  /** Fires on click on an element. */
  CLICK: 'click',

  /** Fires on double click on an element. */
  DBLCLICK: 'dblclick',

  /** Fires when the mouse is down on an element. */
  MOUSEDOWN: 'mousedown',

  /** Fires when the mouse is up on an element. */
  MOUSEUP: 'mouseup',

  /** Fires when the mouse pointer is over an element. */
  MOUSEOVER: 'mouseover',

  /** Fires when the mouse pointer is out of an element. */
  MOUSEOUT: 'mouseout',

  /** Fires when mouse is moved on an element. */
  MOUSEMOVE: 'mousemove',

  /** Fires on touchstart. */
  TOUCHSTART: 'touchstart',

  /** Fires on touchmove. */
  TOUCHMOVE: 'touchmove',

  /** Fires on touchend. */
  TOUCHEND: 'touchend',

  /**
   * Fires when the touch is cancelled.
   * @see http://www.w3.org/TR/2011/WD-touch-events-20110505/#the-touchcancel-event
   */
  TOUCHCANCEL: 'touchcancel',

  /** Fires on tap (fast touchstart - touchend). */
  TAP: 'tap',

  // The drag action was canceled before the START event. Possible reasons:
  // disabled dragger, dragging with the right mouse button or releasing the
  // button before reaching the hysteresis distance.
  /** Fires if drag action was canceled before the START event. */
  DRAG_EARLY_CANCEL: 'earlycancel',

  /** Fires before drag. */
  DRAG_BEFORE: 'beforedrag',

  /** Fires on drag. */
  DRAG: 'drag',

  /** Fires on drag start. */
  DRAG_START: 'start',

  /** Fires on drag end. */
  DRAG_END: 'end',

  CONTEXTMENU: 'contextmenu'
};