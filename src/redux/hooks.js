/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { useEffect, useState } from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface IDebouned {
    searchQuery: string;
     delay: number
}

export const useDebounced = ({searchQuery, delay}) => {
    const [debouncedValue , setDebouncedValue] = useState<string>(searchQuery);

    useEffect(()=> {
        const handler = setTimeout(()=>{
          setDebouncedValue(searchQuery)
        }, delay);
        return ()=>{
            clearTimeout(handler)
        }
    },[searchQuery, delay])
    return  debouncedValue
}