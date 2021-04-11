import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
`;

export const Label = styled.label`
    ${({ theme }) => css`
        display: block;
        font-size: ${theme.font.size['14']};
        font-weight: ${theme.font.weight.regular};
        margin-bottom: ${theme.spacings.small};
    `}
`;

export const InputField = styled.input`
    ${({ theme }) => css`
        border: 1px;
        border-style: solid;
        display: block;
        font-size: ${theme.font.size['14']};
        font-weight: ${theme.font.weight.regular};
        padding: ${theme.spacings.medium};
        z-index: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;

        &::placeholder {
            font-size: ${theme.font.size['14']};
            font-style: italic;
            font-weight: ${theme.font.weight.regular};
        }
    `}
`;
