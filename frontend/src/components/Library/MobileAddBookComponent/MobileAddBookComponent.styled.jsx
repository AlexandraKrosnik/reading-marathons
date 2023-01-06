import styled from 'styled-components';

export const StyledBackBtn = styled.div`
  margin-bottom: 32px;
  position: fixed;
`;

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  z-index: 10;
`;

export const AddBookContent = styled.div`
  width: 80vw;
  height: 80vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  border-radius: 7px;
`;
