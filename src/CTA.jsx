import { Flex, Typography, Input, Space } from 'antd'
import "./CTA.css"

const onSearch = (value) => console.log(value);

function CTA() {
    return <>
        <Flex className='page' style={{paddingBottom: 50}}>
            <div style={{width: "50%"}}>
                <Typography.Title style={{paddingLeft: 100}} level={2}>Be the First to Know - Register Your Interest Today! </Typography.Title>
                <Typography.Paragraph style={{paddingLeft: 100}}>
                    Don’t miss out on the future of power system digitalisation. Register now to receive the latest updates and be a part of the disruption.
                    Stay informed, stay ahead, and take a step towards sustainability through digitalisation. 
                </Typography.Paragraph>
            </div>
            <Flex id="register" justify='center' align='center' style={{width: "50%"}}>
                <Input.Search size='large'  onSearch={onSearch} style={{width: "50%"}} placeholder="Your email" allowClear enterButton="Register"/>
            </Flex>
        </Flex>
    </>
}

export default CTA