import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './home.css';
import log from '../../assets/img/logo-snapchat.png';
const { Header, Sider, Content } = Layout;
export default class Home extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="Layout">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <img src={log} />
                        {this.state.collapsed ? null : (<div>My Clod Yun</div>)}

                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        Content
          </Content>

                </Layout>
            </Layout>
        )
    }
}
