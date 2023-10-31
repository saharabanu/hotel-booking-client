import { Breadcrumb } from 'antd';
import Link from 'next/link';
import {HomeOutlined} from '@ant-design/icons'

const HotelBreadCrumb = ({items}
) => {

  const breadCrumbItems = [
    {
      title: (<Link href="/">
       
      </Link>)
    },
    ...items.map((item)=> {
      return {
        title: item.link ? (
          <Link href={item.link} className='breadCrumb-links' >  {item.label} </Link>
        ): <span>{item.label}</span>
      }
     
    })
    
  ]
  return <Breadcrumb items={breadCrumbItems}/>
}

export default HotelBreadCrumb


