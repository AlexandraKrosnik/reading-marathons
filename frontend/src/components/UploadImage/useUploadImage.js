import { useEffect, useMemo, useState } from 'react';
import openNotificationWithIcon from 'components/Notification';
const useUploadImage = (onChange, isAdd, url) => {
  const defaultImage = useMemo(
    () => ({
      uid: '-1',
      name: 'default.png',
      status: 'done',
      url: 'data:image/png;base64,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',
    }),
    []
  );
  const [fileList, setFileList] = useState([defaultImage]);

  useEffect(() => {
    if (fileList.length === 0 || fileList[0].url === defaultImage.url) {
      onChange(null);
      return;
    }

    onChange(fileList[0]);
  }, [fileList, onChange, defaultImage.url]);

  useEffect(() => {
    if (isAdd) {
      setFileList([defaultImage]);
    }
  }, [isAdd, defaultImage]);
  useEffect(() => {
    if (url) {
      setFileList([{ url }]);
    }
  }, [url]);
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
    if (file.size < 100000) {
      reader.onloadend = () => {
        setFileList([...fileList, { ...file, url: reader.result }]);
      };
    } else {
      openNotificationWithIcon(
        'warning',
        'The image size is too large (max: 100kb)'
      );
      reader.onloadend = () => {
        setFileList([defaultImage]);
      };
    }
  };
  return { fileList, props };
};
export default useUploadImage;
