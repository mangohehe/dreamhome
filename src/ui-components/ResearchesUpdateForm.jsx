/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getResearches } from "../graphql/queries";
import { updateResearches } from "../graphql/mutations";
const client = generateClient();
export default function ResearchesUpdateForm(props) {
  const {
    id: idProp,
    researches: researchesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    latest_update_date: "",
    authors: "",
    institutions: "",
    abstraction: "",
    summary: "",
    categories: "",
    doi: "",
    createdAt: "",
    updatedAt: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [latest_update_date, setLatest_update_date] = React.useState(
    initialValues.latest_update_date
  );
  const [authors, setAuthors] = React.useState(initialValues.authors);
  const [institutions, setInstitutions] = React.useState(
    initialValues.institutions
  );
  const [abstraction, setAbstraction] = React.useState(
    initialValues.abstraction
  );
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [doi, setDoi] = React.useState(initialValues.doi);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = researchesRecord
      ? { ...initialValues, ...researchesRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setLatest_update_date(cleanValues.latest_update_date);
    setAuthors(cleanValues.authors);
    setInstitutions(cleanValues.institutions);
    setAbstraction(cleanValues.abstraction);
    setSummary(cleanValues.summary);
    setCategories(cleanValues.categories);
    setDoi(cleanValues.doi);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [researchesRecord, setResearchesRecord] =
    React.useState(researchesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getResearches.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getResearches
        : researchesModelProp;
      setResearchesRecord(record);
    };
    queryData();
  }, [idProp, researchesModelProp]);
  React.useEffect(resetStateValues, [researchesRecord]);
  const validations = {
    title: [],
    latest_update_date: [],
    authors: [],
    institutions: [],
    abstraction: [],
    summary: [],
    categories: [],
    doi: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title: title ?? null,
          latest_update_date: latest_update_date ?? null,
          authors: authors ?? null,
          institutions: institutions ?? null,
          abstraction: abstraction ?? null,
          summary: summary ?? null,
          categories: categories ?? null,
          doi: doi ?? null,
          createdAt: createdAt ?? null,
          updatedAt: updatedAt ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateResearches.replaceAll("__typename", ""),
            variables: {
              input: {
                id: researchesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ResearchesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              latest_update_date,
              authors,
              institutions,
              abstraction,
              summary,
              categories,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Latest update date"
        isRequired={false}
        isReadOnly={false}
        value={latest_update_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date: value,
              authors,
              institutions,
              abstraction,
              summary,
              categories,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.latest_update_date ?? value;
          }
          if (errors.latest_update_date?.hasError) {
            runValidationTasks("latest_update_date", value);
          }
          setLatest_update_date(value);
        }}
        onBlur={() =>
          runValidationTasks("latest_update_date", latest_update_date)
        }
        errorMessage={errors.latest_update_date?.errorMessage}
        hasError={errors.latest_update_date?.hasError}
        {...getOverrideProps(overrides, "latest_update_date")}
      ></TextField>
      <TextField
        label="Authors"
        isRequired={false}
        isReadOnly={false}
        value={authors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors: value,
              institutions,
              abstraction,
              summary,
              categories,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.authors ?? value;
          }
          if (errors.authors?.hasError) {
            runValidationTasks("authors", value);
          }
          setAuthors(value);
        }}
        onBlur={() => runValidationTasks("authors", authors)}
        errorMessage={errors.authors?.errorMessage}
        hasError={errors.authors?.hasError}
        {...getOverrideProps(overrides, "authors")}
      ></TextField>
      <TextField
        label="Institutions"
        isRequired={false}
        isReadOnly={false}
        value={institutions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions: value,
              abstraction,
              summary,
              categories,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.institutions ?? value;
          }
          if (errors.institutions?.hasError) {
            runValidationTasks("institutions", value);
          }
          setInstitutions(value);
        }}
        onBlur={() => runValidationTasks("institutions", institutions)}
        errorMessage={errors.institutions?.errorMessage}
        hasError={errors.institutions?.hasError}
        {...getOverrideProps(overrides, "institutions")}
      ></TextField>
      <TextField
        label="Abstraction"
        isRequired={false}
        isReadOnly={false}
        value={abstraction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions,
              abstraction: value,
              summary,
              categories,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.abstraction ?? value;
          }
          if (errors.abstraction?.hasError) {
            runValidationTasks("abstraction", value);
          }
          setAbstraction(value);
        }}
        onBlur={() => runValidationTasks("abstraction", abstraction)}
        errorMessage={errors.abstraction?.errorMessage}
        hasError={errors.abstraction?.hasError}
        {...getOverrideProps(overrides, "abstraction")}
      ></TextField>
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions,
              abstraction,
              summary: value,
              categories,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <TextField
        label="Categories"
        isRequired={false}
        isReadOnly={false}
        value={categories}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions,
              abstraction,
              summary,
              categories: value,
              doi,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.categories ?? value;
          }
          if (errors.categories?.hasError) {
            runValidationTasks("categories", value);
          }
          setCategories(value);
        }}
        onBlur={() => runValidationTasks("categories", categories)}
        errorMessage={errors.categories?.errorMessage}
        hasError={errors.categories?.hasError}
        {...getOverrideProps(overrides, "categories")}
      ></TextField>
      <TextField
        label="Doi"
        isRequired={false}
        isReadOnly={false}
        value={doi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions,
              abstraction,
              summary,
              categories,
              doi: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.doi ?? value;
          }
          if (errors.doi?.hasError) {
            runValidationTasks("doi", value);
          }
          setDoi(value);
        }}
        onBlur={() => runValidationTasks("doi", doi)}
        errorMessage={errors.doi?.errorMessage}
        hasError={errors.doi?.hasError}
        {...getOverrideProps(overrides, "doi")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions,
              abstraction,
              summary,
              categories,
              doi,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              latest_update_date,
              authors,
              institutions,
              abstraction,
              summary,
              categories,
              doi,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || researchesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || researchesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
