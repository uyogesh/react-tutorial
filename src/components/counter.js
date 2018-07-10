import React, { Component } from 'react';

export default class Counter extends Component {


    state={
        count:10,
        buttonClicked: false,
        nameEntered: false
    }


    render() {
        return (
            <View>
                <View>
                    <Text>
                        {this.state.count}
                    </Text>
                </View>
                <View>

                    <TouchableOpacity onPress={() => {
                        this.setState( {count: this.state.count -1, buttonClicked: true } );                        
                    }}>
                        <View>
                            <Text>
                                -
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState( {count: this.state.count + 1, buttonClicked: true } );
                    }}>
                        <View>
                            <Text>
                                +
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


}

