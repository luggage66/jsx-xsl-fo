// Generated with https://github.com/charto/cxsd and then heavily modified.
// tslint:disable:class-name

import {
    BorderPaddingAndBackgroundProperties,
    BorderProperties,
    BackgroundProperties,
    BorderPrecedenceProperties,
    AccessibilityProperties,
    MediaUsage,
    InheritableProperties,
    RenderingIntent,
    OddOrEven,
    MarginPropertiesBlock,
    MarginPropertiesInline,
    ReferenceProperties,
    ClipProperties,
    Overflow,
    AuralProperties,
    BlockProperties,
    FontProperties,
    RelativePositionProperties,
    BreakProperties,
    TextOneProperties,
    BlockHyphenationProperties,
    IntrusionDisplaceProperties,
    KeepProperties,
    LineHeightProperties,
    HyphenationProperties,
    Span
} from './fopTypes2';

// Source files:
// https://svn.apache.org/repos/asf/xmlgraphics/fop/trunk/fop/src/foschema/fop.xsd

export type absolute_position_Type = ("auto" | "absolute" | "fixed" | "inherit");

/** An  keyword refers to an entry in a table of font sizes computed and kept by the user agent. Possible values are: [ xx-small | x-small | small | medium | large | x-large | xx-large ] On a computer screen a scaling factor of 1.2 is suggested between adjacent indexes; if the "medium" font is 12pt, the "large" font could be 14.4pt. Different media may need different scaling factors. Also, the user agent should take the quality and availability of fonts into account when computing the table. The table may be different from one font family to another. Note. In CSS1, the suggested scaling factor between adjacent indexes was 1.5 which user experience proved to be too large. */
export type absolute_size_Type = ("xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large");

export type active_state_Type = ("link" | "visited" | "active" | "hover" | "focus");

export type alignment_adjust_Type = string;

export type alignment_baseline_Type = string;

export type alignment_Type = ("baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical");

export type always_Type = "always";

/** A representation of an angle consisting of an optional '+' or  '-' character immediately followed by a  immediately followed by an angle unit identifier. Angle unit identifiers are: 'deg' (for degrees), 'grad' (for grads), and 'rad' (for radians). The specified values are normalized to the range 0deg to 360deg. A property may define additional constraints on the value. */
export type angle_Type = string;

export type auto_Type = "auto";

export type azimuth_base_Type = ("left-side" | "far-left" | "left" | "center-left" | "center" | "center-right" | "right" | "far-right" | "right-side" | "behind" | "leftwards" | "rightwards" | "inherit");

export type azimuth_Type = string;

export type background_color_Type = string;

export type background_image_Type = ("uri-specification" | "none" | "inherit");

export type background_position_base_Type = ("top left" | "top center" | "top right" | "center left" | "center center" | "center right" | "bottom left" | "bottom center" | "bottom right");

export type background_position_horizontal_Type = string;

// interface _background_position_length_Type {}
// export interface background_position_length_Type extends _background_position_length_Type { constructor: { new(): background_position_length_Type }; }
// export var background_position_length_Type: { new(): background_position_length_Type };

// interface _background_position_percentage_Type {}
// export interface background_position_percentage_Type extends _background_position_percentage_Type { constructor: { new(): background_position_percentage_Type }; }
// export var background_position_percentage_Type: { new(): background_position_percentage_Type };

export type background_position_Type = string;

export type background_position_vertical_Type = string;

export type background_Type = string;

export type baseline_base_Type = ("baseline" | "sub" | "super");

export type baseline_shift_Type = string;

/** Inheritable */
export interface _BasicLinkType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    
    background: string;

    baselineShift: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    
    destinationPlacementOffset: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    
    emptyCells: empty_cells_Type;
    endIndent: string;
    externalDestination: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    indicateDestination: indicate_destination_Type;
    internalDestination: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    showDestination: show_destination_Type;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    
    startIndent: string;
    
    targetPresentationContext: string;
    targetProcessingContext: string;
    targetStylesheet: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type BasicLinkType = Partial<_BasicLinkType>;

/** Inheritable */
export interface _BidiOverrideType {
    
