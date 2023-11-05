import { useState, useCallback } from 'react';
import { Button, Input } from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import './index.css';

const Index = () => {
  const [account, setAccount] = useState({ user: '', password: '' });
  const onChange = useCallback((value, e) => {
    Object.assign(account, { [e.target.name]: value });
    setAccount({ ...account });
  });
  const login = () => {
    console.log(account);
  };
  return (
    <div className="container-box">
      <main>
        <div className="login">
          <div className="title">欢迎登陆</div>
          <div className="content">
            <Input
              name="user"
              size="large"
              status="warning"
              style={{ width: 250 }}
              prefix={<IconUser />}
              placeholder="account"
              value={account.user}
              onChange={onChange}
            />
          </div>
          <div className="content">
            <Input.Password
              name="password"
              prefix={<IconLock />}
              style={{ width: 250 }}
              size="large"
              status="warning"
              defaultVisibility={true}
              placeholder="password"
              value={account.password}
              onChange={onChange}
            />
          </div>
          <div className="content" onClick={login}>
            <Button
              status="success"
              long
              size="large"
              shape="round"
              style={{ width: 250 }}
            >
              Login
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
