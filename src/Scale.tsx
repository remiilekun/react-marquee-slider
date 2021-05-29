import styled from "@emotion/styled";

const Scale = styled.div<{ scale: number }>`
  transform: scale(${(props) => props.scale});
`;

Scale.defaultProps = {
  scale: 1,
};

export default Scale;
