import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import { getUserInfo } from "../../services/GithubServices";
import { detailUser } from "../../redux/actions";
import {connect} from 'react-redux';
class Feed extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        getUserInfo(this.props.user.login).then(res => {
            this.props.dispatch(detailUser({
                avatar: res.avatar_url,
                userId: res.id,
                url: res.url
            }))

        })
    }
    render() {
        return (
            <View>
                 <Image
                    style={styles.avatar}
                    source={{
                        uri: this.props.user.avatar,
                      }}
                />
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.login.user
})
export default connect(mapStateToProps)(Feed);



const styles = StyleSheet.create({
    avatar:{
        width: 50,
        height: 50,
    }
})
