/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DHDescriptionProps } from "./DHDescription";
import { CreateProjectProps } from "./CreateProject";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type DesignHubOverridesProps = {
    DesignHub?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37323"?: PrimitiveOverrideProps<FlexProps>;
    DHDescription?: DHDescriptionProps;
    CreateProject?: CreateProjectProps;
} & EscapeHatchProps;
export declare type DesignHubProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DesignHubOverridesProps | undefined | null;
}>;
export default function DesignHub(props: DesignHubProps): React.ReactElement;
