import React from "react"
import { userContext } from './context'

export default function Content2(){
    let [user, setUser] =React.useContext(userContext)

    const  contenStyle = {
        backgroundColor:'#ddd',
        textAlign:'center',
        margin: 10,
        padding:10
    }
    const onClickSingin=(event)=>{
        event.preventDefault()
        setUser('Tom Jerry')
    }

    return(
        <div style={contenStyle}>
            {
                (user)
                ?<span>Hello{user}</span>
                :<span>Please <a href="" onClick={onClickSingin}>
                    Singin</a></span>
            }
        </div>
    )
    
        
}