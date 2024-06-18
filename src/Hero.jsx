import { Image, Flex, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import "./Hero.css"

const smallScroll = () => {
    window.scroll({
        top: document.body.scrollHeight*0.15,
        left: 0, 
        behavior: 'smooth',
      });
}

function Hero({func}){
    return <>
        <Flex id="heroDiv" vertical justify='space-between' align='center' >
            
            <Typography.Title  id="heroTitle">Unlock the Future of Power Systems with the DSxOS Digitalisation Platform</Typography.Title>
            <DownOutlined onClick={func} id='arrow'></DownOutlined>
            
        </Flex>
    </>
}

export default Hero;