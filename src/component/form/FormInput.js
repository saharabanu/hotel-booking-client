"use client"
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form"




const FormInput = ({name,type,size,value,id,placeholder,validation,label}) => {
    const {control, formState:{errors}} = useFormContext();

    
  return (
    <>
    {label? label : null}
    <Controller
        control={control}
        name={name}
        
        render={({ field }) => (
          
           type ==='password' ?  
           
           <Input.Password type={type}
           size={size}
           placeholder={placeholder}
           {...field}
           value={value ? value : field.value} required />
           
           : <Input type={type}
           size={size}
           placeholder={placeholder}
           {...field}
           value={value ? value : field.value}  required/>
           
        )}
      />
    {/* <small style={{color:"red"}}>error</small> */}

    </>
  )
}

export default FormInput