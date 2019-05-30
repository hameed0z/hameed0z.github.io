import React from "react"
import { Card, Icon, Tag } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
const { Meta } = Card;
const IndexPage = () => (
    <Layout location='work'>
        {/* child num 1 'work page' */}
        <div style={{ padding: 30, display: 'flex', justifyContent: 'center' }}>
            <SEO title="work" keywords={[`hameed`, `blog`, `software`, `development`, 'web', 'mobile', 'app', 'application', 'javascript', 'nodejs', `react`]} />
            <Card
                style={{ width: 700 }}
                actions={[
                    <a href="https://play.google.com/store/apps/details?id=com.curawella&hl=en" target="_blank" rel="noopener noreferrer"><Icon type="android" /></a>,
                    <a href="https://itunes.apple.com/us/app/curawella/id1437764002?mt=8" target="_blank" rel="noopener noreferrer"><Icon type="apple" /></a>,
                    <a href="http://curawella.com" target="_blank" rel="noopener noreferrer"><Icon type="global" /></a>
                ]}
            >
                <Meta
                    title="Curawella"
                    description="A telemidicine cross platform mobile app"
                />
                <br />

                Curawella allows you to communicate effectively, easily and safely with doctors from all specialties to respond to all medical inquiries and guidance and help in the diagnosis and treatment of diseases without the need to move and wait long.
                <br />
                it also allows you to electronically record your medical data, your medical history, the results of the tests and scans, as well as the medicines used in a way that makes it easy for you to retrieve them and share them with your doctor easily and safely, which contributes to saving time and accuracy of diagnosis through your account that you will register.
                <br />
                <div>
                    <Tag color="dodgerblue">javascript</Tag>
                    <Tag color="dodgerblue">react native</Tag>
                    <Tag color="dodgerblue">react</Tag>
                    <Tag color="dodgerblue">nodejs</Tag>
                    <Tag color="dodgerblue">firebase functions</Tag>
                    <Tag color="dodgerblue">serverless</Tag>
                    <Tag color="dodgerblue">firebase</Tag>
                    <Tag color="dodgerblue">elastic search</Tag>
                </div>
            </Card>
        </div>
    </Layout>
)

export default IndexPage
