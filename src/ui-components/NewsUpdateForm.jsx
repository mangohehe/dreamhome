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
import { getNews } from "../graphql/queries";
import { updateNews } from "../graphql/mutations";
const client = generateClient();
export default function NewsUpdateForm(props) {
  const {
    id: idProp,
    news: newsModelProp,
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
    publish_date: "",
    publisher: "",
    summary: "",
    url: "",
    language: "",
    thumbnail: "",
    createdAt: "",
    updatedAt: "",
    translatedTitle: "",
    translatedSummary: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [publish_date, setPublish_date] = React.useState(
    initialValues.publish_date
  );
  const [publisher, setPublisher] = React.useState(initialValues.publisher);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [url, setUrl] = React.useState(initialValues.url);
  const [language, setLanguage] = React.useState(initialValues.language);
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [translatedTitle, setTranslatedTitle] = React.useState(
    initialValues.translatedTitle
  );
  const [translatedSummary, setTranslatedSummary] = React.useState(
    initialValues.translatedSummary
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = newsRecord
      ? { ...initialValues, ...newsRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setPublish_date(cleanValues.publish_date);
    setPublisher(cleanValues.publisher);
    setSummary(cleanValues.summary);
    setUrl(cleanValues.url);
    setLanguage(cleanValues.language);
    setThumbnail(cleanValues.thumbnail);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setTranslatedTitle(cleanValues.translatedTitle);
    setTranslatedSummary(cleanValues.translatedSummary);
    setErrors({});
  };
  const [newsRecord, setNewsRecord] = React.useState(newsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNews.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNews
        : newsModelProp;
      setNewsRecord(record);
    };
    queryData();
  }, [idProp, newsModelProp]);
  React.useEffect(resetStateValues, [newsRecord]);
  const validations = {
    title: [{ type: "Required" }],
    publish_date: [],
    publisher: [],
    summary: [],
    url: [{ type: "URL" }],
    language: [],
    thumbnail: [{ type: "URL" }],
    createdAt: [],
    updatedAt: [],
    translatedTitle: [],
    translatedSummary: [],
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
          title,
          publish_date: publish_date ?? null,
          publisher: publisher ?? null,
          summary: summary ?? null,
          url: url ?? null,
          language: language ?? null,
          thumbnail: thumbnail ?? null,
          createdAt: createdAt ?? null,
          updatedAt: updatedAt ?? null,
          translatedTitle: translatedTitle ?? null,
          translatedSummary: translatedSummary ?? null,
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
            query: updateNews.replaceAll("__typename", ""),
            variables: {
              input: {
                id: newsRecord.id,
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
      {...getOverrideProps(overrides, "NewsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              publish_date,
              publisher,
              summary,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
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
        label="Publish date"
        isRequired={false}
        isReadOnly={false}
        value={publish_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date: value,
              publisher,
              summary,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
            };
            const result = onChange(modelFields);
            value = result?.publish_date ?? value;
          }
          if (errors.publish_date?.hasError) {
            runValidationTasks("publish_date", value);
          }
          setPublish_date(value);
        }}
        onBlur={() => runValidationTasks("publish_date", publish_date)}
        errorMessage={errors.publish_date?.errorMessage}
        hasError={errors.publish_date?.hasError}
        {...getOverrideProps(overrides, "publish_date")}
      ></TextField>
      <TextField
        label="Publisher"
        isRequired={false}
        isReadOnly={false}
        value={publisher}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date,
              publisher: value,
              summary,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
            };
            const result = onChange(modelFields);
            value = result?.publisher ?? value;
          }
          if (errors.publisher?.hasError) {
            runValidationTasks("publisher", value);
          }
          setPublisher(value);
        }}
        onBlur={() => runValidationTasks("publisher", publisher)}
        errorMessage={errors.publisher?.errorMessage}
        hasError={errors.publisher?.hasError}
        {...getOverrideProps(overrides, "publisher")}
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
              publish_date,
              publisher,
              summary: value,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
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
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date,
              publisher,
              summary,
              url: value,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Language"
        isRequired={false}
        isReadOnly={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date,
              publisher,
              summary,
              url,
              language: value,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      ></TextField>
      <TextField
        label="Thumbnail"
        isRequired={false}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date,
              publisher,
              summary,
              url,
              language,
              thumbnail: value,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
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
              publish_date,
              publisher,
              summary,
              url,
              language,
              thumbnail,
              createdAt: value,
              updatedAt,
              translatedTitle,
              translatedSummary,
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
              publish_date,
              publisher,
              summary,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt: value,
              translatedTitle,
              translatedSummary,
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
      <TextField
        label="Translated title"
        isRequired={false}
        isReadOnly={false}
        value={translatedTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date,
              publisher,
              summary,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle: value,
              translatedSummary,
            };
            const result = onChange(modelFields);
            value = result?.translatedTitle ?? value;
          }
          if (errors.translatedTitle?.hasError) {
            runValidationTasks("translatedTitle", value);
          }
          setTranslatedTitle(value);
        }}
        onBlur={() => runValidationTasks("translatedTitle", translatedTitle)}
        errorMessage={errors.translatedTitle?.errorMessage}
        hasError={errors.translatedTitle?.hasError}
        {...getOverrideProps(overrides, "translatedTitle")}
      ></TextField>
      <TextField
        label="Translated summary"
        isRequired={false}
        isReadOnly={false}
        value={translatedSummary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              publish_date,
              publisher,
              summary,
              url,
              language,
              thumbnail,
              createdAt,
              updatedAt,
              translatedTitle,
              translatedSummary: value,
            };
            const result = onChange(modelFields);
            value = result?.translatedSummary ?? value;
          }
          if (errors.translatedSummary?.hasError) {
            runValidationTasks("translatedSummary", value);
          }
          setTranslatedSummary(value);
        }}
        onBlur={() =>
          runValidationTasks("translatedSummary", translatedSummary)
        }
        errorMessage={errors.translatedSummary?.errorMessage}
        hasError={errors.translatedSummary?.hasError}
        {...getOverrideProps(overrides, "translatedSummary")}
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
          isDisabled={!(idProp || newsModelProp)}
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
              !(idProp || newsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
