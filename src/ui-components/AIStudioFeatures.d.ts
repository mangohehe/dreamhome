/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AIStudioFeaturesOverridesProps = {
    AIStudioFeatures?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37438781175"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038781176"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38781177?: MyIconProps;
    "Data Science"?: PrimitiveOverrideProps<TextProps>;
    "ChipNexus use industry standard tools, including Google Colab, Python and Scala."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37338781180"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038781181"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38781182?: MyIconProps;
    "Deep Insights"?: PrimitiveOverrideProps<TextProps>;
    "ChipNexus provides access to deep insights through a online platform."?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37438781186"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038781187"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38781188?: MyIconProps;
    "Design Assistant"?: PrimitiveOverrideProps<TextProps>;
    "ChipNexus positions AI as a helpful and collaborative tool."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37338781191"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43038781192"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38781193?: MyIconProps;
    "Innovation Engine"?: PrimitiveOverrideProps<TextProps>;
    "Powerful and emphasizes the potential of AI to drive progress."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AIStudioFeaturesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AIStudioFeaturesOverridesProps | undefined | null;
}>;
export default function AIStudioFeatures(props: AIStudioFeaturesProps): React.ReactElement;
