import {
  useEffect,
  useState,
  createElement
} from 'react'
import { defaultList } from './api'
import { Layout, Menu, theme } from "antd"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const { Content, Sider } = Layout
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: createElement(icon),
    label: `nav ${index + 1}`,
  }),
)
function App() {

  const [count, setCount] = useState(0)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const fetchData = async () => {
      const data = await defaultList()
      console.log(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items}/>
        </Sider>
        <Layout>
          {/*<Header style={{ padding: 0, background: colorBgContainer }} />*/}
          <Content style={{margin: '24px 16px 0'}}>
            <>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <div
                  style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <div>
                    <a href="https://vitejs.dev" target="_blank">
                      <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                  </div>
                  <h1>Vite + React</h1>
                  <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                    </button>
                    <p>
                      Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                  </div>
                  <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                  </p>
                </div>
              </div>
            </>
          </Content>
          {/*<Footer style={{textAlign: 'center'}}>*/}
          {/*  Ant Design ©{new Date().getFullYear()} Created by Ant UED*/}
          {/*</Footer>*/}
        </Layout>
      </Layout>
    </div>
  )
}

export default App
