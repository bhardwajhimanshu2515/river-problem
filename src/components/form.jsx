import React from "react";
import "./form.scss";
import Result from "./result";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            riverVelocity:"",
            personVelocity:"",
            angleOfSwim:"",
            widthOfRiver:"",
            degree:"",
            timeTaken:"",
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:[e.target.value]});
    }
    submit=async(e)=>{
        e.preventDefault();
        
        console.log(this.state.riverVelocity,this.state.personVelocity,this.state.angleOfSwim,this.state.widthOfRiver)
        //parse strings into int <here className=""
        let rV = parseInt(this.state.riverVelocity);
        let pV = parseInt(this.state.personVelocity);
        let aOfSwim = parseInt(this.state.angleOfSwim);
        let widthRiver = parseInt(this.state.widthOfRiver);

        //Calculations goes here..................

        //1. Degree of trajectory
        let deg=await (Math.atan((pV * Math.sin(aOfSwim * Math.PI / 180)) / (rV + (pV * Math.cos(aOfSwim * Math.PI / 180))))*(180/Math.PI))
        this.setState({degree:deg})
        //2. Time Taken
        let time=await (widthRiver / (pV * Math.sin(aOfSwim * Math.PI / 180)))
        this.setState({timeTaken:time})

        console.log(deg,time);
        this.setState({riverVelocity:""});
        this.setState({personVelocity:""});
        this.setState({angleOfSwim:""});
        this.setState({widthOfRiver:""});
    }
    
    render(){
        const resultJSX=<Result degree={this.state.degree} time={this.state.timeTaken}/>
        return(
            <div class="wrap">
                <div class="cont">
                <div class="login-box" style={{marginTop:"100px"}}>
                    <form>
                        <div class="user-box">
                            <input type="text" name="riverVelocity" onChange={this.handleChange} value={this.state.riverVelocity} />
                            <label>River Velocity</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="personVelocity" onChange={this.handleChange} value={this.state.personVelocity} />
                            <label>Person Velocity</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="angleOfSwim" onChange={this.handleChange} value={this.state.angleOfSwim} />
                            <label>Angle Of Swim</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="widthOfRiver" onChange={this.handleChange} value={this.state.widthOfRiver} />
                            <label>Width Of River</label>
                        </div>
                        <button onClick={this.submit}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
                {resultJSX}
            </div>
            
        )
    }
}

export default Form;