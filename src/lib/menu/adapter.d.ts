export interface MDCMenuAdapter {
  addClass: (className: string) => void;
  removeClass: (className: string) => void;
  hasClass: (className: string) => boolean;
  hasNecessaryDom: () => boolean;
  getAttributeForEventTarget: (target: EventTarget, attributeName: string) => string;
  eventTargetHasClass: (target: HTMLElement, className: string) => boolean;
  getInnerDimensions: () => { width: number, height: number };
  hasAnchor: () => boolean;
  getAnchorDimensions: () => { width: number, height: number, top: number, right: number, bottom: number, left: number };
  getWindowDimensions: () => { width: number, height: number };
  setScale: (x: number, y: number) => void;
  setInnerScale: (x: number, y: number) => void;
  getNumberOfItems: () => number;
  registerInteractionHandler: (type: string, handler: EventListener) => void;
  deregisterInteractionHandler: (type: string, handler: EventListener) => void;
  registerBodyClickHandler: (handler: EventListener) => void;
  deregisterBodyClickHandler: (handler: EventListener) => void;
  getYParamsForItemAtIndex: (index: number) => { top: number, height: number };
  setTransitionDelayForItemAtIndex: (index: number, value: string) => void;
  getIndexForEventTarget: (target: EventTarget) => number;
  notifySelected: (evtData: { index: number }) => void;
  notifyCancel: () => void;
  saveFocus: () => void;
  restoreFocus: () => void;
  isFocused: () => boolean;
  focus: () => void;
  getFocusedItemIndex: () => number;
  focusItemAtIndex: (index: number) => void;
  isRtl: () => boolean;
  setTransformOrigin: (origin: string) => void;
  setPosition: (position: { top: string, right: string, bottom: string, left: string }) => void;
  getAccurateTime: () => number;
}
