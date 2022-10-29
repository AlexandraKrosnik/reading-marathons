import ImgCrop from 'antd-img-crop';
import useUploadImage from './useUploadImage';
import { UploadImg } from './UploadImage.styled';
const UploadImages = (onChange, isAdd) => {
  const { fileList, props } = useUploadImage(onChange, isAdd);
  return (
    <ImgCrop rotate fillColor="transparent" aspect={2 / 3} modalWidth={500}>
      <UploadImg
        listType="picture-card"
        maxCount={1}
        {...props}
        showUploadList={{ showPreviewIcon: false }}
      >
        {fileList.length < 1 && '+ Upload'}
      </UploadImg>
    </ImgCrop>
  );
};
export default UploadImages;
