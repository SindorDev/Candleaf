import Company from "../../components/company/Company"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { Card, Typography, Row, Col, Divider, Image  } from 'antd';
import { useGetProfileQuery } from "../../redux/api/user-api";
const { Title, Paragraph, Text } = Typography;
const Profile = () => {
    const {data} = useGetProfileQuery()

  return (
    <>
      <Header/>
      
    <div style={{ padding: '20px' }}>
      <Card
        style={{ maxWidth: 1100, margin: '0 auto', borderRadius: '10px' }}
        
      >
        <div className='flex items-center justify-center'>
         <Image
            width={200}
            height={200}
            src="error"
            alt="profile"
            fallback={data?.image}
            style={{marginBottom: "50px", borderRadius: "50%"}}
/>
        </div>
        <Title level={2} style={{ textAlign: 'center' }}>{data?.firstName}</Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Full Stack Developer | Tech Enthusiast | Frontend Developer
        </Paragraph>
        <Divider />
        <Row className='ml-[100px]'>
          <Col span={9}>
            <Text strong>UserName</Text>
            <Paragraph>{data?.username}</Paragraph>
          </Col>
          <Col span={7}>
            <Text strong>Gender</Text>
            <Paragraph>{data?.gender}</Paragraph>
          </Col>

          <Col span={8}>
            <Text strong>Email</Text>
            <Paragraph>{data?.email}</Paragraph>
          </Col>
        </Row>
        <Divider />
      </Card>
    </div>
      <Footer/>
      <Company/>
    </>
  )
}

export default Profile