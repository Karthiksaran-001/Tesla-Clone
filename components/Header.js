import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Tesla-Logo" />
      </a>
      <Menu>
        <p>
          <a href="https://www.tesla.com/models"> Model S </a>
        </p>
        <p>
          <a href="https://www.tesla.com/modely"> Model Y </a>
        </p>
        <p>
          <a href="https://www.tesla.com/model3"> Model 3 </a>
        </p>
        <p>
          <a href="https://www.tesla.com/modelx"> Model X </a>
        </p>
      </Menu>
      <RightMenu>
        <a href="https://shop.tesla.com/">Shop</a>
        <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https://www.tesla.com/teslaaccount/owner-xp/auth/callback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
          Tesla Accounts
        </a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
