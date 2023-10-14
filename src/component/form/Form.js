"use client"
import { ReactElement, ReactNode, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"


// export type FormConfig = {
//     defaultValues? : Record<string, any>;
//     resolver?: any
// };
// export type FormProps = {
//     children? : ReactElement | ReactNode;
//     submitHandler : SubmitHandler<any>
// }  & FormConfig;



const Form = ({children, submitHandler, defaultValues, resolver} )=> {
    const formConfig  = {};

    if(!!defaultValues) formConfig['defaultValues'] = defaultValues;

    if(!!resolver) formConfig['resolver'] = resolver;

    const methods = useForm(formConfig);
    const {handleSubmit, reset} = methods;

    const onSubmit = (data) => {
        submitHandler(data);
        reset();
    }
    useEffect(()=>reset(defaultValues),[defaultValues,reset,methods])
  
    return (
      <FormProvider {...methods}>
       
        <form onSubmit={handleSubmit(onSubmit)}>
         {children}
        </form>
      </FormProvider>
    )
}

export default Form 