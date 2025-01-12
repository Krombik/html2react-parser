import type { ComponentType, JSXElementConstructor, ReactNode } from 'react';

/**
 * based on [this](https://github.com/facebook/react/blob/ab31a9ed28d340172440e4b12e27d2af689249b3/packages/react-dom-bindings/src/shared/possibleStandardNames.js#L11)
 */
type HTMLAttributes2ReactProps = {
  acceptcharset: 'acceptCharset';
  'accept-charset': 'acceptCharset';
  accesskey: 'accessKey';
  allowfullscreen: 'allowFullScreen';
  autocapitalize: 'autoCapitalize';
  autocomplete: 'autoComplete';
  autocorrect: 'autoCorrect';
  autofocus: 'autoFocus';
  autoplay: 'autoPlay';
  autosave: 'autoSave';
  cellpadding: 'cellPadding';
  cellspacing: 'cellSpacing';
  charset: 'charSet';
  class: 'className';
  classid: 'classID';
  classname: 'className';
  colspan: 'colSpan';
  contenteditable: 'contentEditable';
  contextmenu: 'contextMenu';
  controlslist: 'controlsList';
  crossorigin: 'crossOrigin';
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML';
  datetime: 'dateTime';
  defaultchecked: 'defaultChecked';
  defaultvalue: 'defaultValue';
  disablepictureinpicture: 'disablePictureInPicture';
  disableremoteplayback: 'disableRemotePlayback';
  enctype: 'encType';
  enterkeyhint: 'enterKeyHint';
  fetchpriority: 'fetchPriority';
  for: 'htmlFor';
  formmethod: 'formMethod';
  formaction: 'formAction';
  formenctype: 'formEncType';
  formnovalidate: 'formNoValidate';
  formtarget: 'formTarget';
  frameborder: 'frameBorder';
  hreflang: 'hrefLang';
  htmlfor: 'htmlFor';
  httpequiv: 'httpEquiv';
  'http-equiv': 'httpEquiv';
  imagesizes: 'imageSizes';
  imagesrcset: 'imageSrcSet';
  innerhtml: 'innerHTML';
  inputmode: 'inputMode';
  itemid: 'itemID';
  itemprop: 'itemProp';
  itemref: 'itemRef';
  itemscope: 'itemScope';
  itemtype: 'itemType';
  keyparams: 'keyParams';
  keytype: 'keyType';
  marginwidth: 'marginWidth';
  marginheight: 'marginHeight';
  maxlength: 'maxLength';
  mediagroup: 'mediaGroup';
  minlength: 'minLength';
  nomodule: 'noModule';
  novalidate: 'noValidate';
  playsinline: 'playsInline';
  radiogroup: 'radioGroup';
  readonly: 'readOnly';
  referrerpolicy: 'referrerPolicy';
  rowspan: 'rowSpan';
  spellcheck: 'spellCheck';
  srcdoc: 'srcDoc';
  srclang: 'srcLang';
  srcset: 'srcSet';
  tabindex: 'tabIndex';
  usemap: 'useMap';
  accentheight: 'accentHeight';
  'accent-height': 'accentHeight';
  alignmentbaseline: 'alignmentBaseline';
  'alignment-baseline': 'alignmentBaseline';
  allowreorder: 'allowReorder';
  arabicform: 'arabicForm';
  'arabic-form': 'arabicForm';
  attributename: 'attributeName';
  attributetype: 'attributeType';
  autoreverse: 'autoReverse';
  basefrequency: 'baseFrequency';
  baselineshift: 'baselineShift';
  'baseline-shift': 'baselineShift';
  baseprofile: 'baseProfile';
  calcmode: 'calcMode';
  capheight: 'capHeight';
  'cap-height': 'capHeight';
  clippath: 'clipPath';
  'clip-path': 'clipPath';
  clippathunits: 'clipPathUnits';
  cliprule: 'clipRule';
  'clip-rule': 'clipRule';
  colorinterpolation: 'colorInterpolation';
  'color-interpolation': 'colorInterpolation';
  colorinterpolationfilters: 'colorInterpolationFilters';
  'color-interpolation-filters': 'colorInterpolationFilters';
  colorprofile: 'colorProfile';
  'color-profile': 'colorProfile';
  colorrendering: 'colorRendering';
  'color-rendering': 'colorRendering';
  contentscripttype: 'contentScriptType';
  contentstyletype: 'contentStyleType';
  diffuseconstant: 'diffuseConstant';
  dominantbaseline: 'dominantBaseline';
  'dominant-baseline': 'dominantBaseline';
  edgemode: 'edgeMode';
  enablebackground: 'enableBackground';
  'enable-background': 'enableBackground';
  externalresourcesrequired: 'externalResourcesRequired';
  fillopacity: 'fillOpacity';
  'fill-opacity': 'fillOpacity';
  fillrule: 'fillRule';
  'fill-rule': 'fillRule';
  filterres: 'filterRes';
  filterunits: 'filterUnits';
  floodopacity: 'floodOpacity';
  'flood-opacity': 'floodOpacity';
  floodcolor: 'floodColor';
  'flood-color': 'floodColor';
  fontfamily: 'fontFamily';
  'font-family': 'fontFamily';
  fontsize: 'fontSize';
  'font-size': 'fontSize';
  fontsizeadjust: 'fontSizeAdjust';
  'font-size-adjust': 'fontSizeAdjust';
  fontstretch: 'fontStretch';
  'font-stretch': 'fontStretch';
  fontstyle: 'fontStyle';
  'font-style': 'fontStyle';
  fontvariant: 'fontVariant';
  'font-variant': 'fontVariant';
  fontweight: 'fontWeight';
  'font-weight': 'fontWeight';
  glyphname: 'glyphName';
  'glyph-name': 'glyphName';
  glyphorientationhorizontal: 'glyphOrientationHorizontal';
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal';
  glyphorientationvertical: 'glyphOrientationVertical';
  'glyph-orientation-vertical': 'glyphOrientationVertical';
  glyphref: 'glyphRef';
  gradienttransform: 'gradientTransform';
  gradientunits: 'gradientUnits';
  horizadvx: 'horizAdvX';
  'horiz-adv-x': 'horizAdvX';
  horizoriginx: 'horizOriginX';
  'horiz-origin-x': 'horizOriginX';
  imagerendering: 'imageRendering';
  'image-rendering': 'imageRendering';
  kernelmatrix: 'kernelMatrix';
  kernelunitlength: 'kernelUnitLength';
  keypoints: 'keyPoints';
  keysplines: 'keySplines';
  keytimes: 'keyTimes';
  lengthadjust: 'lengthAdjust';
  letterspacing: 'letterSpacing';
  'letter-spacing': 'letterSpacing';
  lightingcolor: 'lightingColor';
  'lighting-color': 'lightingColor';
  limitingconeangle: 'limitingConeAngle';
  markerend: 'markerEnd';
  'marker-end': 'markerEnd';
  markerheight: 'markerHeight';
  markermid: 'markerMid';
  'marker-mid': 'markerMid';
  markerstart: 'markerStart';
  'marker-start': 'markerStart';
  markerunits: 'markerUnits';
  markerwidth: 'markerWidth';
  maskcontentunits: 'maskContentUnits';
  maskunits: 'maskUnits';
  numoctaves: 'numOctaves';
  overlineposition: 'overlinePosition';
  'overline-position': 'overlinePosition';
  overlinethickness: 'overlineThickness';
  'overline-thickness': 'overlineThickness';
  paintorder: 'paintOrder';
  'paint-order': 'paintOrder';
  'panose-1': 'panose1';
  pathlength: 'pathLength';
  patterncontentunits: 'patternContentUnits';
  patterntransform: 'patternTransform';
  patternunits: 'patternUnits';
  pointerevents: 'pointerEvents';
  'pointer-events': 'pointerEvents';
  pointsatx: 'pointsAtX';
  pointsaty: 'pointsAtY';
  pointsatz: 'pointsAtZ';
  preservealpha: 'preserveAlpha';
  preserveaspectratio: 'preserveAspectRatio';
  primitiveunits: 'primitiveUnits';
  refx: 'refX';
  refy: 'refY';
  renderingintent: 'renderingIntent';
  'rendering-intent': 'renderingIntent';
  repeatcount: 'repeatCount';
  repeatdur: 'repeatDur';
  requiredextensions: 'requiredExtensions';
  requiredfeatures: 'requiredFeatures';
  shaperendering: 'shapeRendering';
  'shape-rendering': 'shapeRendering';
  specularconstant: 'specularConstant';
  specularexponent: 'specularExponent';
  spreadmethod: 'spreadMethod';
  startoffset: 'startOffset';
  stddeviation: 'stdDeviation';
  stitchtiles: 'stitchTiles';
  stopcolor: 'stopColor';
  'stop-color': 'stopColor';
  stopopacity: 'stopOpacity';
  'stop-opacity': 'stopOpacity';
  strikethroughposition: 'strikethroughPosition';
  'strikethrough-position': 'strikethroughPosition';
  strikethroughthickness: 'strikethroughThickness';
  'strikethrough-thickness': 'strikethroughThickness';
  strokedasharray: 'strokeDasharray';
  'stroke-dasharray': 'strokeDasharray';
  strokedashoffset: 'strokeDashoffset';
  'stroke-dashoffset': 'strokeDashoffset';
  strokelinecap: 'strokeLinecap';
  'stroke-linecap': 'strokeLinecap';
  strokelinejoin: 'strokeLinejoin';
  'stroke-linejoin': 'strokeLinejoin';
  strokemiterlimit: 'strokeMiterlimit';
  'stroke-miterlimit': 'strokeMiterlimit';
  strokewidth: 'strokeWidth';
  'stroke-width': 'strokeWidth';
  strokeopacity: 'strokeOpacity';
  'stroke-opacity': 'strokeOpacity';
  suppresscontenteditablewarning: 'suppressContentEditableWarning';
  suppresshydrationwarning: 'suppressHydrationWarning';
  surfacescale: 'surfaceScale';
  systemlanguage: 'systemLanguage';
  tablevalues: 'tableValues';
  targetx: 'targetX';
  targety: 'targetY';
  textanchor: 'textAnchor';
  'text-anchor': 'textAnchor';
  textdecoration: 'textDecoration';
  'text-decoration': 'textDecoration';
  textlength: 'textLength';
  textrendering: 'textRendering';
  'text-rendering': 'textRendering';
  transformorigin: 'transformOrigin';
  'transform-origin': 'transformOrigin';
  underlineposition: 'underlinePosition';
  'underline-position': 'underlinePosition';
  underlinethickness: 'underlineThickness';
  'underline-thickness': 'underlineThickness';
  unicodebidi: 'unicodeBidi';
  'unicode-bidi': 'unicodeBidi';
  unicoderange: 'unicodeRange';
  'unicode-range': 'unicodeRange';
  unitsperem: 'unitsPerEm';
  'units-per-em': 'unitsPerEm';
  valphabetic: 'vAlphabetic';
  'v-alphabetic': 'vAlphabetic';
  vectoreffect: 'vectorEffect';
  'vector-effect': 'vectorEffect';
  vertadvy: 'vertAdvY';
  'vert-adv-y': 'vertAdvY';
  vertoriginx: 'vertOriginX';
  'vert-origin-x': 'vertOriginX';
  vertoriginy: 'vertOriginY';
  'vert-origin-y': 'vertOriginY';
  vhanging: 'vHanging';
  'v-hanging': 'vHanging';
  videographic: 'vIdeographic';
  'v-ideographic': 'vIdeographic';
  viewbox: 'viewBox';
  viewtarget: 'viewTarget';
  vmathematical: 'vMathematical';
  'v-mathematical': 'vMathematical';
  wordspacing: 'wordSpacing';
  'word-spacing': 'wordSpacing';
  writingmode: 'writingMode';
  'writing-mode': 'writingMode';
  xchannelselector: 'xChannelSelector';
  xheight: 'xHeight';
  'x-height': 'xHeight';
  xlinkactuate: 'xlinkActuate';
  'xlink:actuate': 'xlinkActuate';
  xlinkarcrole: 'xlinkArcrole';
  'xlink:arcrole': 'xlinkArcrole';
  xlinkhref: 'xlinkHref';
  'xlink:href': 'xlinkHref';
  xlinkrole: 'xlinkRole';
  'xlink:role': 'xlinkRole';
  xlinkshow: 'xlinkShow';
  'xlink:show': 'xlinkShow';
  xlinktitle: 'xlinkTitle';
  'xlink:title': 'xlinkTitle';
  xlinktype: 'xlinkType';
  'xlink:type': 'xlinkType';
  xmlbase: 'xmlBase';
  'xml:base': 'xmlBase';
  xmllang: 'xmlLang';
  'xml:lang': 'xmlLang';
  'xml:space': 'xmlSpace';
  xmlnsxlink: 'xmlnsXlink';
  'xmlns:xlink': 'xmlnsXlink';
  xmlspace: 'xmlSpace';
  ychannelselector: 'yChannelSelector';
  zoomandpan: 'zoomAndPan';
};

