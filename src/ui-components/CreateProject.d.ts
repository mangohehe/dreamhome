/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CreateProjectOverridesProps = {
    CreateProject?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4113890602"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Project Details"?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    TextField3890607?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3890608?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 427"?: PrimitiveOverrideProps<FlexProps>;
    TextField3890610?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3890611?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 4113890612"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    SliderField385410283?: PrimitiveOverrideProps<FlexProps>;
    labelWrapper?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    defaultValue?: PrimitiveOverrideProps<TextProps>;
    SliderField385410288?: PrimitiveOverrideProps<ViewProps>;
    "Frame 209"?: PrimitiveOverrideProps<ViewProps>;
    track?: PrimitiveOverrideProps<ViewProps>;
    range?: PrimitiveOverrideProps<ViewProps>;
    thumb?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CreateProjectProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CreateProjectOverridesProps | undefined | null;
}>;
export default function CreateProject(props: CreateProjectProps): React.ReactElement;
