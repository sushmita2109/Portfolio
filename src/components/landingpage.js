import React,{Component} from 'react';
import { Grid,Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid classname="landing-grid">
                    <Cell col={12}>
                        <img src="https://curaflo.com/wp-content/uploads/2017/04/female-avatar3.png" alt="avatar" className="avatar-img"/>
                    <div className="banner-text">
                
                     <h1>Full Stack Web Devloper</h1>
                     <hr/>
                     <p>HTML| CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | MongoDB</p>
                    <div className="social-links">
                        {/* LinkedIn*/}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linked-square"  aria-hidden="true"/>
                        </a>

                        {/* Github*/}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                        </a>

                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;