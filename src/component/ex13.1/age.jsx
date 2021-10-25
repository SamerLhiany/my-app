import React from "react"

class Ages extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                
                <h2>Users Who Were Born Before 1990</h2>
                
                 {(this.props.ages).map((person,index)=>{
                     return <div key={index}>
                        <h3>Name:  {person.name}</h3>
                        
                        <p>Birthday:  {person.birthday}</p>
                        
                        <p>Meats:  {person.favoriteFoods.meats.join(", ")}</p>
                        
                        <p>Fish:  {person.favoriteFoods.fish.join(", ")}</p>
                        
                        
                        </div>
                 })}
            </div>
        )
    }
}

export default Ages;