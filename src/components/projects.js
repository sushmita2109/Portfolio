import React,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardActions,CardText,CardTitle,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450',margin: 'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:
                   'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>React Project #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </CardText>
                <CardActions border>
                 <Button colored>Github</Button>
                 
                 <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                 <IconButton name="share"/>
                </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450',margin: 'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:
                   'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>React Project #2</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </CardText>
                <CardActions border>
                 <Button colored>Github</Button>
                 
                 <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                 <IconButton name="share"/>
                </CardMenu>
                </Card>
                 </div>               
            )
        }
        else if(this.state.activeTab===1){
            return(
                <div><h1>This is Node</h1></div>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
        else if(this.state.activeTab===3){
            return(
                <div><h1>This is Python</h1></div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({activeTab:tabId})} ripple >
                    <Tab>React</Tab>
                    <Tab>Node</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Python</Tab>

                </Tabs>
                <section className="project-grid">
                    <Grid >
                        <Cell col={12}>
                            <div>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    

                </section>
            </div>
        )
    }
}

export default Projects;