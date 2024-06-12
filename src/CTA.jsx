import { Flex, Typography, Input, Button } from 'antd'
import "./CTA.css"

const onSearch = (value) => console.log(value);

function CTA() {
    return <>
        <Flex id='cta' >
            <div id='textDiv'>
                <Typography.Title id='registerTitle' level={1}>Be the First to Know - Register Your Interest Today! </Typography.Title>
                <Typography.Paragraph id='registerText'>
                    Don’t miss out on the future of power system digitalisation. Register now to receive the latest updates and be a part of the disruption.
                    Stay informed, stay ahead, and take a step towards sustainability through digitalisation. 
                </Typography.Paragraph>
            </div>
            <Flex id="register" vertical justify='center' align='center'>
                <Input id="emailBox" type='email' placeholder='Your email'></Input>
                <Button onClick={onSearch}>Register</Button>
            </Flex>
        </Flex>
    </>
}

export default CTA