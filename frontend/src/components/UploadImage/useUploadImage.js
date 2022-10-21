import { useEffect, useState } from 'react';
const useUploadImage = ({ onChange }) => {
  const defaultImage = {
    uid: '-1',
    name: 'default.png',
    status: 'done',
    url: 'data:image/png;base64,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',
  };
  const [fileList, setFileList] = useState([defaultImage]);

  useEffect(() => {
    if (fileList.length === 0 || fileList[0].url === defaultImage.url) {
      onChange(null);
      return;
    }
    onChange(fileList[0]);
  }, [fileList, onChange, defaultImage.url]);
  const props = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: file => {
      previewFile(file);
      return false;
    },
    fileList,
  };
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileList([...fileList, { ...file, url: reader.result }]);
    };
  };
  return { fileList, props };
};
export default useUploadImage;