    azimuth: string;
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    unicodeBidi: unicode_bidi_Type;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type BidiOverrideType = Partial<_BidiOverrideType>;

export type blank_or_not_blank_Type = ("blank" | "not-blank" | "any" | "inherit");

export type block_progression_dimension_maximum_Type = string;

export type block_progression_dimension_optimum_Type = string;

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

/** "fo:background_color_Type{1,4}" */
// export interface _border_color_Type {}
// export interface border_color_Type extends _border_color_Type { constructor: { new(): border_color_Type }; }
// export let border_color_Type: { new(): border_color_Type };


/** "fo:width_Type{1,4} fo:inherit_Type" */
// export interface _border_margin_width_Type {}
// export interface border_margin_width_Type extends _border_margin_width_Type { constructor: { new(): border_margin_width_Type }; }
// export let border_margin_width_Type: { new(): border_margin_width_Type };


/** "fo:border_style_Type{1,4} fo:inherit_Type" */
// export interface _border_multi_style_Type {}
// export interface border_multi_style_Type extends _border_multi_style_Type { constructor: { new(): border_multi_style_Type }; }
// export let border_multi_style_Type: { new(): border_multi_style_Type };


/** "fo:width_Type fo:border_style_Type fo:color_Type" */


export type border_style_Type = ("inherit" | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset");

export type border_top_width_Type = string;

/** "fo:width_Type fo:border_style_Type fo:color_Type" */
export type border_Type = string;

export type bottom_Type = string;

export type box_alignment_Type = ("top" | "text-top" | "bottom" | "text-bottom");

export type breaks_Type = ("inherit" | "auto" | "column" | "page" | "even-page" | "odd-page");

export type caption_side_Type = ("before" | "after" | "start" | "end" | "top" | "bottom" | "left" | "right" | "inherit");

export type character_Type = string;

/** Inheritable */
export interface _CharacterType extends BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    character: string;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    suppressAtLineBreak: suppress_at_line_break_Type;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textAltitude: string;
    textDecoration: text_decoration_Type;
    textDepth: string;
    textIndent: string;
    textShadow: string;
    textTransform: text_transform_Type;
    top: string;
    treatAsWordSpace: treat_as_word_space_Type;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type CharacterType = Partial<_CharacterType>;

export type clear_Type = ("start" | "end" | "left" | "right" | "both" | "none" | "inherit");

/** shape_Type In CSS2, the only valid  value is: rect (, , , ) where ,  , and  specify offsets from the respective sides of the box. , , , and  may either have a  value or "auto". Negative lengths are permitted. The value "auto" means that a given edge of the clipping region will be the same as the edge of the element's generated box (i.e., "auto" means the same as "0".) When coordinates are rounded to pixel coordinates, care should be taken that no pixels remain visible when  +  is equal to the element's width (or  +  equals the element's height), and conversely that no pixels remain hidden when these values are 0. */
export type clip_Type = string;

export type color_Hex_Type = string;

export type color_Name_Type = ("aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "grey" | "green" | "greenyellow" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen");

/** Either a string of characters representing a keyword or a color function defined in . The list of keyword color names is: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow. */
export type color_Type = string;

export interface ColorProfileType extends InheritableProperties {
    src: string;
    colorProfileName: string;
    renderingIntent?: RenderingIntent;
}

/** , , proportional-column-width, or common-functions */
export type column_width_Type = string;

export type conditionality_Type = ("retain" | "discard");

export interface ConditionalPageMasterReferenceType extends InheritableProperties {
    masterReference: string;
    oddOrEven?: OddOrEven;
    pagePosition: page_position_Type;
    blankOrNotBlank: blank_or_not_blank_Type;
}

export interface DeclarationsType extends InheritableProperties {}


/** Inheritable */
export interface _ExternalGraphicType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    clip: string;
    color: string;
    contentHeight: string;
    contentType: string;
    contentWidth: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    overflow: overflow_Type;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scaling: scaling_Type;
    scalingMethod: scaling_method_Type;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    src: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type ExternalGraphicType = Partial<_ExternalGraphicType>;

/** A string of characters identifying a font. */
export type family_name_Type = string;

export type float_Type = ("inherit" | "before" | "start" | "end" | "left" | "right" | "none");

export interface _FloatType {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    clear: clear_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    $float: float_Type;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type FloatType = Partial<_FloatType>;

export interface FlowType extends InheritableProperties {
    flowName: string;
}

export type font_selection_strategy_Type = ("auto" | "character-by-character" | "inherit");

export type font_size_adjust_Type = string;

export type font_size_Type = string;

export type font_stretch_Type = ("normal" | "wider" | "narrower" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | "inherit");

export type font_style_Type = ("normal" | "italic" | "oblique" | "backslant" | "inherit");

export type font_variant_Type = ("normal" | "small-caps" | "inherit");

export type font_weight_Type = ("normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "inherit");

export interface _FootnoteBodyType extends AccessibilityProperties {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type FootnoteBodyType = Partial<_FootnoteBodyType>;

export interface _FootnoteType extends AccessibilityProperties {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type FootnoteType = Partial<_FootnoteType>;

export type force_page_count_Type = ("auto" | "even" | "odd" | "end-on-even" | "end-on-odd" | "no-force" | "inherit");

export type force_Type = "force";

export type height_Type = string;

export type horizontal_position_Type = ("left" | "center" | "right");

export type hyphenate_Type = ("false" | "true" | "inherit");

export type hyphenation_character_Type = string;

export type hyphenation_keep_Type = ("auto" | "column" | "page" | "inherit");

export type hyphenation_ladder_count_Type = string;

export type indicate_destination_Type = ("true" | "false");

export type inherit_Type = "inherit";

/** Inheritable */
export interface _InitialPropertySetType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textDecoration: text_decoration_Type;
    textIndent: string;
    textShadow: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type InitialPropertySetType = Partial<_InitialPropertySetType>;

export type inline_progression_dimension_maximum_Type = string;

export type inline_progression_dimension_optimum_Type = string;

/** Inheritable */
export interface _InlineContainerType extends BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    background: string;

    baselineShift: string;
    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    clip: string;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    overflow: overflow_Type;

    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    right: string;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type InlineContainerType = Partial<_InlineContainerType>;

/** Inheritable */
export interface _InlineType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textDecoration: text_decoration_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type InlineType = Partial<_InlineType>;

/** Inheritable */
export interface _InstreamForeignObjectType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    clip: string;
    color: string;
    contentHeight: string;
    contentType: string;
    contentWidth: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    overflow: overflow_Type;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scaling: scaling_Type;
    scalingMethod: scaling_method_Type;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type InstreamForeignObjectType = Partial<_InstreamForeignObjectType>;


export interface LayoutMasterSetType extends InheritableProperties {}


export interface _LeaderType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textAltitude: string;
    textDepth: string;
    textIndent: string;
    textShadow: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type LeaderType = Partial<_LeaderType>;

export type left_Type = string;

/** A compound datatype, with components: block-progression-direction, and inline-progression-direction. Each component is a . A property may define additional constraints on the values. */
export interface _length_bp_ip_direction_Type {}
export interface length_bp_ip_direction_Type extends _length_bp_ip_direction_Type { constructor: { new(): length_bp_ip_direction_Type }; }
export let length_bp_ip_direction_Type: { new(): length_bp_ip_direction_Type };

/** A compound datatype, with components: length, conditionality. The length component is a . The conditionality component is either "discard" or "retain". A property may define additional constraints on the values. */
export type length_conditional_Type = string;

export type length_percentage_Type = string;

/** A compound datatype, with components: minimum, optimum, maximum. Each component is a . If "minimum" is greater than optimum, it will be treated as if it had been set to "optimum". If "maximum" is less than optimum, it will be treated as if it had been set to "optimum". A property may define additional constraints on the values. */
export interface _length_range_Type {}
export interface length_range_Type extends _length_range_Type { constructor: { new(): length_range_Type }; }
export let length_range_Type: { new(): length_range_Type };

/** A signed length value where a 'length' is a real number plus a unit qualification. A property may define additional constraints on the value. */
export type length_Type = string;

export type letter_spacing_Type = string;

export type letter_value_Type = ("auto" | "alphabetic" | "traditional");

export type line_height_shift_adjustment_Type = ("consider-shifts" | "disregard-shifts" | "inherit");

export type line_height_Type = string;

export type line_stacking_strategy_Type = ("line-height" | "font-height" | "max-height" | "inherit");

/** property is not implemented yet */
export type linefeed_treatment_Type = ("ignore" | "preserve" | "treat-as-space" | "treat-as-zero-width-space" | "inherit");

/** Inheritable */
export interface _ListBlockType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    backgroundPosition: string;

    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    breakAfter: breaks_Type;
    breakBefore: breaks_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceAfter: string;
    spaceAfterConditionality: conditionality_Type;
    spaceAfterMaximum: string;
    spaceAfterMinimum: string;
    spaceAfterOptimum: string;
    spaceAfterPrecedence: string;
    spaceBefore: string;
    spaceBeforeConditionality: conditionality_Type;
    spaceBeforeMaximum: string;
    spaceBeforeMinimum: string;
    spaceBeforeOptimum: string;
    spaceBeforePrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type ListBlockType = Partial<_ListBlockType>;

/** Inheritable */
export interface _ListItemBodyType extends AccessibilityProperties {
    
    background: string;
    backgroundPosition: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type ListItemBodyType = Partial<_ListItemBodyType>;

/** Inheritable */
export interface _ListItemLabelType extends AccessibilityProperties {
    
    background: string;
    backgroundPosition: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type ListItemLabelType = Partial<_ListItemLabelType>;

/** Inheritable */
export interface _ListItemType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    backgroundPosition: string;

    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    breakAfter: breaks_Type;
    breakBefore: breaks_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceAfter: string;
    spaceAfterConditionality: conditionality_Type;
    spaceAfterMaximum: string;
    spaceAfterMinimum: string;
    spaceAfterOptimum: string;
    spaceAfterPrecedence: string;
    spaceBefore: string;
    spaceBeforeConditionality: conditionality_Type;
    spaceBeforeMaximum: string;
    spaceBeforeMinimum: string;
    spaceBeforeOptimum: string;
    spaceBeforePrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
    listItemBody: ListItemBodyType;
    listItemLabel: ListItemLabelType;
}
export type ListItemType = Partial<_ListItemType>;

export type margin_width_Type = string;

export interface _MarkerType {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    markerClassName: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type MarkerType = Partial<_MarkerType>;

export type max_width_Type = string;

/** Here to document the acceptable measurements */
export type MeasurementType = "px" | "pt" | "mm" | "in" | "cm" | "em";

export interface _MultiCaseType extends AccessibilityProperties {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    caseName: string;
    caseTitle: string;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    startingState: starting_state_Type;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type MultiCaseType = Partial<_MultiCaseType>;

export interface _MultiPropertiesType extends AccessibilityProperties {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
    wrapper: WrapperType;
}
export type MultiPropertiesType = Partial<_MultiPropertiesType>;

export interface _MultiPropertySetType {
    activeState: active_state_Type;
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type MultiPropertySetType = Partial<_MultiPropertySetType>;

/** Inheritable */
export interface _MultiSwitchType extends AccessibilityProperties {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
    multiCase: MultiCaseType;
}
export type MultiSwitchType = Partial<_MultiSwitchType>;

export interface _MultiToggleType extends AccessibilityProperties {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    switchTo: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    verticalAlign: string;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type MultiToggleType = Partial<_MultiToggleType>;

/** A string of characters representing a name. It must conform to the definition of an NCName in */
export type name_Type = string;

export type negative_length_Type = string;

export type no_limit_Type = "no-limit";

export type none_Type = "none";

export type normal_Type = "normal";

/** A signed real number which consists of an optional '+' or '-' character followed by a sequence of digits followed by an optional '.' character and sequence of digits. A property may define additional constraints on the value. */
export type number_Type = string;


export type once_Type = "once";

export type orientation_Type = ("inherit" | "0" | "90" | "180" | "270" | "-90" | "-180" | "-270" | "0deg" | "90deg" | "180deg" | "270deg" | "-90deg" | "-180deg" | "-270deg");

export type orphans_Type = string;


export type padding_before_Type = string;

export type padding_top_Type = string;

export type page_break_after_Type = ("auto" | "always" | "avoid" | "left" | "right" | "inherit");

export type page_break_inside_Type = ("auto" | "avoid" | "inherit");

export type page_position_Type = ("first" | "last" | "rest" | "any" | "inherit");

/** Inheritable */
export interface _PageNumberCitationType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    refId: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textAltitude: string;
    textDecoration: text_decoration_Type;
    textDepth: string;
    textIndent: string;
    textShadow: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type PageNumberCitationType = Partial<_PageNumberCitationType>;

/** Inheritable */
export interface _PageNumberType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    alignmentAdjust: string;
    alignmentBaseline: string;
    
    azimuth: string;
    background: string;

    baselineShift: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    dominantBaseline: dominant_baseline_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceEnd: string;
    spaceEndConditionality: conditionality_Type;
    spaceEndMaximum: string;
    spaceEndMinimum: string;
    spaceEndOptimum: string;
    spaceEndPrecedence: string;
    spaceStart: string;
    spaceStartConditionality: conditionality_Type;
    spaceStartMaximum: string;
    spaceStartMinimum: string;
    spaceStartOptimum: string;
    spaceStartPrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textAltitude: string;
    textDecoration: text_decoration_Type;
    textDepth: string;
    textIndent: string;
    textShadow: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type PageNumberType = Partial<_PageNumberType>;

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

/** A signed real percentage which consists of an optional '+' or '-' character followed by a sequence of digits followed by an optional '.' character and sequence of digits followed by '%'. A property may define additional constraints on the value. */
export type percentage_Type = string;

export type position_Type = ("static" | "relative" | "absolute" | "fixed" | "inherit");

export type positive_length_Type = string;

export type precedence_Type = ("true" | "false" | "inherit");

/** The function proportional-column-width(N[0])
  * This returns a width as a fraction of the available width as ( N[0] / sum1 ) * available space
  * The parent table must have width="x" and table-layout="fixed" */
export type proportional_column_width_Type = string;

export type provisional_distance_between_starts_Type = string;

export type provisional_label_separation_Type = string;

export interface RegionStartType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: overflow_Type;
    precedence?: precedence_Type;
    regionName?: string;
}

export interface RegionEndType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: overflow_Type;
    precedence?: precedence_Type;
    regionName?: string;
}

export interface RegionAfterType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: overflow_Type;
    precedence?: precedence_Type;
    regionName?: string;
}

export interface RegionBeforeType extends BorderPaddingAndBackgroundProperties, ClipProperties, ReferenceProperties, InheritableProperties {
    extent?: string;
    overflow?: overflow_Type;
    precedence?: precedence_Type;
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

export type relative_align_Type = ("before" | "baseline" | "inherit");

export type relative_position_Type = ("static" | "relative" | "inherit");

/** A  keyword is interpreted relative to the table of font sizes and the font size of the parent element. Possible values are: [ larger | smaller ] For example, if the parent element has a font size of "medium", a value of "larger" will make the font size of the current element be "large". If the parent element's size is not close to a table entry, the user agent is free to interpolate between table entries or round off to the closest one. The user agent may have to extrapolate table values if the numerical value goes beyond the keywords. */
export type relative_size_Type = ("larger" | "smaller");

export type rendering_intent_Type = ("auto" | "perceptual" | "relative-colorimetric" | "saturation" | "absolute-colorimetric" | "inherit");

export interface RepeatablePageMasterAlternativesType extends InheritableProperties {
    maximumRepeats?: number | "no-limit" | "inherit";
}

export interface RepeatablePageMasterReferenceType extends InheritableProperties {
    masterReference: string;
    maximumRepeats?: number | "no-limit" | "inherit";
}

export type retrieve_boundary_Type = ("page" | "page-sequence" | "document");

export type retrieve_position_Type = ("first-starting-within-page" | "first-including-carryover" | "last-starting-within-page" | "last-ending-within-page");

export interface _RetrieveMarkerType {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    retrieveBoundary: retrieve_boundary_Type;
    retrieveClassName: string;
    retrievePosition: retrieve_position_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type RetrieveMarkerType = Partial<_RetrieveMarkerType>;

export type right_Type = string;

export interface RootType extends InheritableProperties {
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

export type size_base_Type = ("auto" | "landscape" | "portrait" | "inherit");

export type size_Type = string;

export type space_after_maximum_Type = string;

export type space_after_minimum_Type = string;

export type space_after_optimum_Type = string;

export type space_after_precedence_Type = string;

export type space_before_maximum_Type = string;

export type space_before_minimum_Type = string;

export type space_before_optimum_Type = string;

export type space_before_precedence_Type = string;

export type space_end_maximum_Type = string;

export type space_end_minimum_Type = string;

export type space_end_optimum_Type = string;

export type space_end_precedence_Type = string;

export type space_start_maximum_Type = string;

export type space_start_minimum_Type = string;

export type space_start_optimum_Type = string;

export type space_start_precedence_Type = string;

export type space_start_Type = string;

export interface StaticContentType extends InheritableProperties {
    flowName: string;
}

export type suppress_at_line_break_Type = ("auto" | "suppress" | "retain" | "inherit");

export type table_layout_Type = ("auto" | "fixed" | "inherit");

export type table_omit_footer_at_break_Type = ("true" | "false");

export type table_omit_header_at_break_Type = ("true" | "false");

/** Inheritable */
export interface _TableAndCaptionType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    breakAfter: breaks_Type;
    breakBefore: breaks_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceAfter: string;
    spaceAfterConditionality: conditionality_Type;
    spaceAfterMaximum: string;
    spaceAfterMinimum: string;
    spaceAfterOptimum: string;
    spaceAfterPrecedence: string;
    spaceBefore: string;
    spaceBeforeConditionality: conditionality_Type;
    spaceBeforeMaximum: string;
    spaceBeforeMinimum: string;
    spaceBeforeOptimum: string;
    spaceBeforePrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableAndCaptionType = Partial<_TableAndCaptionType>;

/** Inheritable */
export interface _TableBodyType extends AccessibilityProperties, BorderProperties, BackgroundProperties, BorderPrecedenceProperties {
    
    azimuth: string;
    background: string;

    border: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableBodyType = Partial<_TableBodyType>;

/** Inheritable */
export interface _TableCaptionType extends AccessibilityProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;

    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;

    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableCaptionType = Partial<_TableCaptionType>;

/** Inheritable */
export interface _TableCellType extends AccessibilityProperties, BorderPrecedenceProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBeforeColor: string;
    borderBeforeStyle: border_style_Type;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: conditionality_Type;
    borderBeforeWidthLength: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderEndColor: string;
    borderEndStyle: border_style_Type;
    borderEndWidth: string;
    borderEndWidthConditionality: conditionality_Type;
    borderEndWidthLength: string;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStartColor: string;
    borderStartStyle: border_style_Type;
    borderStartWidth: string;
    borderStartWidthConditionality: conditionality_Type;
    borderStartWidthLength: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    columnNumber: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    endsRow: ends_row_Type;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    numberColumnsSpanned: string;
    numberRowsSpanned: string;
    orphans: string;

    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    startsRow: starts_row_Type;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    verticalAlign: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableCellType = Partial<_TableCellType>;

/** Inheritable */
export interface _TableColumnType extends BorderProperties, BackgroundProperties, BorderPrecedenceProperties {
    
    background: string;

    border: string;

    borderBeforeColor: string;
    borderBeforeStyle: border_style_Type;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: conditionality_Type;
    borderBeforeWidthLength: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderEndColor: string;
    borderEndStyle: border_style_Type;
    borderEndWidth: string;
    borderEndWidthConditionality: conditionality_Type;
    borderEndWidthLength: string;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStartColor: string;
    borderStartStyle: border_style_Type;
    borderStartWidth: string;
    borderStartWidthConditionality: conditionality_Type;
    borderStartWidthLength: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    columnNumber: string;
    columnWidth: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    numberColumnsRepeated: string;
    numberColumnsSpanned: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableColumnType = Partial<_TableColumnType>;

/** Inheritable */
export interface _TableFooterType extends AccessibilityProperties, BorderProperties, BackgroundProperties, BorderPrecedenceProperties {
    
    azimuth: string;
    background: string;

    border: string;

    borderBeforeColor: string;
    borderBeforeStyle: border_style_Type;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: conditionality_Type;
    borderBeforeWidthLength: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderEndColor: string;
    borderEndStyle: border_style_Type;
    borderEndWidth: string;
    borderEndWidthConditionality: conditionality_Type;
    borderEndWidthLength: string;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStartColor: string;
    borderStartStyle: border_style_Type;
    borderStartWidth: string;
    borderStartWidthConditionality: conditionality_Type;
    borderStartWidthLength: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableFooterType = Partial<_TableFooterType>;

/** Inheritable */
export interface _TableHeaderType extends AccessibilityProperties, BorderProperties, BackgroundProperties, BorderPrecedenceProperties {
    
    azimuth: string;
    background: string;

    border: string;

    borderBeforeColor: string;
    borderBeforeStyle: border_style_Type;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: conditionality_Type;
    borderBeforeWidthLength: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderEndColor: string;
    borderEndStyle: border_style_Type;
    borderEndWidth: string;
    borderEndWidthConditionality: conditionality_Type;
    borderEndWidthLength: string;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStartColor: string;
    borderStartStyle: border_style_Type;
    borderStartWidth: string;
    borderStartWidthConditionality: conditionality_Type;
    borderStartWidthLength: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableHeaderType = Partial<_TableHeaderType>;

/** Inheritable */
export interface _TableRowType extends AccessibilityProperties, BorderProperties, BackgroundProperties, BorderPrecedenceProperties {
    
    azimuth: string;
    background: string;

    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBeforeColor: string;
    borderBeforeStyle: border_style_Type;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: conditionality_Type;
    borderBeforeWidthLength: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderEndColor: string;
    borderEndStyle: border_style_Type;
    borderEndWidth: string;
    borderEndWidthConditionality: conditionality_Type;
    borderEndWidthLength: string;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStartColor: string;
    borderStartStyle: border_style_Type;
    borderStartWidth: string;
    borderStartWidthConditionality: conditionality_Type;
    borderStartWidthLength: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    breakAfter: breaks_Type;
    breakBefore: breaks_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableRowType = Partial<_TableRowType>;

/** Inheritable */
export interface _TableType extends AccessibilityProperties, BorderPrecedenceProperties, BorderPaddingAndBackgroundProperties {
    
    azimuth: string;
    background: string;

    blockProgressionDimension: string;
    blockProgressionDimensionMaximum: string;
    blockProgressionDimensionMinimum: string;
    blockProgressionDimensionOptimum: string;
    border: string;

    borderBeforeColor: string;
    borderBeforeStyle: border_style_Type;
    borderBeforeWidth: string;
    borderBeforeWidthConditionality: conditionality_Type;
    borderBeforeWidthLength: string;
    borderBottom: string;

    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderEndColor: string;
    borderEndStyle: border_style_Type;
    borderEndWidth: string;
    borderEndWidthConditionality: conditionality_Type;
    borderEndWidthLength: string;
    borderLeft: string;

    borderRight: string;

    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStartColor: string;
    borderStartStyle: border_style_Type;
    borderStartWidth: string;
    borderStartWidthConditionality: conditionality_Type;
    borderStartWidthLength: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;

    borderWidth: border_margin_width_Type;
    bottom: string;
    breakAfter: breaks_Type;
    breakBefore: breaks_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    direction: direction_Type;
    displayAlign: display_align_Type;
    elevation: elevation_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    height: string;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    inlineProgressionDimension: string;
    inlineProgressionDimensionMaximum: string;
    inlineProgressionDimensionMinimum: string;
    inlineProgressionDimensionOptimum: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    keepWithNext: string;
    keepWithPrevious: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;

    pageBreakAfter: page_break_after_Type;
    pageBreakBefore: page_break_after_Type;
    pageBreakInside: page_break_inside_Type;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    playDuring: string;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    relativePosition: relative_position_Type;
    richness: string;
    right: string;

    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    spaceAfter: string;
    spaceAfterConditionality: conditionality_Type;
    spaceAfterMaximum: string;
    spaceAfterMinimum: string;
    spaceAfterOptimum: string;
    spaceAfterPrecedence: string;
    spaceBefore: string;
    spaceBeforeConditionality: conditionality_Type;
    spaceBeforeMaximum: string;
    spaceBeforeMinimum: string;
    spaceBeforeOptimum: string;
    spaceBeforePrecedence: string;
    speak: string;
    speakHeader: string;
    speakNumeral: speak_numeral_Type;
    speakPunctuation: string;
    speechRate: string;
    startIndent: string;
    stress: string;
    tableLayout: table_layout_Type;
    tableOmitFooterAtBreak: table_omit_footer_at_break_Type;
    tableOmitHeaderAtBreak: table_omit_header_at_break_Type;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    top: string;
    visibility: visibility_Type;
    voiceFamily: string;
    volume: string;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    width: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type TableType = Partial<_TableType>;

export type text_align_last_Type = ("start" | "center" | "end" | "justify" | "inside" | "outside" | "left" | "right" | "inherit");

export type text_align_Type = ("start" | "center" | "end" | "justify" | "inside" | "outside" | "left" | "right" | "inherit");

export type text_altitude_Type = string;

/** not implemented */
export type text_decoration_Type = ("none" | "underline" | "no-underline" | "overline" | "no-overline" | "line-through" | "no-line-through" | "blink" | "no-blink" | "inherit");

export type text_depth_Type = string;

export type text_shadow_Type = string;

export type text_transform_Type = ("capitalize" | "uppercase" | "lowercase" | "none" | "inherit");


export interface TitleType
    extends AccessibilityProperties,
    AuralProperties,
    BorderPaddingAndBackgroundProperties,
    FontProperties,
    MarginPropertiesInline,
    InheritableProperties {
}

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

export interface _WrapperType {
    
    background: string;
    borderBottom: string;
    borderCollapse: border_collapse_Type;
    borderColor: border_color_Type;
    borderLeft: string;
    borderRight: string;
    borderSeparation: length_bp_ip_direction_Type;
    borderSpacing: string;
    borderStyle: border_multi_style_Type;
    borderTop: string;
    borderWidth: border_margin_width_Type;
    captionSide: caption_side_Type;
    color: string;
    country: country_Type;
    direction: direction_Type;
    displayAlign: display_align_Type;
    emptyCells: empty_cells_Type;
    endIndent: string;
    font: string;
    fontFamily: string;
    fontSelectionStrategy: font_selection_strategy_Type;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: font_style_Type;
    fontVariant: font_variant_Type;
    fontWeight: font_weight_Type;
    glyphOrientationHorizontal: orientation_Type;
    glyphOrientationVertical: orientation_Type;
    hyphenate: hyphenate_Type;
    hyphenationCharacter: string;
    hyphenationKeep: hyphenation_keep_Type;
    hyphenationLadderCount: string;
    hyphenationPushCharacterCount: string;
    hyphenationRemainCharacterCount: string;
    id: string;
    intrusionDisplace: displace_Type;
    keepTogether: keep_compound_Type;
    keepTogetherWithinColumn: string;
    keepTogetherWithinLine: string;
    keepTogetherWithinPage: string;
    language: language_Type;
    lastLineEndIndent: string;
    leaderAlignment: leader_alignment_Type;
    leaderLength: string;
    leaderLengthMaximum: string;
    leaderLengthMinimum: string;
    leaderLengthOptimum: string;
    leaderPattern: leader_pattern_Type;
    leaderPatternWidth: string;
    letterSpacing: string;
    lineHeight: string;
    lineHeightShiftAdjustment: line_height_shift_adjustment_Type;
    lineStackingStrategy: line_stacking_strategy_Type;
    linefeedTreatment: linefeed_treatment_Type;
    margin: border_margin_width_Type;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    orphans: string;
    pageBreakInside: page_break_inside_Type;
    position: position_Type;
    provisionalDistanceBetweenStarts: string;
    provisionalLabelSeparation: string;
    referenceOrientation: orientation_Type;
    relativeAlign: relative_align_Type;
    ruleStyle: rule_style_Type;
    ruleThickness: string;
    scoreSpaces: score_spaces_Type;
    script: string;
    startIndent: string;
    textAlign: text_align_Type;
    textAlignLast: text_align_last_Type;
    textIndent: string;
    textTransform: text_transform_Type;
    visibility: visibility_Type;
    whiteSpace: white_space_Type;
    whiteSpaceCollapse: white_space_collapse_Type;
    whiteSpaceTreatment: white_space_treatment_Type;
    widows: string;
    wordSpacing: string;
    wrapOption: wrap_option_Type;
    writingMode: writing_mode_Type;
}
export type WrapperType = Partial<_WrapperType>;

export type writing_mode_Type = ("lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | "inherit");

export type z_index_Type = string;

export interface IntrinsicFoElements {
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


