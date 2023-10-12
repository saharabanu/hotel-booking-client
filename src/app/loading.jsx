import { Spin, Row} from 'antd';
const loading = () => {
  return (
    <>
    <Row justify='center' align='middle' style={{padding:'20% 0'}}>
       <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Row>
    </>
  )
}

export default loading