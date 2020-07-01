import React, { Component } from 'react'
import {  View,Image,StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { reposCommits } from "../../services/GithubServices";
export class Repos extends Component {
    constructor(props){
        super(props)
        console.log(props.route.params,'99999999')
        this.state={
            commint:[],
        }
        this.sendHttp()
    }
    componentWillMount(){
       
    }
    sendHttp=()=>{

        reposCommits(this.props.route.params.login,this.props.route.params.name).then(res=>{
               console.log(res.length,'------')
              this.setState({
                  commint:res
              })
               
           })
    }
    render() {
        return (
            // <WebView source={{ uri: this.props.route.params.url }} />
            <View>
                {/* <Text>{this.state.commint.length}</Text> */}
                {this.state.commint.map(item=>{
                    return (
                        <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                           
                            <Thumbnail source={{uri: this.props.route.params.url}} />
                            <Body>
                            <Text>{item.author.login}</Text>
                            <Text>{item.commit.committer.date}</Text>
                </Body>
                            </Left>
                            </CardItem>
                         <CardItem>
                          <Body>
                           
                             <Text>committer : {item.commit.committer.name}</Text>
                           
                             <Text>email : {item.commit.committer.email}</Text>
                             <Text>message : {item.commit.message}</Text>
                          </Body>
                        </CardItem>
                        {/* <CardItem>
                          <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="logo-github" />
                              <Text>1,926 stars</Text>
                            </Button>
                          </Left>
                        </CardItem> */}
                      </Card>
                    )
                //     return <View>
                //           <Image
                //     style={styles.Image}
                //     source={{
                //     uri: item.author.avatar_url
                //     }}
                // />
                //         <Text>{item.author.login}</Text>
                //         <Text>{item.commit.committer.name}</Text>
                //         <Text>{item.commit.committer.date}</Text>
                //         <Text>{item.commit.committer.email}</Text>
                //         <Text>Action : {item.commit.message}</Text>
                //         <Text>----------------------------------</Text>
                //     </View>
                })}
            </View>
        )
    }
}

export default Repos
const styles = StyleSheet.create({
    Image:{
        width:150,
        height:150
    }
})
