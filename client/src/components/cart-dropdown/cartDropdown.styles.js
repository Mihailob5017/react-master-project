import styled from 'styled-components';
import CustomButton from '../custom-button/customBtn';
export const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background: white;
  top: 80px;
  right: 20px;
  z-index: 5;
`;
export const EmptySpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ClickButton = styled(CustomButton)`
  margin-top: auto;
`;
