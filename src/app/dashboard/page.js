/* eslint-disable @next/next/no-async-client-component */
'use client'
const getData = async () => {
  const res = await fetch("http://localhost:8000/users",{
    cache: "force-cache",
  })
  const data = await res.json()
  return data
}
 
const DashboardPage = async() => {
 const data = await getData();
//  console.log(data)
  return (
    <div>This is  DashboardPage
    </div>
  )
}

export default DashboardPage