import {Flex, Typography, Card, Tag} from 'antd'
import { MailOutlined, LinkedinOutlined, GlobalOutlined } from '@ant-design/icons';
import "./Contacts.css"
import finestImage from '/finest.png'

function Contacts() {
    return <>
        <Typography.Title level={1}>Contacts</Typography.Title>
        <Flex gap={"60px"}>
            <Card bordered={false} className="contactCard" cover={<img alt="profilePhoto" src="https://finestcentre.eu/wp-content/uploads/2023/07/tarmo-korotko.jpg" />}>
                <h4>Dr. Tarmo Korõtko</h4>
                <Card.Meta description="Senior Researcher"></Card.Meta>
                <Flex align="center">
                    <Tag style={{ fontSize: '18px' }} className="tag">
                        <a href="mailto:tarmo.korotko@taltech.ee">
                            <MailOutlined/>
                        </a>
                    </Tag>
                    <Tag style={{ fontSize: '18px' }} className="tag">
                        <a href="https://www.linkedin.com/in/tk-955b6161">
                            <LinkedinOutlined/>
                        </a>
                    </Tag>
                </Flex>
            </Card>
            <Card bordered={false} className="contactCard" cover={<img alt="profilePhoto" src={finestImage} />}>
                <h4>FinEst Centre for Smart Cities</h4>
                <Card.Meta description="Centre under TalTech"></Card.Meta>
                <Flex align="center">
                    <Tag style={{ fontSize: '18px' }} className="tag" >
                        <a href="https://finestcentre.eu/">
                            <GlobalOutlined/>
                        </a>
                    </Tag>
                </Flex>
            </Card>
            
        </Flex>
    </>
}

export default Contacts