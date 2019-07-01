import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                            src="https://curaflo.com/wp-content/uploads/2017/04/female-avatar3.png"
                            alt="avatar"
                            style={{height: '200px'}}/>

                        </div>
                        <h2 style={{paddingTop:'2em'}}>Sushmita Kumari</h2>
                        <h4 style={{color:'gray'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy text 
                            ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book</p>
                            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                            <h5>Address</h5>
                            <p>Nagvara Bangalore</p>
                            <h5>Phone</h5>
                            <p>123-456-7890</p>
                            <h5>Email</h5>
                            <p>someone@gmail.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2012}
                        endYear={2006}
                        schoolName="My University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Education 
                        startYear={2008}
                        endYear={2005}
                        schoolName="My 2nd University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2015}
                        endYear={2017}
                        jobName="1st job"
                        jobDescription="Lorem Ipsum is simply dummy"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                        skill="javascript"
                        progress={100}/>
                        <Skills
                        skill="HTML/CSS"
                        progress={80}/>
                        <Skills
                        skill="Node"
                        progress={50}/>
                        <Skills
                        skill="React"
                        progress={70}/>
                        <Skills
                        skill="Python"
                        progress={50}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;