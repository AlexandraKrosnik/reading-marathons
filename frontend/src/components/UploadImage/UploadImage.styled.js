import { Upload } from 'antd';
import styled from 'styled-components';

export const UploadImg = styled(Upload)`
  width: fit-content;

  .ant-upload.ant-upload-select-picture-card,
  .ant-upload-list-picture-card-container {
    margin: 0;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    padding: 0px;
  }
  .ant-upload.ant-upload-select-picture-card,
  .ant-upload-list-picture-card-container {
    width: 130px;
    height: 130px;
  }

  .ant-upload-list-picture-card .ant-upload-list-item {
    border: none;
  }
  .reactEasyCrop_CropArea {
    height: 100%;
  }
`;
