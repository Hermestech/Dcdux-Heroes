import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

export default function MainLayout ({ children }) {
    return (
        <Layout>
            <Header>
                <div className="logo" />
            </Header>
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Superheroes ©2022 Created by Hermes</Footer>
        </Layout>
    )
}