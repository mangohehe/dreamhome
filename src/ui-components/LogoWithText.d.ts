/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogoWithTextOverridesProps = {
    LogoWithText?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<FlexProps>;
    "Chip Nexus"?: PrimitiveOverrideProps<TextProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogoWithTextProps = React.PropsWithChildren<Partial<ViewProps> & {
    color?: "darker" | "neutral";
} & {
    overrides?: LogoWithTextOverridesProps | undefined | null;
}>;
export default function LogoWithText(props: LogoWithTextProps): React.ReactElement;
