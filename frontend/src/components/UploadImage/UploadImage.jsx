import ImgCrop from 'antd-img-crop';
import useUploadImage from './useUploadImage';
import { UploadImg } from './UploadImage.styled';
const UploadImages = onChange => {
  const { fileList, props } = useUploadImage(onChange);
  return (
    <ImgCrop rotate fillColor="transparent">
      <UploadImg listType="picture-card" maxCount={1} {...props}>
        {fileList.length < 1 && '+ Upload'}
      </UploadImg>
    </ImgCrop>
  );
};
export default UploadImages;
