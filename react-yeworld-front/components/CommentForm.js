import React, { use, useCallback } from "react";
import { Button, Form, Input } from "antd";
import useInput from "../hooks/useInput";
import { UpCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <div>
      <Form onFinish={onSubmitComment}>
        <FormItemWrap>
          <Input.TextArea
            value={commentText}
            onChange={onChangeCommentText}
            rows={4}
          />
          <CommentButton
            style={{ position: "absolute", right: 0, bottom: -40 }}
            type="primary"
            htmlType="submit"
          >
            게시
          </CommentButton>
        </FormItemWrap>
      </Form>
    </div>
  );
};

const FormItemWrap = styled(Form.Item)`
  position: relative;
  margin: 0;
`;

const CommentButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: -40;
`;

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
