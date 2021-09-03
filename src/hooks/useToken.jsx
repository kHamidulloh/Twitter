import { useContext } from 'react'
import { Context } from '../contexts/Authetication'

function useToken()  {
    const {state , setState} = useContext(Context)
  
    return [state, setState]
}

export default useToken