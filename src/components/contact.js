import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sushmita Kumari</h2>
                        <img 
                        src="https://image.shutterstock.com/image-vector/business-woman-icon-avatar-symbol-260nw-790518412.jpg"
                        alt ="avatar"
                        style={{height:'250px'}}
                        />
                       <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the 
                       printing and typesetting industry. Lorem Ipsum has been the 
                       industry's standard dummy text ever since the 1500s,</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                       <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (0542) 264-4743
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-enveolpe" aria-hidden="true"/>
                                    sushmita@gmail.com
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    My SkypeId
                                </ListItemContent>
                            </ListItem>

                        </List>
                        </div>
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}

export default Contact;