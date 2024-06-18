import { Flex, Typography, Input, Button, Form } from 'antd'
import "./CTA.css"

const onFinish = async (data) => {
    const url = "https://formkeep.com/f/fbfe6de2a864";
    //const url = ""
  
    const submitRequest = async (reqBody) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: reqBody }),
        });
        const json = await res.json();
        return { response: json, error: undefined };
      } catch (error) {
        return { response: undefined, error: error };
      }
    };
    let result = await submitRequest(data);
    if(result["error"]!=undefined){
        console.log("Form submission failed! " + result["error"])
    } 
    return result;
  };

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
            <Form
                name="register"
                id="register"
                onFinish={onFinish}
                >
                <Form.Item
                    name="name"
                    >
                    <Input required id="nameBox" placeholder='Full name'></Input>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    }]}>
                    <Input required type='email' id="emailBox" placeholder='Your email'></Input>
                </Form.Item>
                <Form.Item
                    name="organization">
                    <Input required id="orgBox" placeholder='Your organization'></Input>
                </Form.Item>
                <Form.Item name="comment">
                    <Input id="comment" type='textarea' placeholder='Comments...'></Input>
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Register</Button>
                </Form.Item>
            </Form>
            
        </Flex>
    </>
}

export default CTA