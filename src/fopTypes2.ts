// tslint:disable:class-name
export type BackgroundAttachment = "scroll" | "fixed" | "inherit";
export type BackgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | "inherit";
export type BorderStyle = "inherit" | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type Conditionality = "retain" | "discard";
export type PrecedenceType = "true" | "false" | "inherit";
export type MediaUsage = "auto" | "paginate" | "bounded-in-one-dimension" | "unbounded";
export type CaptionSide = "before" | "after" | "start" | "end" | "top" | "bottom" | "left" | "right" | "inherit";
export type Direction = "ltr" | "rtl" | "inherit";
export type EmptyCells = "show" | "hide" | "inherit";
export type RenderingIntent = "auto" | "perceptual" | "relative-colorimetric" | "saturation" | "absolute-colorimetric" | "inherit";


export type font_selection_strategy_Type = ("auto" | "character-by-character" | "inherit");

export type font_size_adjust_Type = string;

export type font_size_Type = string;

export type font_stretch_Type = ("normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | "inherit");

export type font_style_Type = ("normal" | "italic" | "oblique" | "backslant" | "inherit");

export type font_variant_Type = ("normal" | "small-caps" | "inherit");

export type font_weight_Type = ("normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "inherit");
export type hyphenation_keep_Type = ("auto" | "column" | "page" | "inherit");
export type displace_Type = ("inherit" | "auto" | "none" | "line" | "indent" | "block");

/** A signed length value where a 'length' is a real number plus a unit qualification. A property may define additional constraints on the value. */
export type length_Type = string;

export type letter_spacing_Type = string;

export type letter_value_Type = ("auto" | "alphabetic" | "traditional");

export type line_height_shift_adjustment_Type = ("consider-shifts" | "disregard-shifts" | "inherit");

export type line_height_Type = string;

export type line_stacking_strategy_Type = ("line-height" | "font-height" | "max-height" | "inherit");

/** property is not implemented yet */
export type linefeed_treatment_Type = ("ignore" | "preserve" | "treat-as-space" | "treat-as-zero-width-space" | "inherit");

export type border_before_width_Type = string;
export type border_collapse_Type = ("collapse" | "separate" | "inherit");
export type border_color_Type = string;
export type border_margin_width_Type = string;
export type border_multi_style_Type = string;
export type border_side_Type = string;
/** A string of characters representing a name. It must conform to the definition of an NCName in */
export type name_Type = string;

export type negative_length_Type = string;

export type no_limit_Type = "no-limit";

export type none_Type = "none";

export type normal_Type = "normal";

/** A signed real number which consists of an optional '+' or '-' character followed by a sequence of digits followed by an optional '.' character and sequence of digits. A property may define additional constraints on the value. */
export type number_Type = string;

export type OddOrEven = "odd" | "even" | "any" | "inherit";

export type once_Type = "once";

export type orientation_Type = ("inherit" | "0" | "90" | "180" | "270" | "-90" | "-180" | "-270" | "0deg" | "90deg" | "180deg" | "270deg" | "-90deg" | "-180deg" | "-270deg");

export type orphans_Type = string;

export type Overflow = "auto" | "visible" | "hidden" | "scroll" | "error-if-overflow" | "inherit";

export type padding_before_Type = string;

export type padding_top_Type = string;

export type page_break_after_Type = ("auto" | "always" | "avoid" | "left" | "right" | "inherit");

export type page_break_inside_Type = ("auto" | "avoid" | "inherit");

export type page_position_Type = ("first" | "last" | "rest" | "any" | "inherit");
export type rule_style_Type = ("none" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inherit");

export type scale_to_fit_Type = "scale-to-fit";

export type scaling_method_Type = ("auto" | "integer-pixels" | "resample-any-method" | "inherit");

export type scaling_Type = ("uniform" | "non-uniform" | "inherit");

export type score_spaces_Type = ("true" | "false" | "inherit");

export type show_destination_Type = ("replace" | "new");

export type text_align_last_Type = ("start" | "center" | "end" | "justify" | "inside" | "outside" | "left" | "right" | "inherit");

export type text_align_Type = ("start" | "center" | "end" | "justify" | "inside" | "outside" | "left" | "right" | "inherit");

export type text_altitude_Type = string;

/** not implemented */
export type text_decoration_Type = ("none" | "underline" | "no-underline" | "overline" | "no-overline" | "line-through" | "no-line-through" | "blink" | "no-blink" | "inherit");

export type text_depth_Type = string;

export type text_shadow_Type = string;

export type text_transform_Type = ("capitalize" | "uppercase" | "lowercase" | "none" | "inherit");

export type top_Type = string;

export type transparent_Type = "transparent";

export type treat_as_word_space_Type = ("auto" | "true" | "false" | "inherit");

export type unicode_bidi_Type = ("normal" | "embed" | "bidi-override" | "inherit");

export type use_font_metrics_Type = "use-font-metrics";

export type vertical_align_base_Type = ("baseline" | "middle" | "sub" | "super" | "text-top" | "text-bottom" | "top" | "bottom" | "inherit");

export type vertical_align_Type = string;

export type vertical_position_Type = ("top" | "center" | "bottom");

/** property is not implemented yet */
export type visibility_Type = ("visible" | "hidden" | "collapse" | "inherit");

export type white_space_collapse_Type = ("false" | "true" | "inherit");

/** property ignored */
export type white_space_treatment_Type = ("ignore" | "preserve" | "ignore-if-before-linefeed" | "ignore-if-after-linefeed" | "ignore-if-surrounding-linefeed" | "inherit");

export type white_space_Type = ("normal" | "pre" | "nowrap" | "inherit");

export type widows_Type = string;

export type width_Type = ("thin" | "medium" | "thick");

export type wrap_option_Type = ("no-wrap" | "wrap" | "inherit");
export type writing_mode_Type = ("lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | "inherit");

export type length_bp_ip_direction_Type = string;

export type country_Type = ("none" | "inherit" | "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR" | "CI" | "HR" | "CU" | "CY" | "CZ" | "DK" | "DJ" | "DM" | "DO" | "TP" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "ET" | "FK" | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE" | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS" | "IN" | "ID" | "IR" | "IQ" | "IE" | "IL" | "IT" | "JM" | "JP" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA" | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MK" | "MG" | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT" | "MX" | "FM" | "MD" | "MC" | "MN" | "MS" | "MA" | "MZ" | "MM" | "NA" | "NR" | "NP" | "NL" | "AN" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU" | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY" | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "RE" | "RO" | "RU" | "RW" | "SH" | "KN" | "LC" | "PM" | "VC" | "WS" | "SM" | "ST" | "SA" | "SN" | "SC" | "SL" | "SG" | "SK" | "SI" | "SB" | "SO" | "ZA" | "GS" | "ES" | "LK" | "SD" | "SR" | "SJ" | "SZ" | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TG" | "TK" | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE" | "GB" | "US" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI" | "WF" | "EH" | "YE" | "YU" | "ZM" | "ZW");

export type direction_Type = ("ltr" | "rtl" | "inherit");

export type display_align_Type = ("auto" | "before" | "center" | "after" | "inherit");

export type dominant_baseline_Type = ("auto" | "use-script" | "no-change" | "reset-size" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit");

export type elevation_Type = ("below" | "level" | "above" | "higher" | "lower" | "0" | "90" | "180" | "270" | "0deg" | "90deg" | "180deg" | "270deg" | "inherit");

export type empty_cells_Type = ("show" | "hide" | "inherit");

export type end_indent_Type = string;

export type ends_row_Type = ("true" | "false");

export type extent_Type = string;


export type force_page_count_Type = ("auto" | "even" | "odd" | "end-on-even" | "end-on-odd" | "no-force" | "inherit");

export type force_Type = "force";

export type height_Type = string;

export type horizontal_position_Type = ("left" | "center" | "right");

export type hyphenate_Type = ("false" | "true" | "inherit");

export type hyphenation_character_Type = string;

export type hyphenation_ladder_count_Type = string;

export type indicate_destination_Type = ("true" | "false");

export type inherit_Type = "inherit";

export type language_Type = ("none" | "inherit" | "AY" | "GN" | "QU" | "DZ" | "MY" | "KM" | "ZH" | "JA" | "KO" | "LO" | "TH" | "BO" | "VI" | "LV" | "LT" | "EU" | "BR" | "GA" | "GD" | "CY" | "KN" | "ML" | "TA" | "TE" | "KL" | "IK" | "ET" | "FI" | "HU" | "AF" | "DA" | "NL" | "EN" | "FO" | "FY" | "DE" | "IS" | "NO" | "SV" | "YI" | "OM" | "AA" | "SO" | "AB" | "KA" | "AS" | "BN" | "BH" | "GU" | "HI" | "KS" | "MR" | "NE" | "OR" | "PA" | "SA" | "SD" | "SI" | "UR" | "SQ" | "HY" | "EO" | "IA" | "IE" | "VO" | "KU" | "PS" | "FA" | "TG" | "EL" | "LA" | "HA" | "RW" | "RN" | "LN" | "SG" | "ST" | "TN" | "SN" | "SS" | "SW" | "TS" | "TW" | "WO" | "XH" | "YO" | "ZU" | "FJ" | "ID" | "JV" | "MG" | "MS" | "MI" | "SM" | "SU" | "TL" | "TO" | "CA" | "CO" | "FR" | "GL" | "IT" | "MO" | "OC" | "PT" | "RM" | "RO" | "ES" | "AM" | "AR" | "HE" | "MT" | "TI" | "BG" | "BE" | "HR" | "CS" | "MK" | "PL" | "RU" | "SR" | "SH" | "SK" | "SL" | "UK" | "AZ" | "BA" | "KK" | "KY" | "TT" | "TR" | "TK" | "UZ" | "BI" | "MN" | "NA");

export type leader_alignment_Type = ("none" | "reference-area" | "page" | "inherit");

export type leader_length_Type = string;

export type leader_pattern_Type = ("space" | "rule" | "dots" | "use-content" | "inherit");

export type leader_pattern_width_Type = string;

export type position_Type = ("static" | "relative" | "absolute" | "fixed" | "inherit");

export type positive_length_Type = string;

export type precedence_Type = ("true" | "false" | "inherit");

/** The function proportional-column-width(N[0])
  * This returns a width as a fraction of the available width as ( N[0] / sum1 ) * available space
  * The parent table must have width="x" and table-layout="fixed" */
export type proportional_column_width_Type = string;

export type provisional_distance_between_starts_Type = string;

export type provisional_label_separation_Type = string;


export type relative_align_Type = ("before" | "baseline" | "inherit");

export type RelativePermission = "static" | "relative" | "inherit";

/** A  keyword is interpreted relative to the table of font sizes and the font size of the parent element. Possible values are: [ larger | smaller ] For example, if the parent element has a font size of "medium", a value of "larger" will make the font size of the current element be "large". If the parent element's size is not close to a table entry, the user agent is free to interpolate between table entries or round off to the closest one. The user agent may have to extrapolate table values if the numerical value goes beyond the keywords. */
export type relative_size_Type = ("larger" | "smaller");


/** A compound datatype, with components: minimum, optimum, maximum, precedence, and conditionality. The minimum, optimum, and maximum components are s. The precedence component is either "force" or an . The conditionality component is either "discard" or "retain". If "minimum" is greater than optimum, it will be treated as if it had been set to "optimum". If "maximum" is less than optimum, it will be treated as if it had been set to "optimum". */
export type space_Type = string;

export type Span = "none" | "all" | "inherit";

export type speak_header_Type = ("once" | "always" | "inherit");

export type speak_numeral_Type = ("digits" | "continuous" | "inherit");

export type speak_Type = ("normal" | "none" | "spell-out" | "inherit");

export type speech_rate_base_Type = ("x-slow" | "slow" | "medium" | "fast" | "x-fast" | "faster" | "slower" | "inherit");

export type speech_rate_Type = string;

export type start_indent_Type = string;

export type starting_state_Type = ("show" | "hide");

export type starts_row_Type = ("true" | "false");


export type border_style_Type = ("inherit" | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset");

export type border_top_width_Type = string;

/** "fo:width_Type fo:border_style_Type fo:color_Type" */
export type border_Type = string;

export type bottom_Type = string;

export type box_alignment_Type = ("top" | "text-top" | "bottom" | "text-bottom");

export type Breaks = "inherit" | "auto" | "column" | "page" | "even-page" | "odd-page";

export type caption_side_Type = ("before" | "after" | "start" | "end" | "top" | "bottom" | "left" | "right" | "inherit");



export interface AccessibilityProperties {
}

export interface AccessibilityProperties_unsupported_by_FOP {
    sourceDocument: string;
    role: string;
}

export interface BorderProperties {
    border: string;

    borderAfterColor: string;
    borderAfterStyle: BorderStyle;
    borderAfterWidth: string;
    borderAfterWidthConditionality: Conditionality;
    borderAfterWidthLength: string;

    borderBeforeColor: string;
    borderBeforeStyle: BorderStyle;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: Conditionality;
    borderBeforeWidthLength: string;

    borderBottomColor: string;
    borderBottomStyle: BorderStyle;
    borderBottomWidth: string;
    borderBottomWidthConditionality: Conditionality;
    borderBottomWidthLength: string;

    borderEndColor: string;
    borderEndStyle: BorderStyle;
    borderEndWidth: string;
    borderEndWidthConditionality: Conditionality;
    borderEndWidthLength: string;

    borderLeftColor: string;
    borderLeftStyle: BorderStyle;
    borderLeftWidth: string;
    borderLeftWidthConditionality: Conditionality;
    borderLeftWidthLength: string;

    borderRightColor: string;
    borderRightStyle: BorderStyle;
    borderRightWidth: string;
    borderRightWidthConditionality: Conditionality;
    borderRightWidthLength: string;

    borderStartColor: string;
    borderStartStyle: BorderStyle;
    borderStartWidth: string;
    borderStartWidthConditionality: Conditionality;
    borderStartWidthLength: string;

    borderTopColor: string;
    borderTopStyle: BorderStyle;
    borderTopWidth: string;
    borderTopWidthConditionality: Conditionality;
    borderTopWidthLength: string;
}

export interface BorderPrecedenceProperties {
    borderAfterPrecedence: PrecedenceType;
    borderBeforePrecedence: PrecedenceType;
    borderEndPrecedence: PrecedenceType;
    borderStartPrecedence: PrecedenceType;
}

export interface PaddingProperties {
    padding: string;
    paddingAfter: string;
    paddingAfterConditionality: Conditionality;
    paddingAfterLength: string;
    paddingBefore: string;
    paddingBeforeConditionality: Conditionality;
    paddingBeforeLength: string;
    paddingBottom: string;
    paddingBottomConditionality: Conditionality;
    paddingBottomLength: string;
    paddingEnd: string;
    paddingEndConditionality: Conditionality;
    paddingEndLength: string;
    paddingLeft: string;
    paddingLeftConditionality: Conditionality;
    paddingLeftLength: string;
    paddingRight: string;
    paddingRightConditionality: Conditionality;
    paddingRightLength: string;
    paddingStart: string;
    paddingStartConditionality: Conditionality;
    paddingStartLength: string;
    paddingTop: string;
    paddingTopConditionality: Conditionality;
    paddingTopLength: string;
}

export interface BackgroundProperties_unsupported_by_FOP {
    backgroundAttachment: BackgroundAttachment;
    backgroundImage: string;
    backgroundPositionHorizontal: string;
    backgroundPositionVertical: string;
    backgroundRepeat: BackgroundRepeat;
}

export interface BackgroundProperties {
    backgroundColor: string;
}

export interface BorderPaddingAndBackgroundProperties extends BorderProperties, PaddingProperties, BackgroundProperties {}

export interface InheritableProperties_unsupported_by_FOP {
    autoRestore: boolean;
    background: string;
    borderSpacing: string;
    captionSide: CaptionSide;

    direction: Direction;
    emptyCells: EmptyCells;
    font: string;
    fontSelectionStrategy: font_selection_strategy_Type;

    fontSizeAdjust: string;
    fontStretch: string;
    fontVariant: font_variant_Type;
    glyphOrientationHorizontal: orientation_Type;

    glyphOrientationVertical: orientation_Type;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    intrusionDisplace: displace_Type;

    lastLineEndIndent: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;

    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;

    pageBreakInside: page_break_inside_Type;
    referenceOrientation: orientation_Type;
    scoreSpaces: score_spaces_Type;
    script: string;

    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceTreatment: white_space_treatment_Type;

    wordSpacing: string;
    writingMode: writing_mode_Type;
}

export interface InheritableProperties {
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    color: string;
    country: country_Type;
    displayAlign: display_align_Type;
    endIndent: string;
    fontFamily: string;
    fontSize: string;
    fontStyle: font_style_Type;
    fontWeight: font_weight_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    keepTogether: string;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    orphans: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    relativeAlign: relative_align_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    whiteSpaceCollapse: white_space_collapse_Type;
    widows: string;
    wrapOption: wrap_option_Type;
}

export interface MarginPropertiesBasic {
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
}

export interface MarginPropertiesVerticalSpace {
    spaceBeforeOptimum: string;
    spaceAfterOptimum: string;
}

export interface MarginPropertiesVerticalSpace_unsupported_by_FOP {
    spaceAfter: string;
    spaceAfterConditionality: Conditionality;
    spaceAfterMaximum: string;
    spaceAfterMinimum: string;
    spaceAfterPrecedence: string;
    spaceBefore: string;
    spaceBeforeConditionality: Conditionality;
    spaceBeforeMaximum: string;
    spaceBeforeMinimum: string;
    spaceBeforePrecedence: string;
}

export interface MarginPropertiesHorizontalSpace {}

export interface MarginPropertiesHorizontalSpace_unsupported_by_FOP {
    spaceEnd: string;
    spaceEndConditionality: Conditionality;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimim: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: Conditionality;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
}


export interface MarginPropertiesBlock extends MarginPropertiesBasic, MarginPropertiesVerticalSpace {}

export interface MarginPropertiesInline extends MarginPropertiesBasic, MarginPropertiesHorizontalSpace {}

export interface ReferenceProperties {}

export interface ClipProperties {}

export interface ClipProperties_unsupported_by_FOP {
    clip: string;
}

export interface BlockProperties_unsupported_by_FOP {
    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
}

export interface BlockProperties {}

export interface AuralProperties_unsupported_by_FOP {
    azimuth: string;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    elevation: elevation_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    richness: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    stress: string;
    voiceFamily: string;
    volume: string;
}

export interface AuralProperties {}

export interface FontProperties {
    fontFamily: string;
    fontSize: string;
    fontStyle: font_style_Type;
    fontWeight: font_weight_Type;
}

export interface FontProperties_unsupported_by_FOP {
    font: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSizeAdjust: string;
    fontStretch: string;
    fontVariant: font_variant_Type;
}

export interface RelativePositionProperties {
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export interface RelativePositionProperties_unsupported_by_FOP {
    relativePermission: RelativePermission;
}

export interface BreakProperties {
    breakAfter: Breaks;
    breakBefore: Breaks;
}

export interface TextOneProperties {}

export interface TextOneProperties_unsupported_by_FOP {
    textAltitude: string;
    textDepth: string;
}

export interface BlockHyphenationProperties {}

export interface BlockHyphenationProperties_unsupported_by_FOP {
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
}

export interface IntrusionDisplaceProperties {}
export interface IntrusionDisplaceProperties_unsupported_by_FOP {}

export interface KeepProperties {
    keepWithNext: string;
}
export interface KeepProperties_unsupported_by_FOP {
    keepWithPrevious: string;
}

export interface LineHeightProperties {}

export interface LineHeightProperties_unsupported_by_FOP {
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
}


export interface HyphenationProperties {}

export interface HyphenationProperties_unsupported_by_FOP {
    country: country_Type;
    language: language_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
}
