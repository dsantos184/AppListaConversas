import React, {Component} from 'react';

import{
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,    
} from 'react-native';

export default class ListItem extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            mgs: props.data.mensagem,
        }

        this.click= this.click.bind(this);       
    }

    click()
    {

    }

    render()
    {
        const { data } = this.props;

        let corNome = "#0404B4";

        if( data.sexo == "F" )
        {
            corNome = "#B404AE";
        }
      
        return(
            <TouchableHighlight onPress={this.click()} underlayColor="#CCCCCC">
                
                <View style={styles.containerList}>
                    
                    <View style={styles.containerIdent}>        
                        <Image source={{uri:data.img}} style={styles.img} />
                    </View>

                    <View style={styles.containerMsg}>
                        {/*A propriedade numberOfLines limita o numero de linhas em que o text vai ocupar
                           Aqui, estou limitando o texto em umalinha 
                        */}                    
                        <Text numberOfLines={1} style={[{color:corNome}, styles.nome]}>{data.nome}</Text>
                        <Text numberOfLines={1} style={styles.textMsg}>
                            {this.state.mgs}
                        </Text>
                    </View>

                </View>

            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    containerList:
    {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: "#CCCCCC",
        flex: 1,
        flexDirection: 'row',
    },

    img:
    {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginTop: 10,
    },

    containerMsg:
    {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft: 10,
    },

    nome:
    {
        fontSize: 15,
        fontWeight: 'bold',
    }
})