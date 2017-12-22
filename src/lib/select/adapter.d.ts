export interface MDCSelectAdapter {
  addClass: (className: string) => void;
  removeClass: (className: string) => void;
  addClassToLabel: (className: string) => void;
  removeClassFromLabel: (className: string) => void;
  addClassToBottomLine: (className: string) => void;
  removeClassFromBottomLine: (className: string) => void;
  setBottomLineAttr: (attr: string, value: string) => void;
  setAttr: (attr: string, value: string) => void;
  rmAttr: (attr: string) => void;
  computeBoundingRect: () => { left: number, top: number };
  registerInteractionHandler: (type: string, handler: EventListener) => void;
  deregisterInteractionHandler: (type: string, handler: EventListener) => void;
  focus: () => void;
  makeTabbable: () => void;
  makeUntabbable: () => void;
  getComputedStyleValue: (propertyName: string) => string;
  setStyle: (propertyName: string, value: string) => void;
  create2dRenderingContext: () => {
    font: string,
    measureText: (string) => { width: number }
  };
  setMenuElStyle: (propertyName: string, value: string) => void;
  setMenuElAttr: (attr: string, value: string) => void;
  rmMenuElAttr: (attr: string) => void;
  getMenuElOffsetHeight: () => number;
  openMenu: (focusIndex: number) => void;
  isMenuOpen: () => boolean;
  setSelectedTextContent: (textContent: string) => void;
  getNumberOfOptions: () => number;
  getTextForOptionAtIndex: (index: number) => string;
  getValueForOptionAtIndex: (index: number) => string;
  setAttrForOptionAtIndex: (index: number, attr: string, value: string) => void;
  rmAttrForOptionAtIndex: (index: number, attr: string) => void;
  getOffsetTopForOptionAtIndex: (index: number) => number;
  registerMenuInteractionHandler: (type: string, handler: EventListener) => void;
  deregisterMenuInteractionHandler: (type: string, handler: EventListener) => void;
  notifyChange: () => void;
  getWindowInnerHeight: () => number;
  addBodyClass: (className: string) => void;
  removeBodyClass: (className: string) => void;
}
