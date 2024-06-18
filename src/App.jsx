import { useState } from 'react'
import dsosLogo from '/logo.png'
import hardwareImage from '/hardware.jpg'
import databaseImage from '/database.jpg'
import digitalImage from '/digital.jpg'
import informationImage from '/information.jpg'
import openImage from '/open.jpg'
import apiImage from '/api.jpg'
import { Flex, Divider, Layout, Menu, Image, Row, Col, ConfigProvider, Typography} from 'antd';
const { Header, Content, Footer } = Layout;
import { GithubOutlined } from '@ant-design/icons';
import Hero from './Hero';
import './App.css'
import CTA from './CTA';




//Make menu items move on hover

function App() {
  const handleScroll = (type) => {
    console.log("func:" + type)

    if(type==0){
      window.scroll({
        top: window.visualViewport.height*0.9,
        left: 0, 
        behavior: 'smooth',
      })  
    }
    else if(type==1) {
      window.scroll({
        top: document.body.scrollHeight,
        left: 0, 
        behavior: 'smooth',
      })
    }
    else {
      window.scroll({
        top: document.getElementById("intro").offsetHeight+200,
        left: 0, 
        behavior: 'smooth',
      })
    }
    ;
  }

  const items = [
    {
      label: (
        <a className='menuLink' onClick={() => handleScroll(0)} target="_blank" rel="noopener noreferrer">
          Overview
        </a>
      ),
      key: 'home',
    },
    {
      label: (
        <a className='menuLink' onClick={() => handleScroll(1)} target="_blank" rel="noopener noreferrer">
          Register
        </a>
      ),
      key: "contacts"
    }
  ]

  return (
    <>
      <Layout style={{border:0}}>
        <Header id="headerDiv">
          <img className="logo" src={dsosLogo} alt="" />  
          <ConfigProvider  
          theme={{
            components: {
              Menu: {
                darkItemSelectedBg: "transparent",
                darkItemHoverColor:"rgba(255, 255, 255, 0.65)",
                darkItemSelectedColor: "#66D9FF",
                horizontalItemBorderRadius: 10,
                inlineCollapsed: true
              }
            }
            
            }}>
            <Menu
              id="wideMenu"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['home']}
              items={items}
            />
          </ConfigProvider>
                         
          
        </Header>
        <Layout>
          <Content id="content">
            <Hero func={() => handleScroll(2)}></Hero>
            <Flex vertical className='page' justify='center' align='center'>
              <div id="intro">
              Unlock the endless possibilities that information and communication technologies (ICT) offer to power systems. DSxOS enables power system engineers to easily deploy and manage software applications, offering seamless integration with emerging ICT applications and services.  Stay ahead in a rapidly evolving technical landscape, where adaptability and connectivity converge.
              </div>
              <Divider id="divider">

              </Divider>
            </Flex>
            
            <Row className='page'>
              <Col span={4} className='extra'></Col>
              <Col span={10} className='textCol'>
                <Flex style={{height:"100%", padding:"20px"}} justify='flex-end' align='center'>
                  <div>
                    <Typography.Title level={2} align="right" >
                      Enabling Digitalisation
                    </Typography.Title>
                    <Typography.Paragraph align="right" className='featureDesc'>
                      Modern power systems depend on ICT applications, from control and analytics to forecasting and blockchain enabled microtransactions. As a result, power system companies need to engage in software development and operations. DSxOS provides a web-based portal, where power system companies can easily and securely deploy and maintain their software installations and functionality.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={10} className='imageCol'>
                <Image preview={false} src={digitalImage}></Image>
                </Col>
            </Row>
            <Row className='page'>
              <Col span={10} className='imageCol'>
                <Image preview={false} src={apiImage}></Image>
              </Col>
              <Col span={10} className='textCol'>
                <Flex style={{height:"100%", padding:"20px"}} justify='flex-end' align='center'>
                  <div>
                    <Typography.Title align='left' level={2}>DSxOS platform</Typography.Title>
                    <Typography.Paragraph align='left' className='featureDesc'>                      
                      The DSxOS concept is built around an open software platform installed on-site, and distributed without license fees. This platform interfaces with power system assets and makes their functionality available through an open API. Edge or cloud-based applications use this API to provide the desired functionality in the power system, decoupling the software from the hardware.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={4} className='extra'></Col>
            </Row>
            <Row className='page'>
              <Col span={4} className='extra'></Col>
              <Col span={10} className='textCol'>
              <Flex style={{height:"100%", padding:"20px"}} justify='flex-end' align='center'>
                  <div>
                    <Typography.Title align='right' level={2} >Open API and Digital Communication Channels</Typography.Title>
                    <Typography.Paragraph align='right' className='featureDesc'>                    
                      The DSxOS platform provides a robust and open REST API, to seamlessly integrate third-party applications and services. Facilitate data exchange, enhance functionality, and create a network of applications that work cohesively to drive efficiency and innovation.  Focus on building your business and applications instead of figuring out how to connect your assets. Utilise digital communication interfaces to connect your power system devices and create a powerful microgrid. DSxOS supports a wide range of digital communication protocols, including Modbus TCP, MQTT, OCPP and IEC61850.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={10} className='imageCol'>
                <Image preview={false} src={databaseImage}></Image>
              </Col>
            </Row>
            <Row className='page'>
            <Col span={10} className='imageCol'>
                <Image preview={false} src={informationImage}></Image>
              </Col>
              <Col span={10} className='textCol'>
              <Flex style={{height:"100%", padding:"20px"}} justify='flex-end' align='center'>
                  <div>
                    <Typography.Title align='left' level={2} >
                      Common Information Models
                    </Typography.Title>
                    <Typography.Paragraph align='left' className='featureDesc'>
                      DSxOS uses common information models, like SunSpec, IEC61970, IEC61968 and OpenADR to standardize data exchange and interpretation. This enables DSxOS to provide a harmonised representation of power system assets, irregardles of brand, make or communication interface.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={4} className='extra'></Col>
            </Row>
            <Row className='page'>
              <Col span={4} className='extra'></Col>
              <Col span={10} className='textCol'>
              <Flex style={{height:"100%", padding:"20px"}} justify='flex-end' align='center'>
                  <div>
                    <Typography.Title align='right' level={2}>Open Innovation</Typography.Title>
                    <Typography.Paragraph align='right' className='featureDesc'>
                      The DSxOS platform is a transparent and modifiable software layer that grows through collaborative contributions. With our free-for-integration and open-for-development platform, you're not just adopting technology; you're joining a movement towards an innovative, community-driven ecosystem.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={10} className='imageCol'>
                <Image preview={false} src={openImage}></Image>
              </Col>
            </Row>
            <Row className='page'>
            <Col span={10} className='imageCol'>
                <Image preview={false} src={hardwareImage}></Image>
              </Col>
              <Col span={10} className='textCol'>
              <Flex style={{height:"100%", padding:"20px"}} justify='flex-end' align='center'>
                  <div>
                    <Typography.Title align='left' level={2}>
                    Hardware Agnostic
                    </Typography.Title>
                    <Typography.Paragraph align='left' className='featureDesc'>
                    The DSxOS platform is built on top of the Linux kernel and designed to be hardware agnostic. This freedom allows to choose your vendors, optimize existing systems and scale solutions without compatibility concerns.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={4} className='extra'></Col>
            </Row>
            
          </Content>
        </Layout>
        <Footer id="footer"><CTA></CTA></Footer>
      </Layout>
    </>
  )
}

export default App
