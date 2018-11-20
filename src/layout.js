import React from 'react';
import { connect } from 'dva';
import {
    Form,
    Layout,
    Menu,
    Breadcrumb,
    Icon
} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            visible: false,
        }
    }

    componentDidMount() {
    }
    render() {
        return <Router>
        <Layout style={{height: '100%'}}>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="10"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, height: '100%' }}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
      </Router>// router 需要包裹最外层，即要包裹Link，也要包裹Route。
    }
}
const routes = [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About,
      routes: [
        {
          path: "/about/bus",
          component: Bus
        },
        {
          path: "/about/cart",
          component: Cart
        }
      ]
    }
  ];
  
function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
  
function About() {
    return (
        <div>
        <h2>About</h2>
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/About/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/About/cart">Cart</Link>
                </li>
            </ul>
        </div>
            <Route exact path="/About/bus" component={Bus} />
            <Route exact path="/About/cart" component={Cart} />
        </div>
    );
}
function mapStateToProps(state) {

    return {
       
    }
}

export default connect(mapStateToProps)(Form.create({})(home));