type RemoveFunctions<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any
    ? never
    : T[K] extends string
      ? never
      : K]: T[K];
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type IntrinsicElements = {
  [key in CommonComponent]: Omit<
    RemoveFunctions<Required<JSX.IntrinsicElements[key]>>,
    'ref' | 'key' | 'dangerouslySetInnerHTML' | 'children'
  >;
};

type BasicProps = Partial<
  UnionToIntersection<IntrinsicElements[CommonComponent]>
>;

type Converters = {
  [key in keyof BasicProps]?: (value: string, tag: string) => BasicProps[key];
} & {
  [key: string]: (value: string, tag: string) => any;
};

type CommonComponent = keyof JSX.IntrinsicElements;

export type AnyComponent = ComponentType<Record<string, any>> | CommonComponent;

export type Segment = Exclude<ReactNode, Iterable<ReactNode>> | string;

export type HTML2ReactProps = {
  /** The HTML content to be converted to React components. */
  html: string;
  /**
   * Custom tag components to replace HTML tags. If a component is not provided, the corresponding HTML tag will be used.
   * > keys are not case sensetive,
   */
  components?: Partial<Record<CommonComponent, AnyComponent>> &
    Record<string, AnyComponent>;
  /** Map HTML attributes to corresponding React props. If the attribute is not specified, it will be passed as is. */
  attributes?: Partial<HTMLAttributes2ReactProps> & Record<string, string>;
  /** Converters for processing attribute values. If no converter is provided, the property will be of type string. */
  converters?: Converters;
  /**
   * Process text segments within the HTML content.
   * @param segment - The text segment to be processed.
   * @param parentMeta - available only if {@link HTML2ReactProps.withMeta withMeta} is `true`
   * @returns The processed text segment.
   */
  processTextSegment?(segment: string, parentMeta: Meta): Segment | Segment[];
  /**
   * Returns a component for the given {@link tag}. If it returns `undefined`, the {@link tag} will be used as a component.
   *
   * This function will be called if the {@link tag} is not found in the {@link HTML2ReactProps.components components}.
   *
   * @param tag - The HTML tag for which to retrieve a component.
   * @returns The component associated with the given {@link tag}, or `undefined` if not found.
   */
  getComponent?(tag: string): AnyComponent | undefined;
  /**
   * Determines if a {@link tag} should be ignored based on the tag name and its {@link props}.
   */
  shouldBeIgnored?(tag: string, props: Record<string, any>): boolean;
  /**
   * If `true`, adds metadata to each component in the form of a {@link Meta _meta} prop, allowing for additional contextual information.
   */
  withMeta?: boolean;
};

export type MetaChildren = Array<Meta | undefined>;

export type Meta = {
  index: number;
  children?: MetaChildren;
} & (
  | {
      type?: undefined;
      parent?: undefined;
    }
  | {
      type: String | CommonComponent | JSXElementConstructor<any>;
      parent: Meta;
    }
);

export type MetaProps = { _meta: Meta };
