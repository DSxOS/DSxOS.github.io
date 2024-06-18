import { Image, Flex, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import "./Hero.css"

function Hero(){
    return <>
        <Flex id="heroDiv" vertical justify='space-between' align='center' >
            
            <Typography.Title  id="heroTitle">Unlock the Future of Power Systems with the DSxOS Digitalisation Platform</Typography.Title>
            <DownOutlined id='arrow'></DownOutlined>
        </Flex>
    </>
}

export default Hero;