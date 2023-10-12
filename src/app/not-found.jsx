import {Button, Row} from 'antd'
import Link from 'next/link'

const NotfoundPage = () => {
  return (
    <>
    <div style={{ backgroundColor: "gray", height:'100vh', color: "#000"}}>
      <div className="notFound-content">
        <div>
        <h1 style={{color:"#000"}}> OOOPs!!! This page does not found</h1>
        
        <Link href='/'>
          <Button className='btn btn_theme' style={{paddingBottom:"40px"}} >Go Home</Button>
        </Link>
        </div>
      </div>
    </div>
    </>
  )
}
{/* <div justify='center' align='middle'>
      <Row  style={{ backgroundColor: "#000", height:'100vh', color: "#fff"}}>
      <div style={{textAlign:"center ", }}>
      <h1 style={{textAlign:"center",padding:'20px'}}>OOOPs!!!! This page does not found</h1>
      
      </div>
      
    </Row>
        
    </div> 
  <br /> <br />
     <Button danger> <Link href='/'> Back To Home</Link></Button>
  
  
  */}
export default NotfoundPage 