// tslint:disable:class-name

export type BackgroundAttachment = 'scroll' | 'fixed' | 'inherit';
export type BackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'inherit';
export type BorderStyle = 'inherit' | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
export type Conditionality = 'retain' | 'discard';
export type Precedence = 'true' | 'false' | 'inherit';
export type MediaUsage = 'auto' | 'paginate' | 'bounded-in-one-dimension' | 'unbounded';
export type CaptionSide = 'before' | 'after' | 'start' | 'end' | 'top' | 'bottom' | 'left' | 'right' | 'inherit';
export type Direction = 'ltr' | 'rtl' | 'inherit';
export type EmptyCells = 'show' | 'hide' | 'inherit';
export type RenderingIntent = 'auto' | 'perceptual' | 'relative-colorimetric' | 'saturation' | 'absolute-colorimetric' | 'inherit';
export type font_selection_strategy_Type = ('auto' | 'character-by-character' | 'inherit');
export type font_stretch_Type = ('normal' | 'wider' | 'narrower' | 'ultra-condensed' | 'extra-condensed' | 'condensed'
    | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded' | 'inherit');
export type font_style_Type = ('normal' | 'italic' | 'oblique' | 'backslant' | 'inherit');
export type font_variant_Type = ('normal' | 'small-caps' | 'inherit');
export type FontWeight = number | 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'inherit';
export type hyphenation_keep_Type = ('auto' | 'column' | 'page' | 'inherit');
export type displace_Type = ('inherit' | 'auto' | 'none' | 'line' | 'indent' | 'block');
export type letter_value_Type = ('auto' | 'alphabetic' | 'traditional');
export type line_height_shift_adjustment_Type = ('consider-shifts' | 'disregard-shifts' | 'inherit');
export type line_stacking_strategy_Type = ('line-height' | 'font-height' | 'max-height' | 'inherit');
/** property is not implemented yet */
export type linefeed_treatment_Type = ('ignore' | 'preserve' | 'treat-as-space' | 'treat-as-zero-width-space' | 'inherit');
export type border_collapse_Type = ('collapse' | 'separate' | 'inherit');
export type no_limit_Type = 'no-limit';
export type none_Type = 'none';
export type normal_Type = 'normal';
export type OddOrEven = 'odd' | 'even' | 'any' | 'inherit';
export type once_Type = 'once';
export type orientation_Type = ('inherit' | '0' | '90' | '180' | '270' | '-90' | '-180' | '-270' | '0deg' | '90deg'
    | '180deg' | '270deg' | '-90deg' | '-180deg' | '-270deg');
export type Overflow = 'auto' | 'visible' | 'hidden' | 'scroll' | 'error-if-overflow' | 'inherit';
export type PageBreakAfter = 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'inherit';
export type PageBreakInside = 'auto' | 'avoid' | 'inherit';
export type page_position_Type = ('first' | 'last' | 'rest' | 'any' | 'inherit');
export type rule_style_Type = ('none' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inherit');
export type scale_to_fit_Type = 'scale-to-fit';
export type ScalingMethod = 'auto' | 'integer-pixels' | 'resample-any-method' | 'inherit';
export type Scaling = 'uniform' | 'non-uniform' | 'inherit';
export type score_spaces_Type = ('true' | 'false' | 'inherit');
export type ShowDestination = 'replace' | 'new';
export type text_align_last_Type = ('start' | 'center' | 'end' | 'justify' | 'inside' | 'outside' | 'left' | 'right' | 'inherit');
export type text_align_Type = ('start' | 'center' | 'end' | 'justify' | 'inside' | 'outside' | 'left' | 'right' | 'inherit');
/** not implemented */
export type TextDecoration = 'none' | 'underline' | 'no-underline' | 'overline' | 'no-overline' | 'line-through'
    | 'no-line-through' | 'blink' | 'no-blink' | 'inherit';
export type text_transform_Type = ('capitalize' | 'uppercase' | 'lowercase' | 'none' | 'inherit');
export type transparent_Type = 'transparent';
export type TreatAsWordSpace = 'auto' | 'true' | 'false' | 'inherit';
export type UnicodeBidi = 'normal' | 'embed' | 'bidi-override' | 'inherit';
export type use_font_metrics_Type = 'use-font-metrics';
export type vertical_align_base_Type = ('baseline' | 'middle' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'top' | 'bottom' | 'inherit');
export type vertical_position_Type = ('top' | 'center' | 'bottom');
/** property is not implemented yet */
export type visibility_Type = ('visible' | 'hidden' | 'collapse' | 'inherit');
export type white_space_collapse_Type = ('false' | 'true' | 'inherit');
/** property ignored */
export type white_space_treatment_Type = ('ignore' | 'preserve' | 'ignore-if-before-linefeed'
    | 'ignore-if-after-linefeed' | 'ignore-if-surrounding-linefeed' | 'inherit');
export type white_space_Type = ('normal' | 'pre' | 'nowrap' | 'inherit');
export type width_Type = ('thin' | 'medium' | 'thick');
export type wrap_option_Type = ('no-wrap' | 'wrap' | 'inherit');
export type writing_mode_Type = ('lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit');
export type country_Type = ('none' | 'inherit' | 'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR'
    | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO'
    | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'TD'
    | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CY' | 'CZ' | 'DK'
    | 'DJ' | 'DM' | 'DO' | 'TP' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR'
    | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GN'
    | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IL' | 'IT'
    | 'JM' | 'JP' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY'
    | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT'
    | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ'
    | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH'
    | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'SH' | 'KN' | 'LC' | 'PM' | 'VC' | 'WS' | 'SM'
    | 'ST' | 'SA' | 'SN' | 'SC' | 'SL' | 'SG' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'ES' | 'LK' | 'SD' | 'SR'
    | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM'
    | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF'
    | 'EH' | 'YE' | 'YU' | 'ZM' | 'ZW');
export type direction_Type = ('ltr' | 'rtl' | 'inherit');
export type display_align_Type = ('auto' | 'before' | 'center' | 'after' | 'inherit');
export type DominantBaseline = 'auto' | 'use-script' | 'no-change' | 'reset-size' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit';
export type elevation_Type = ('below' | 'level' | 'above' | 'higher' | 'lower' | '0' | '90' | '180' | '270' | '0deg'
    | '90deg' | '180deg' | '270deg' | 'inherit');
export type empty_cells_Type = ('show' | 'hide' | 'inherit');
export type EndsRow = 'true' | 'false';
export type force_page_count_Type = ('auto' | 'even' | 'odd' | 'end-on-even' | 'end-on-odd' | 'no-force' | 'inherit');
export type force_Type = 'force';
export type horizontal_position_Type = ('left' | 'center' | 'right');
export type hyphenate_Type = ('false' | 'true' | 'inherit');
export type indicate_destination_Type = ('true' | 'false');
export type inherit_Type = 'inherit';
export type language_Type = ('none' | 'inherit' | 'AY' | 'GN' | 'QU' | 'DZ' | 'MY' | 'KM' | 'ZH' | 'JA' | 'KO' | 'LO'
    | 'TH' | 'BO' | 'VI' | 'LV' | 'LT' | 'EU' | 'BR' | 'GA' | 'GD' | 'CY' | 'KN' | 'ML' | 'TA' | 'TE' | 'KL' | 'IK' | 'ET'
    | 'FI' | 'HU' | 'AF' | 'DA' | 'NL' | 'EN' | 'FO' | 'FY' | 'DE' | 'IS' | 'NO' | 'SV' | 'YI' | 'OM' | 'AA' | 'SO' | 'AB'
    | 'KA' | 'AS' | 'BN' | 'BH' | 'GU' | 'HI' | 'KS' | 'MR' | 'NE' | 'OR' | 'PA' | 'SA' | 'SD' | 'SI' | 'UR' | 'SQ' | 'HY'
    | 'EO' | 'IA' | 'IE' | 'VO' | 'KU' | 'PS' | 'FA' | 'TG' | 'EL' | 'LA' | 'HA' | 'RW' | 'RN' | 'LN' | 'SG' | 'ST' | 'TN'
    | 'SN' | 'SS' | 'SW' | 'TS' | 'TW' | 'WO' | 'XH' | 'YO' | 'ZU' | 'FJ' | 'ID' | 'JV' | 'MG' | 'MS' | 'MI' | 'SM' | 'SU'
    | 'TL' | 'TO' | 'CA' | 'CO' | 'FR' | 'GL' | 'IT' | 'MO' | 'OC' | 'PT' | 'RM' | 'RO' | 'ES' | 'AM' | 'AR' | 'HE' | 'MT'
    | 'TI' | 'BG' | 'BE' | 'HR' | 'CS' | 'MK' | 'PL' | 'RU' | 'SR' | 'SH' | 'SK' | 'SL' | 'UK' | 'AZ' | 'BA' | 'KK' | 'KY'
    | 'TT' | 'TR' | 'TK' | 'UZ' | 'BI' | 'MN' | 'NA');
export type leader_alignment_Type = ('none' | 'reference-area' | 'page' | 'inherit');
export type leader_pattern_Type = ('space' | 'rule' | 'dots' | 'use-content' | 'inherit');
export type position_Type = ('static' | 'relative' | 'absolute' | 'fixed' | 'inherit');
export type relative_align_Type = ('before' | 'baseline' | 'inherit');
export type RelativePosition = 'static' | 'relative' | 'inherit';
/* A  keyword is interpreted relative to the table of font sizes and the font size of the parent element.
 * Possible values are: [ larger | smaller ] For example, if the parent element has a font size of "medium",
 * a value of "larger" will make the font size of the current element be "large". If the parent element's size is
 * not close to a table entry, the user agent is free to interpolate between table entries or round off to the closest one.
 * The user agent may have to extrapolate table values if the numerical value goes beyond the keywords. */
export type relative_size_Type = ('larger' | 'smaller');
export type Span = 'none' | 'all' | 'inherit';
export type speak_header_Type = ('once' | 'always' | 'inherit');
export type speak_numeral_Type = ('digits' | 'continuous' | 'inherit');
export type speak_Type = ('normal' | 'none' | 'spell-out' | 'inherit');
export type speech_rate_base_Type = ('x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast' | 'faster' | 'slower' | 'inherit');
export type StartingState = 'show' | 'hide';
export type StartsRow = 'true' | 'false';
export type box_alignment_Type = ('top' | 'text-top' | 'bottom' | 'text-bottom');
export type Breaks = 'inherit' | 'auto' | 'column' | 'page' | 'even-page' | 'odd-page';
export type caption_side_Type = ('before' | 'after' | 'start' | 'end' | 'top' | 'bottom' | 'left' | 'right' | 'inherit');
export type AbsolutePosition = 'auto' | 'absolute' | 'fixed' | 'inherit';
export type page_break_after_Type = ('auto' | 'always' | 'avoid' | 'left' | 'right' | 'inherit');
export type page_break_inside_Type = ('auto' | 'avoid' | 'inherit');

export interface AccessibilityProperties_unsupported_by_FOP {
    sourceDocument?: string;
    role?: string;
}

export interface AccessibilityProperties {}

export interface BorderProperties {
    border?: string;

    borderAfterColor?: string;
    borderAfterStyle?: BorderStyle;
    borderAfterWidth?: string;
    borderAfterWidthConditionality?: Conditionality;
    borderAfterWidthLength?: string;

    borderBeforeColor?: string;
    borderBeforeStyle?: BorderStyle;
    borderBeforeWidth?: string;
    borderBeforeWidthConditionality?: Conditionality;
    borderBeforeWidthLength?: string;

    borderBottomColor?: string;
    borderBottomStyle?: BorderStyle;
    borderBottomWidth?: string;
    borderBottomWidthConditionality?: Conditionality;
    borderBottomWidthLength?: string;

    borderEndColor?: string;
    borderEndStyle?: BorderStyle;
    borderEndWidth?: string;
    borderEndWidthConditionality?: Conditionality;
    borderEndWidthLength?: string;

    borderLeftColor?: string;
    borderLeftStyle?: BorderStyle;
    borderLeftWidth?: string;
    borderLeftWidthConditionality?: Conditionality;
    borderLeftWidthLength?: string;

    borderRightColor?: string;
    borderRightStyle?: BorderStyle;
    borderRightWidth?: string;
    borderRightWidthConditionality?: Conditionality;
    borderRightWidthLength?: string;

    borderStartColor?: string;
    borderStartStyle?: BorderStyle;
    borderStartWidth?: string;
    borderStartWidthConditionality?: Conditionality;
    borderStartWidthLength?: string;

    borderTopColor?: string;
    borderTopStyle?: BorderStyle;
    borderTopWidth?: string;
    borderTopWidthConditionality?: Conditionality;
    borderTopWidthLength?: string;
}

export interface BorderPrecedenceProperties {
    borderAfterPrecedence?: Precedence;
    borderBeforePrecedence?: Precedence;
    borderEndPrecedence?: Precedence;
    borderStartPrecedence?: Precedence;
}

export interface PaddingProperties {
    padding?: string;
    paddingAfter?: string;
    paddingAfterConditionality?: Conditionality;
    paddingAfterLength?: string;
    paddingBefore?: string;
    paddingBeforeConditionality?: Conditionality;
    paddingBeforeLength?: string;
    paddingBottom?: string;
    paddingBottomConditionality?: Conditionality;
    paddingBottomLength?: string;
    paddingEnd?: string;
    paddingEndConditionality?: Conditionality;
    paddingEndLength?: string;
    paddingLeft?: string;
    paddingLeftConditionality?: Conditionality;
    paddingLeftLength?: string;
    paddingRight?: string;
    paddingRightConditionality?: Conditionality;
    paddingRightLength?: string;
    paddingStart?: string;
    paddingStartConditionality?: Conditionality;
    paddingStartLength?: string;
    paddingTop?: string;
    paddingTopConditionality?: Conditionality;
    paddingTopLength?: string;
}

export interface BackgroundProperties_unsupported_by_FOP {
    backgroundAttachment?: BackgroundAttachment;
    backgroundImage?: string;
    backgroundPositionHorizontal?: string;
    backgroundPositionVertical?: string;
    backgroundRepeat?: BackgroundRepeat;
}

export interface BackgroundProperties {
    backgroundColor?: string;
}

export interface BorderPaddingAndBackgroundProperties extends BorderProperties, PaddingProperties, BackgroundProperties {}

export interface InheritableProperties_unsupported_by_FOP {
    autoRestore?: boolean;
    background?: string;
    borderSpacing?: string;
    captionSide?: CaptionSide;

    direction?: Direction;
    emptyCells?: EmptyCells;
    font?: string;
    fontSelectionStrategy?: font_selection_strategy_Type;

    fontSizeAdjust?: string;
    fontStretch?: string;
    fontVariant?: font_variant_Type;
    glyphOrientationHorizontal?: orientation_Type;

    glyphOrientationVertical?: orientation_Type;
    hyphenationKeep?: hyphenation_keep_Type;
    hyphenationLadderCount?: string;
    intrusionDisplace?: displace_Type;

    lastLineEndIndent?: string;
    lineHeightShiftAdjustment?: line_height_shift_adjustment_Type;
    lineStackingStrategy?: line_stacking_strategy_Type;
    linefeedTreatment?: linefeed_treatment_Type;

    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;

    pageBreakInside?: page_break_inside_Type;
    referenceOrientation?: orientation_Type;
    scoreSpaces?: score_spaces_Type;
    script?: string;

    textTransform?: text_transform_Type;
    visibility?: visibility_Type;

    wordSpacing?: string;
    writingMode?: writing_mode_Type;
}

export interface InheritableProperties {
    borderBottom?: string;
    borderCollapse?: border_collapse_Type;
    borderColor?: string;
    borderLeft?: string;
    borderRight?: string;
    borderSeparation?: string;
    borderStyle?: string;
    borderTop?: string;
    borderWidth?: string;
    color?: string;
    country?: country_Type;
    displayAlign?: display_align_Type;
    endIndent?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: font_style_Type;
    fontWeight?: FontWeight;
    hyphenate?: hyphenate_Type;
    hyphenationCharacter?: string;
    hyphenationPushCharacterCount?: string;
    hyphenationRemainCharacterCount?: string;
    keepTogether?: string;
    keepTogetherWithinColumn?: string;
    keepTogetherWithinLine?: string;
    keepTogetherWithinPage?: string;
    language?: language_Type;
    leaderAlignment?: leader_alignment_Type;
    leaderLength?: string;
    leaderLengthMaximum?: string;
    leaderLengthMinimum?: string;
    leaderLengthOptimum?: string;
    leaderPattern?: leader_pattern_Type;
    leaderPatternWidth?: string;
    letterSpacing?: string;
    lineHeight?: string;
    margin?: string;
    orphans?: string;
    position?: position_Type;
    provisionalDistanceBetweenStarts?: string;
    provisionalLabelSeparation?: string;
    relativeAlign?: relative_align_Type;
    ruleStyle?: rule_style_Type;
    ruleThickness?: string;
    startIndent?: string;
    textAlign?: text_align_Type;
    textAlignLast?: text_align_last_Type;
    textIndent?: string;
    whiteSpace?: white_space_Type;
    whiteSpaceTreatment?: white_space_treatment_Type;
    whiteSpaceCollapse?: white_space_collapse_Type;
    widows?: string;
    wrapOption?: wrap_option_Type;
}

export interface MarginPropertiesBasic {
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
}

export interface MarginPropertiesVerticalSpace {
    spaceBeforeOptimum?: string;
    spaceAfterOptimum?: string;
}

export interface MarginPropertiesVerticalSpace_unsupported_by_FOP {
    spaceAfter?: string;
    spaceAfterConditionality?: Conditionality;
    spaceAfterMaximum?: string;
    spaceAfterMinimum?: string;
    spaceAfterPrecedence?: string;
    spaceBefore?: string;
    spaceBeforeConditionality?: Conditionality;
    spaceBeforeMaximum?: string;
    spaceBeforeMinimum?: string;
    spaceBeforePrecedence?: string;
}

export interface MarginPropertiesHorizontalSpace {}

export interface MarginPropertiesHorizontalSpace_unsupported_by_FOP {
    spaceEnd?: string;
    spaceEndConditionality?: Conditionality;
    spaceEndMaximum?: string;
    spaceEndMinimum?: string;
    spaceEndOptimim?: string;
    spaceEndPrecedence?: string;
    spaceStart?: string;
    spaceStartConditionality?: Conditionality;
    spaceStartMaximum?: string;
    spaceStartMinimum?: string;
    spaceStartOptimum?: string;
    spaceStartPrecedence?: string;
}

export interface MarginPropertiesBlock extends MarginPropertiesBasic, MarginPropertiesVerticalSpace {}

export interface MarginPropertiesInline extends MarginPropertiesBasic, MarginPropertiesHorizontalSpace {}

export interface ReferenceProperties {}

export interface ClipProperties {}

export interface ClipProperties_unsupported_by_FOP {
    clip?: string;
}

export interface BlockProperties_unsupported_by_FOP {
    pageBreakAfter?: page_break_after_Type;
    pageBreakBefore?: page_break_after_Type;
}

export interface BlockProperties {}

export interface AuralProperties_unsupported_by_FOP {
    azimuth?: string;
    cue?: string;
    cueAfter?: string;
    cueBefore?: string;
    elevation?: elevation_Type;
    pause?: string;
    pauseAfter?: string;
    pauseBefore?: string;
    pitch?: string;
    pitchRange?: string;
    playDuring?: string;
    richness?: string;
    speak?: string;
    speakHeader?: string;
    speakNumeral?: speak_numeral_Type;
    speakPunctuation?: string;
    speechRate?: string;
    stress?: string;
    voiceFamily?: string;
    volume?: string;
}

export interface AuralProperties {}

export interface FontProperties {
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: font_style_Type;
    fontWeight?: FontWeight;
}

export interface FontProperties_unsupported_by_FOP {
    font?: string;
    fontSelectionStrategy?: font_selection_strategy_Type;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontVariant?: font_variant_Type;
}

export interface RelativePositionProperties {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export interface RelativePositionProperties_unsupported_by_FOP {
    relativePosition?: RelativePosition;
}

export interface BreakProperties {
    breakAfter?: Breaks;
    breakBefore?: Breaks;
}

export interface TextOneProperties {}

export interface TextOneProperties_unsupported_by_FOP {
    textAltitude?: string;
    textDepth?: string;
}

export interface BlockHyphenationProperties {}

export interface BlockHyphenationProperties_unsupported_by_FOP {
    hyphenationKeep?: hyphenation_keep_Type;
    hyphenationLadderCount?: string;
}

export interface IntrusionDisplaceProperties {}
export interface IntrusionDisplaceProperties_unsupported_by_FOP {}

export interface KeepProperties {
    keepWithNext?: string;
}
export interface KeepProperties_unsupported_by_FOP {
    keepWithPrevious?: string;
}

export interface LineHeightProperties {}

export interface LineHeightProperties_unsupported_by_FOP {
    lineHeightShiftAdjustment?: line_height_shift_adjustment_Type;
    lineStackingStrategy?: line_stacking_strategy_Type;
}

export interface HyphenationProperties {}

export interface HyphenationProperties_unsupported_by_FOP {
    country?: country_Type;
    language?: language_Type;
    hyphenate?: hyphenate_Type;
    hyphenationCharacter?: string;
    hyphenationPushCharacterCount?: string;
    hyphenationRemainCharacterCount?: string;
}

export interface AbsolutePositionProperties {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export interface AbsolutePositionProperties_unsupported_by_FOP {
    absolutePosition?: AbsolutePosition;
}
export interface ProgressionProperties {}

export interface ProgressionProperties_unsupported_by_FOP {
    inlineProgressionDimension?: string;
    inlineProgressionDimensionMaximum?: string;
    inlineProgressionDimensionMinimum?: string;
    inlineProgressionDimensionOptimum?: string;
    blockProgressionDimension?: string;
    blockProgressionDimensionMaximum?: string;
    blockProgressionDimensionMinimum?: string;
    blockProgressionDimensionOptimum?: string;
}

export interface ListProperties {}

export interface ListProperties_unsupported_by_FOP {
    backgroundPosition?: string;
    pageBreakAfter?: page_break_after_Type;
    pageBreakBefore?: page_break_after_Type;
}

export type absolute_position_Type = ('auto' | 'absolute' | 'fixed' | 'inherit');

/* An  keyword refers to an entry in a table of font sizes computed and kept by the user agent.
 * Possible values are: [ xx-small | x-small | small | medium | large | x-large | xx-large ]
 * On a computer screen a scaling factor of 1.2 is suggested between adjacent indexes;
 * if the "medium" font is 12pt, the "large" font could be 14.4pt. Different media may need different scaling factors.
 * Also, the user agent should take the quality and availability of fonts into account when computing the table.
 * The table may be different from one font family to another. Note. In CSS1, the suggested scaling factor between
 * adjacent indexes was 1.5 which user experience proved to be too large. */
export type absolute_size_Type = ('xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large');
export type active_state_Type = ('link' | 'visited' | 'active' | 'hover' | 'focus');
export type alignment_Type = ('baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge'
    | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical');
export type always_Type = 'always';
export type auto_Type = 'auto';
export type azimuth_base_Type = ('left-side' | 'far-left' | 'left' | 'center-left' | 'center' | 'center-right' | 'right'
    | 'far-right' | 'right-side' | 'behind' | 'leftwards' | 'rightwards' | 'inherit');
export type background_image_Type = ('uri-specification' | 'none' | 'inherit');
export type background_position_base_Type = ('top left' | 'top center' | 'top right' | 'center left' | 'center center'
    | 'center right' | 'bottom left' | 'bottom center' | 'bottom right');
export type baseline_base_Type = ('baseline' | 'sub' | 'super');

export interface BasicLinkType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    KeepProperties,
    InheritableProperties {
    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    destinationPlacementOffset?: string;
    dominantBaseline?: DominantBaseline;
    externalDestination?: string;
    id?: string;
    indicateDestination?: indicate_destination_Type;
    internalDestination?: string;
    showDestination?: ShowDestination;
    targetPresentationContext?: string;
    targetProcessingContext?: string;
    targetStylesheet?: string;
    verticalAlign?: string;
}

export interface BidiOverrideType extends AuralProperties, FontProperties, RelativePositionProperties, InheritableProperties {
    id?: string;
    unicode_bidi_Type?: UnicodeBidi;
    verticalAlign?: string;
}

export type blank_or_not_blank_Type = ('blank' | 'not-blank' | 'any' | 'inherit');

export interface BlockContainerType
    extends BlockProperties,
    AbsolutePositionProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesBlock,
    ProgressionProperties,
    BreakProperties,
    ClipProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    ReferenceProperties,
    InheritableProperties {

    height?: string;
    id?: string;
    overflow?: Overflow;
    span?: Span;
    width?: string;
    zIndex?: string;
}

export interface BlockType
    extends BlockProperties,
    AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    HyphenationProperties,
    MarginPropertiesBlock,
    RelativePositionProperties,
    BreakProperties,
    TextOneProperties,
    BlockHyphenationProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    LineHeightProperties,
    InheritableProperties {

    id?: string;
    span?: Span;
}

export interface CharacterType
    extends AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    HyphenationProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    TextOneProperties,
    InheritableProperties {

    id?: string;
    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    character?: string;
    treatAsWordSpace?: TreatAsWordSpace;
    dominantBaseline?: DominantBaseline;
    keepWithNext?: string;
    keepWithPrevious?: string;
    suppressAtLineBreak?: suppress_at_line_break_Type;
    textDecoration?: TextDecoration;
    textShadow?: string;
    verticalAlign?: string;
}

export type Clear = 'start' | 'end' | 'left' | 'right' | 'both' | 'none' | 'inherit';

export type ColorName = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque'
    | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse'
    | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan'
    | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen'
    | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray'
    | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey'
    | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'lightpink' | 'lightsalmon'
    | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow'
    | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid'
    | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise'
    | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy'
    | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen'
    | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue'
    | 'purple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'ghostwhite' | 'gold' | 'goldenrod'
    | 'gray' | 'grey' | 'green' | 'greenyellow' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki'
    | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan'
    | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'sandybrown' | 'seagreen' | 'seashell'
    | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue'
    | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';

export interface ColorProfileType extends InheritableProperties {
    src: string;
    colorProfileName: string;
    renderingIntent?: RenderingIntent;
}

export interface ConditionalPageMasterReferenceType extends InheritableProperties {
    masterReference: string;
    oddOrEven?: OddOrEven;
    pagePosition?: page_position_Type;
    blankOrNotBlank?: blank_or_not_blank_Type;
}

export interface DeclarationsType extends InheritableProperties {}

export interface ExternalGraphicType extends InstreamForeignObjectType {
    src: string;
}

export interface InstreamForeignObjectType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    ProgressionProperties,
    ClipProperties,
    InheritableProperties {

    dangerouslySetInnerXML?: { __xml: string };

    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    contentHeight?: string;
    contentType?: string;
    contentWidth?: string;
    dominantBaseline?: DominantBaseline;
    height?: string;
    id?: string;
    keepWithNext?: string;
    keepWithPrevious?: string;
    overflow?: Overflow;
    scaling?: Scaling;
    scalingMethod?: ScalingMethod;
    width?: string;
    verticalAlign?: string;
}

export type Float = ('inherit' | 'before' | 'start' | 'end' | 'left' | 'right' | 'none');

export interface FloatType extends InheritableProperties {
    clear?: Clear;
    float?: Clear;
}

export interface FlowType extends InheritableProperties {
    flowName: string;
}

export interface FootnoteBodyType extends AccessibilityProperties, InheritableProperties {}

export interface FootnoteType extends AccessibilityProperties, InheritableProperties {}

export interface InitialPropertySetType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    RelativePositionProperties,
    InheritableProperties {

    id?: string;
    textDecoration?: TextDecoration;
    textShadow?: string;
}

export interface InlineContainerType
    extends BorderPaddingAndBackgroundProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    ProgressionProperties,
    ClipProperties,
    KeepProperties,
    ReferenceProperties,
    InheritableProperties {

    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    dominantBaseline?: DominantBaseline;
    height?: string;
    id?: string;
    overflow?: Overflow;
    width?: string;
    verticalAlign?: string;
}

export interface InlineType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    ProgressionProperties,
    KeepProperties,
    InheritableProperties {

    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    dominantBaseline?: DominantBaseline;
    height?: string;
    id?: string;
    textDecoration?: TextDecoration;
    width?: string;
    verticalAlign?: string;
}

export interface LayoutMasterSetType extends InheritableProperties {}

export interface LeaderType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    TextOneProperties,
    InheritableProperties {

    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    dominantBaseline?: DominantBaseline;
    id?: string;
    keepWithNext?: string;
    keepWithPrevious?: string;
    textShadow?: string;
    verticalAlign?: string;
}

export interface ListBlockType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesBlock,
    RelativePositionProperties,
    BreakProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    InheritableProperties,
    ListProperties {

    id?: string;
}

export interface ListItemBodyType extends AccessibilityProperties, InheritableProperties, ListProperties {
    id?: string;
}

export interface ListItemLabelType extends AccessibilityProperties, InheritableProperties, ListProperties {
    id?: string;
}

export interface ListItemType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesBlock,
    RelativePositionProperties,
    BreakProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    InheritableProperties,
    ListProperties {

    id?: string;
}

export interface MarkerType extends InheritableProperties {
    markerClassName?: string;
}

/** Here to document the acceptable measurements */
export type MeasurementType = 'px' | 'pt' | 'mm' | 'in' | 'cm' | 'em';

export interface MultiCaseType extends AccessibilityProperties, InheritableProperties {
    id?: string;
    caseName?: string;
    caseTitle?: string;
    startingState?: StartingState;
}

export interface MultiPropertiesType extends AccessibilityProperties, InheritableProperties {
    id?: string;
}

export interface MultiPropertySetType extends InheritableProperties {
    activeState: active_state_Type;
    id?: string;
}

export interface MultiSwitchType extends AccessibilityProperties, InheritableProperties {
    id?: string;
}

export interface MultiToggleType extends AccessibilityProperties, InheritableProperties {
    id?: string;
    switchTo?: string;
    verticalAlign?: string;
}

export interface PageNumberCitationType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    TextOneProperties,
    InheritableProperties {

    refId: string;
    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    dominantBaseline?: DominantBaseline;
    id?: string;
    keepWithNext?: string;
    keepWithPrevious?: string;
    textDecoration?: TextDecoration;
    textShadow?: string;
    verticalAlign?: string;
}

export interface PageNumberType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    MarginPropertiesInline,
    RelativePositionProperties,
    TextOneProperties,
    InheritableProperties {

    alignmentAdjust?: string;
    alignmentBaseline?: string;
    baselineShift?: string;
    dominantBaseline?: DominantBaseline;
    id?: string;
    keepWithNext?: string;
    keepWithPrevious?: string;
    textDecoration?: TextDecoration;
    textShadow?: string;
    verticalAlign?: string;
}

export interface PageSequenceMasterType extends InheritableProperties {
    masterName: string;
}

export interface PageSequenceType extends InheritableProperties {
    id?: string;
    masterReference: string;
    initialPageNumber?: string;
    forcePageCount?: force_page_count_Type;
    format?: string;
    letterValue?: letter_value_Type;
    groupingSeparator?: string;
    groupingSize?: string;
}

export interface RegionStartType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: Overflow;
    precedence?: Precedence;
    regionName?: string;
}

export interface RegionEndType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: Overflow;
    precedence?: Precedence;
    regionName?: string;
}

export interface RegionAfterType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: Overflow;
    precedence?: Precedence;
    regionName?: string;
}

export interface RegionBeforeType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: Overflow;
    precedence?: Precedence;
    regionName?: string;
}

/** Inheritable */
export interface RegionBodyType
    extends MarginPropertiesBlock,
    BorderPaddingAndBackgroundProperties,
    ClipProperties,
    ReferenceProperties,
    InheritableProperties {

    columnCount?: string;
    columnGap?: string;
    overflow?: Overflow;
    regionName?: string;
}

export interface RepeatablePageMasterAlternativesType extends InheritableProperties {
    maximumRepeats?: number | 'no-limit' | 'inherit';
}

export interface RepeatablePageMasterReferenceType extends InheritableProperties {
    masterReference: string;
    maximumRepeats?: number | 'no-limit' | 'inherit';
}

export type retrieve_boundary_Type = ('page' | 'page-sequence' | 'document');
export type retrieve_position_Type = ('first-starting-within-page' | 'first-including-carryover' | 'last-starting-within-page' | 'last-ending-within-page');

export interface RetrieveMarkerType extends InheritableProperties {
    retrieveBoundary?: retrieve_boundary_Type;
    retrieveClassName?: string;
    retrievePosition?: retrieve_position_Type;
}

export interface RootType extends InheritableProperties {
    'xmlns:fo'?: string;
    mediaUsage?: MediaUsage;
}

export interface SimplePageMasterType extends MarginPropertiesBlock, ReferenceProperties, InheritableProperties {
    masterName: string;
    pageHeight?: string;
    pageWidth?: string;
}

export interface SinglePageMasterReferenceType extends InheritableProperties {
    masterReference: string;
}

export interface StaticContentType extends InheritableProperties {
    flowName: string;
}

export type suppress_at_line_break_Type = ('auto' | 'suppress' | 'retain' | 'inherit');
export type table_layout_Type = ('auto' | 'fixed' | 'inherit');
export type table_omit_footer_at_break_Type = ('true' | 'false');
export type table_omit_header_at_break_Type = ('true' | 'false');

export interface TableAndCaptionType
    extends BlockProperties,
    AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesBlock,
    RelativePositionProperties,
    BreakProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    InheritableProperties {

    id?: string;
}

export interface TableBodyType
    extends AccessibilityProperties,
    AuralProperties,
    BorderProperties,
    BackgroundProperties,
    RelativePositionProperties,
    BorderPrecedenceProperties,
    InheritableProperties {

    id?: string;
}

export interface TableCaptionType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    RelativePositionProperties,
    ProgressionProperties,
    IntrusionDisplaceProperties,
    InheritableProperties {

    id?: string;
    height?: string;
    width?: string;
}

export interface TableCellType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    RelativePositionProperties,
    BorderPrecedenceProperties,
    ProgressionProperties,
    InheritableProperties {

    id?: string;
    columnNumber?: string;
    endsRow?: EndsRow;
    height?: string;
    numberColumnsSpanned?: string;
    numberRowsSpanned?: string;
    startsRow?: StartsRow;
    width?: string;
    verticalAlign?: string;
}

export interface TableColumnType
    extends BorderProperties,
    BackgroundProperties,
    BorderPrecedenceProperties,
    InheritableProperties {

    columnNumber?: string;
    columnWidth?: string;
    numberColumnsRepeated?: string;
    numberColumnsSpanned?: string;
}

export interface TableFooterType
    extends AccessibilityProperties,
    AuralProperties,
    BorderProperties,
    BackgroundProperties,
    RelativePositionProperties,
    BorderPrecedenceProperties,
    InheritableProperties {

    id?: string;
}

export interface TableHeaderType
    extends AccessibilityProperties,
    AuralProperties,
    BorderProperties,
    BackgroundProperties,
    RelativePositionProperties,
    BorderPrecedenceProperties,
    InheritableProperties {

    id?: string;
}

export interface TableRowType
    extends AccessibilityProperties,
    AuralProperties,
    BorderProperties,
    BackgroundProperties,
    RelativePositionProperties,
    BorderPrecedenceProperties,
    BreakProperties,
    KeepProperties,
    InheritableProperties {

    id?: string;
    blockProgressionDimension?: string;
    blockProgressionDimensionMaximum?: string;
    blockProgressionDimensionMinimum?: string;
    blockProgressionDimensionOptimum?: string;
    height?: string;
    pageBreakAfter?: page_break_after_Type;
    pageBreakBefore?: page_break_after_Type;
}

export interface TableType
    extends BlockProperties,
    AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    MarginPropertiesBlock,
    RelativePositionProperties,
    ProgressionProperties,
    BreakProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    InheritableProperties,
    BorderPrecedenceProperties {

    id?: string;
    height?: string;
    width?: string;

    tableLayout?: table_layout_Type;
    tableOmitFooterAtBreak?: table_omit_footer_at_break_Type;
    tableOmitHeaderAtBreak?: table_omit_header_at_break_Type;
}

export interface TitleType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    MarginPropertiesInline,
    InheritableProperties {
}

export interface WrapperType extends InheritableProperties {
    id?: string;
}

export interface Elements {
    basicLink: BasicLinkType;
    bidiOverride: BidiOverrideType;
    block: BlockType;
    blockContainer: BlockContainerType;
    character: CharacterType;
    colorProfile: ColorProfileType;
    conditionalPageMasterReference: ConditionalPageMasterReferenceType;
    declarations: DeclarationsType;
    externalGraphic: ExternalGraphicType;
    float: FloatType;
    flow: FlowType;
    footnote: FootnoteType;
    footnoteBody: FootnoteBodyType;
    initialPropertySet: InitialPropertySetType;
    inline: InlineType;
    inlineContainer: InlineContainerType;
    instreamForeignObject: InstreamForeignObjectType;
    layoutMasterSet: LayoutMasterSetType;
    leader: LeaderType;
    listBlock: ListBlockType;
    listItem: ListItemType;
    listItemBody: ListItemBodyType;
    listItemLabel: ListItemLabelType;
    marker: MarkerType;
    multiCase: MultiCaseType;
    multiProperties: MultiPropertiesType;
    multiPropertySet: MultiPropertySetType;
    multiSwitch: MultiSwitchType;
    multiToggle: MultiToggleType;
    pageNumber: PageNumberType;
    pageNumberCitation: PageNumberCitationType;
    pageSequence: PageSequenceType;
    pageSequenceMaster: PageSequenceMasterType;
    regionAfter: RegionAfterType;
    regionBefore: RegionBeforeType;
    regionBody: RegionBodyType;
    regionEnd: RegionEndType;
    regionStart: RegionStartType;
    repeatablePageMasterAlternatives: RepeatablePageMasterAlternativesType;
    repeatablePageMasterReference: RepeatablePageMasterReferenceType;
    retrieveMarker: RetrieveMarkerType;
    root: RootType;
    simplePageMaster: SimplePageMasterType;
    singlePageMasterReference: SinglePageMasterReferenceType;
    staticContent: StaticContentType;
    table: TableType;
    tableAndCaption: TableAndCaptionType;
    tableBody: TableBodyType;
    tableCaption: TableCaptionType;
    tableCell: TableCellType;
    tableColumn: TableColumnType;
    tableFooter: TableFooterType;
    tableHeader: TableHeaderType;
    tableRow: TableRowType;
    title: TitleType;
    wrapper: WrapperType;
}
