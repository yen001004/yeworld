import React from "react";
import { Button, Card, List } from "antd";
import styled from "styled-components";
import { CloseSquareTwoTone } from "@ant-design/icons";
import PropTypes from "prop-types";

const FollowList = ({ header, data }) => {
  return (
    <ListWrap
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div>
          <ButtonMore>더 보기</ButtonMore>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card actions={[<CloseSquareTwoTone key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

const ListWrap = styled(List)`
  margin: 12px 6px;

  .ant-list-item:last-child {
    padding: 16px 20px;
  }
`;

const ButtonMore = styled(Button)`
  margin: 0 16px;
  margin-bottom: 20px;
  text-align: center;
`;

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
