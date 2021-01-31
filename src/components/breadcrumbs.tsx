import React from "react";
import path from "path";
import { Link } from "gatsby";
import styled from "styled-components";

type Props = {
  currentPath: string[];
};

const Break = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;

const History = styled(Link)`
  box-shadow: none;
  color: #a70101;
`;

const Flex = styled.div`
  display: flex;
`;

export const Breadcrumbs = (props: Props) => {
  let linkPath = "";

  // Temparaly fix
  const getPath = () => {
    if (props.currentPath[1] === "blog") {
      return props.currentPath.slice(0, props.currentPath.length - 1);
    }
    return props.currentPath;
  };

  const currentPath = getPath();
  const lastPage = currentPath.length > 0 ? currentPath.length - 1 : 0;

  return (
    <Flex>
      {currentPath.map((page, index) => {
        linkPath = path.join(linkPath, page);

        // If your home url is not /, you do not need the blowing
        page = page === "/" ? "home" : page;

        return (
          <div key={index}>
            {index !== lastPage ? (
              <Flex>
                <History to={linkPath}>{page}</History>
                <Break>&gt;</Break>
              </Flex>
            ) : (
              <div>{page}</div>
            )}
          </div>
        );
      })}
    </Flex>
  );
};
