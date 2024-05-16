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
export declare type NewsUpdateFormInputValues = {
    title?: string;
    publish_date?: string;
    publisher?: string;
    summary?: string;
    url?: string;
    language?: string;
    thumbnail?: string;
    createdAt?: string;
    updatedAt?: string;
    translatedTitle?: string;
    translatedSummary?: string;
};
export declare type NewsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    publish_date?: ValidationFunction<string>;
    publisher?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    translatedTitle?: ValidationFunction<string>;
    translatedSummary?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewsUpdateFormOverridesProps = {
    NewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    publish_date?: PrimitiveOverrideProps<TextFieldProps>;
    publisher?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    translatedTitle?: PrimitiveOverrideProps<TextFieldProps>;
    translatedSummary?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    news?: any;
    onSubmit?: (fields: NewsUpdateFormInputValues) => NewsUpdateFormInputValues;
    onSuccess?: (fields: NewsUpdateFormInputValues) => void;
    onError?: (fields: NewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewsUpdateFormInputValues) => NewsUpdateFormInputValues;
    onValidate?: NewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NewsUpdateForm(props: NewsUpdateFormProps): React.ReactElement;
