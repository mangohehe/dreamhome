/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResearchesCreateFormInputValues = {
    title?: string;
    latest_update_date?: string;
    authors?: string;
    institutions?: string;
    abstraction?: string;
    summary?: string;
    categories?: string;
    doi?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ResearchesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    latest_update_date?: ValidationFunction<string>;
    authors?: ValidationFunction<string>;
    institutions?: ValidationFunction<string>;
    abstraction?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    categories?: ValidationFunction<string>;
    doi?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResearchesCreateFormOverridesProps = {
    ResearchesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    latest_update_date?: PrimitiveOverrideProps<TextFieldProps>;
    authors?: PrimitiveOverrideProps<TextFieldProps>;
    institutions?: PrimitiveOverrideProps<TextFieldProps>;
    abstraction?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    categories?: PrimitiveOverrideProps<TextFieldProps>;
    doi?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResearchesCreateFormProps = React.PropsWithChildren<{
    overrides?: ResearchesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResearchesCreateFormInputValues) => ResearchesCreateFormInputValues;
    onSuccess?: (fields: ResearchesCreateFormInputValues) => void;
    onError?: (fields: ResearchesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResearchesCreateFormInputValues) => ResearchesCreateFormInputValues;
    onValidate?: ResearchesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResearchesCreateForm(props: ResearchesCreateFormProps): React.ReactElement;
