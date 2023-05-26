import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 20px;
  form {
    display: flex;

    input {
      display: block;
      font-size: 15px;
      padding: 10px 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      height: 40px;
      width: 40px;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
