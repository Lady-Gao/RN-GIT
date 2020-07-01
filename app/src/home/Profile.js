import React, { Component } from 'react'
import { View,VirtualizedList,RefreshControl,StyleSheet,Image} from 'react-native'
import { getRequest } from "../../services/GithubServices";
import { Container, Header, Content,ListItem,List, Card, CardItem, Thumbnail, Text, Button, Icon, Left,Right, Body } from 'native-base';
export class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            subscriptions:[],
            refreshing:false
        }
    }
    componentWillMount(){
       this.getList()
    }
    showDetails=(val)=>{
        this.props.navigation.navigate('Repos',{
            url:val.html_url,
            name:val.name,
            login:val.owner.login,
          
        })
    }
  getList=()=>{
    this.setState({
        refreshing:true
    })
    getRequest('/users/Lady-Gao/repos').then(res=>{
       
        this.setState({
            subscriptions:res,
            refreshing:false
        })
    })

    }
    /**
     * 点击start
     * @param {} item 
     */
    onStar=(item)=>{
        console.log(item.html_url,'>>>>>>>>>')
    }
    /**
     * 点击项目
     * @param {} item 
     */
    onListItem=(item)=>{
        this.props.navigation.navigate('Repos',{
            login:item.owner.login,
            name:item.name,
            url:item.owner.avatar_url

        })
    }
    renderItem=(item,index)=>{
        let url=item.item.owner.avatar_url
        return (
        <List >
        <ListItem avatar onPress={()=>{this.onListItem(item.item)}}>
          <Left>
            <Thumbnail source={require('../../asset/github.png')} />
            
          </Left>
          <Body   >
          <Text>{item.item.name}</Text>
               <Text note>{item.item.created_at}</Text>
                <Image  source={{uri: url}} style={{height: 150, width: 150, flex: 1,marginBottom:15}}/>
                <Text >{item.item.description}</Text>
                <Text >{item.item.language}</Text>
                <Text note>{item.item.updated_at}</Text>

          <Button transparent textStyle={{color: '#87838B'}} onPress={()=>{this.onStar(item.item)}}>
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text>  </Text>
                 <Icon name="logo-github" />
                 <Text>{item.item.stargazers_count} stars</Text>
               </Button>
         </Body>

        </ListItem>
      </List>
           

    )}
   
    render() {
        return (
            <VirtualizedList style={styles.VirtualizedList}
            data={this.state.subscriptions}
            keyExtractor = {(item, index) => index.toString() }
            renderItem={this.renderItem}
            height={500}
            getItem = { (data, index) => this.state.subscriptions[index] }
            getItemCount = {(data) => this.state.subscriptions.length }
                    refreshControl= {
                        <RefreshControl
                        progressViewOffset={150}
                          refreshing={this.state.refreshing}
                        //   onRefresh={this.search}
                        />
                    }
                     >
                </VirtualizedList>
            
           
        )
    }
}

export default Profile


const styles = StyleSheet.create({

ButtonList:{
    height:50,
    },
    Image:{
        height:50,
        width:50
    }
})
