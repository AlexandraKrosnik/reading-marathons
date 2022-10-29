import React, { useState } from 'react';
import {
  Box,
  FormItem,
  StyledBox,
  StyledButton,
  StyledForm,
  StyledInput,
  Wrapper,
} from './LibraryForm.styled';
import UploadImages from 'components/UploadImage';

import useForm from './useForm';

const LibraryForm = () => {
  const { form, onFinish, Fields, yupSync, isLoading, onChange, isAdd } =
    useForm();

  return (
    <StyledForm
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Wrapper>
        <UploadImages onChange={onChange} isAdd={isAdd} />

        <Box>
          <FormItem
            name={Fields.title.name}
            label={Fields.title.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.author.name}
            label={Fields.author.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.publication.name}
            label={Fields.publication.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.pages.name}
            label={Fields.pages.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
        </Box>
      </Wrapper>
      <StyledBox>
        <StyledButton disabled={isLoading} htmlType="submit">
          Додати
        </StyledButton>
      </StyledBox>
    </StyledForm>
  );
};

export default LibraryForm;
