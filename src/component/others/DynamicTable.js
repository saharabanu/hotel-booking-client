'use client'
import {  Table } from "antd";




const UmTable = ({loading,dataSource,columns,pageSize,totalPAge,showSizeChanger,onPaginationChange, onTableChange, showPagination=true}) => {

    const paginationConfig = showPagination ? {pageSize:pageSize,
        total:totalPAge,
        pageSizeOptions:[5,10,20],
        showSizeChanger:showSizeChanger,
        onChange:onPaginationChange} : false
  return <Table loading={false} 
  dataSource={dataSource} 
  columns={columns} 
  pagination={paginationConfig}
  onChange={onTableChange} style={{width:'100%'}}/>;
}

export default UmTable