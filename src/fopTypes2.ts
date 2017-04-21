// tslint:disable:class-name
export type BackgroundAttachment = "scroll" | "fixed" | "inherit";
export type BackgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | "inherit";
export type BorderStyle = "inherit" | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
export type Conditionality = "retain" | "discard";
export type PrecedenceType = "true" | "false" | "inherit";

export interface AccessibilityProperties extends AccessibilityProperties_unsupported_by_FOP {
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

/*
<attribute name="padding" type="fo:padding_before_Type"/>
<attribute name="padding-before" type="fo:padding_before_Type"/>
<attribute name="padding-before.length" type="fo:length_Type"/>
<attribute name="padding-before.conditionality" type="fo:Conditionality"/>
<attribute name="padding-after" type="fo:padding_before_Type"/>
<attribute name="padding-after.length" type="fo:length_Type"/>
<attribute name="padding-after.conditionality" type="fo:Conditionality"/>
<attribute name="padding-start" type="fo:padding_before_Type"/>
<attribute name="padding-start.length" type="fo:length_Type"/>
<attribute name="padding-start.conditionality" type="fo:Conditionality"/>
<attribute name="padding-end" type="fo:padding_before_Type"/>
<attribute name="padding-end.length" type="fo:length_Type"/>
<attribute name="padding-end.conditionality" type="fo:Conditionality"/>
<attribute name="padding-top" type="fo:padding_top_Type"/>
<attribute name="padding-top.length" type="fo:length_Type"/>
<attribute name="padding-top.conditionality" type="fo:Conditionality"/>
<attribute name="padding-bottom" type="fo:padding_top_Type"/>
<attribute name="padding-bottom.length" type="fo:length_Type"/>
<attribute name="padding-bottom.conditionality" type="fo:Conditionality"/>
<attribute name="padding-left" type="fo:padding_top_Type"/>
<attribute name="padding-left.length" type="fo:length_Type"/>
<attribute name="padding-left.conditionality" type="fo:Conditionality"/>
<attribute name="padding-right" type="fo:padding_top_Type"/>
<attribute name="padding-right.length" type="fo:length_Type"/>
<attribute name="padding-right.conditionality" type="fo:Conditionality"/>
*/
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

export interface BackgroundProperties extends BackgroundProperties_unsupported_by_FOP {
    backgroundColor: string;
}

export interface BorderPaddingAndBackgroundProperties extends BorderProperties, PaddingProperties, BackgroundProperties {}
