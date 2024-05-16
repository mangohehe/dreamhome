/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type AIStudioOverridesProps = {
    AIStudio?: PrimitiveOverrideProps<FlexProps>;
    "AIStudio/description"?: PrimitiveOverrideProps<FlexProps>;
    "ChipNexus AI Studio"?: PrimitiveOverrideProps<TextProps>;
    "An Innovation Engine, harnessing smart circuits for chip optimization and serving as a Future Forecaster"?: PrimitiveOverrideProps<TextProps>;
    "AIStudio/learnmore"?: PrimitiveOverrideProps<FlexProps>;
    "Learn More"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AIStudioProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AIStudioOverridesProps | undefined | null;
}>;
export default function AIStudio(props: AIStudioProps): React.ReactElement;
