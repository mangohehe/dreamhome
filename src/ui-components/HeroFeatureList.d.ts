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
export declare type HeroFeatureListOverridesProps = {
    HeroFeatureList?: PrimitiveOverrideProps<FlexProps>;
    ButtonCustomHero3889714?: PrimitiveOverrideProps<FlexProps>;
    label3889716?: PrimitiveOverrideProps<TextProps>;
    ButtonCustomHero3889682?: PrimitiveOverrideProps<FlexProps>;
    label3889684?: PrimitiveOverrideProps<TextProps>;
    ButtonCustomHero3889698?: PrimitiveOverrideProps<FlexProps>;
    label3889700?: PrimitiveOverrideProps<TextProps>;
    ButtonCustomHero38951114?: PrimitiveOverrideProps<FlexProps>;
    label38951116?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroFeatureListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroFeatureListOverridesProps | undefined | null;
}>;
export default function HeroFeatureList(props: HeroFeatureListProps): React.ReactElement;
