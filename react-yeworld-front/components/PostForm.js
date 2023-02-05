import { Button, Form, Input, Upload } from "antd";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addPost } from "../reducers/post";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  //   defaultFileList: [
  //     {
  //       uid: "1",
  //       name: "xxx.png",
  //       status: "done",
  //       response: "Server Error 500",
  //       // custom error message to show
  //       url: "http://www.baidu.com/xxx.png",
  //     },
  //     {
  //       uid: "2",
  //       name: "yyy.png",
  //       status: "done",
  //       url: "http://www.baidu.com/yyy.png",
  //     },
  //     {
  //       uid: "3",
  //       name: "zzz.png",
  //       status: "error",
  //       response: "Server Error 500",
  //       // custom error message to show
  //       url: "http://www.baidu.com/zzz.png",
  //     },
  //   ],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: "Download",
    showRemoveIcon: true,
    removeIcon: (
      <DeleteOutlined
        onClick={(e) => console.log(e, "custom removeIcon event")}
      />
    ),
  },
};

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
  }, []);
  return (
    <FormWrap encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요?"
      />
      <ButtonWrap>
        {/* <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button> */}
        <Upload {...props} className="ImgUploadButton">
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <Button type="primary" className="SubmitButton" htmlType="submit">
          업로드
        </Button>
      </ButtonWrap>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>;
        })}
      </div>
    </FormWrap>
  );
};

const FormWrap = styled(Form)`
  margin: 20px 8px;
  margin-bottom: 28px;

  .ant-input-affix-wrapper-lg {
    margin: 4px 0;
  }
  Button {
    /* float: right; */
    /* margin: 4px 0;
    margin-right: 16px; */
  }
  /* input::file-selector-button {
    display: none;
  } */
`;

const ButtonWrap = styled.div`
  display: flex;
  margin: 12px 0;

  /* .ImgUploadButton {
    float: left;
  } */

  .SubmitButton {
    margin-left: auto;
  }
`;

export default PostForm;
