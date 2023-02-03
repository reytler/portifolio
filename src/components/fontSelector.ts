import styled from "styled-components";
import { Tfont } from "../types";

export const FontSelector = styled.span<{font:Tfont}>`
    font-family: ${({font})=>font};
`;