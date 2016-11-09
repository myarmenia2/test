import React from "react"
import {connect} from "react-redux"

@connect((store)=> {
  return {
    username1: store.age
  }
})
export default class MainController extends React.Component{
  render(){
    return (
      <div>
        {this.props.username1}
      </div>
    )
  }
}
