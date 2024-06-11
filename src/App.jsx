import { useState } from 'react'
import reactLogo from '/react.svg'
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
import Contacts from './Contacts';
import './App.css'
import CTA from './CTA';




//Make menu items move on hover

function App() {
  function handleScroll(type) {
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
    ;
  }

  const items = [
    {
      label: (
        <a style={{paddingInline: 10}} onClick={() => handleScroll(0)} target="_blank" rel="noopener noreferrer">
          Overview
        </a>
      ),
      key: 'home',
    },
    {
      label: (
        <a style={{paddingInline: 10}} href="https://github.com/DSxOS" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      ),
      key: 'git'
    },
    {
      label: (
        <a style={{paddingInline: 10}} onClick={() => handleScroll(1)} target="_blank" rel="noopener noreferrer">
          Contacts
        </a>
      ),
      key: "contacts"
    }
  ]

  return (
    <>
      <Layout>
        <Header  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <img className="logo" src={reactLogo} alt="" />  
          <ConfigProvider  
          theme={{
            components: {
              Menu: {
                darkItemSelectedBg: "transparent",
                darkItemHoverColor:"#66D9FF",
                darkItemSelectedColor: "#66D9FF",
                horizontalItemBorderRadius: 10,
              }
            }
            
            }}>
            <Menu
              id="wideMenu"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['home']}
              items={items}
              style={{
                width: 300,
                fontSize: 16,
              }}
            />   
            <Menu
              id="hamburgerMenu"
              theme="dark"
              mode="horizontal"
              items={[{
                label: (
                <a style={{marginTop: 0}} href="https://github.com/DSxOS" target="_blank" rel="noopener noreferrer">
                  <GithubOutlined style={{fontSize:24}} />  
                </a>),
                key:"git"
              }]}
            />  
          </ConfigProvider>
                         
          
        </Header>
        <Layout>
          <Content id="content">
            <Hero>

            </Hero>
            <Flex vertical className='page' justify='center' align='center'>
              <div id="intro" style={{width: "50%"}}>
              Unlock the endless possibilities that information and communication technologies (ICT) offer to power systems. Our DSxOS platform is designed for seamless integration with emerging ICT applications and services. We enable power system engineers to easily, efficiently, and securely deploy and manage software applications. Stay ahead in a rapidly evolving technical landscape, where adaptability and connectivity converge.
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
                      In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
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
                    <Typography.Title align='left' level={2}>Open API</Typography.Title>
                    <Typography.Paragraph align='left' className='featureDesc'>
                      Seamlessly integrate third-party applications and services through our robust API. Facilitate data exchange, enhance functionality, and create a network of applications that work cohesively to drive efficiency and innovation.
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
                    <Typography.Title align='right' level={2} >Digital Communication Channels</Typography.Title>
                    <Typography.Paragraph align='right' className='featureDesc'>
                    Integrate our assets through digital communication interfaces to ensure your systems are performing and responsive. From real-time data exchange to automated system updates, our platform keeps your operations running smoothly.
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
                      Our platform utilizes common information models to standardize data exchange and interpretation across different systems and sectors.
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
                    <Typography.Title align='right' level={2}>Open-Source Innovation</Typography.Title>
                    <Typography.Paragraph align='right' className='featureDesc'>
                    Leverage a transparent and modifiable platform that grows through collaborative contributions. With our open-source platform, you're not just adopting technology; you're joining a movement towards innovative, community-driven development.
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
                    Our platform is designed to work on different hardware setups and communicate with multiple power system assets. This freedom allows you to optimize existing systems and scale new solutions without compatibility concerns.
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
              <Col span={4} className='extra'></Col>
            </Row>
            <CTA></CTA>
          </Content>
        </Layout>
        <Footer id="footer"><Contacts>
          </Contacts></Footer>
      </Layout>
    </>
  )
}

export default App
