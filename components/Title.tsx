import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children: ReactNode;
}

const TitleWrapper = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: ${theme.white};
`;

export default function Title({ children }: TitleProps) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
