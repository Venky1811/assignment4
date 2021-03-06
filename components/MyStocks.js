import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function MyStocks() {
    const data=[
        {
            name:"Wipro",
            symbol:"WIP",
            invested:67132,
            profit:14.31,
            returns:18
        },
        {
            name:"Flipkart",
            symbol:"FP",
            invested:76132,
            profit:23.12,
            returns:32
        },
         {
            name:"Amazon",
            symbol:"AMZN",
            invested:64132,
            profit:55.61,
            returns:21
        },
         {
            name:"Tata",
            symbol:"TATA",
            invested:67345,
            profit:32.21,
            returns:34
        },

    ]
  return (
    <View
        style={{
            flex:0.3,
            backgroundColor:"white",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
        }}
    >
      <Text
        style={{
            fontSize:16,
            paddingHorizontal:10,
            margin:5,
            fontWeight:"bold",
            color:"black"
        }}
      >your Stocks</Text>

      <ScrollView
        style={{
            flex:1
        }}
      >
            {data.map((item,index)=>(
                <Item 
                    key={index}  
                    name={item.name}
                    symbol={item.symbol}
                    invested={item.invested}
                    profit={item.profit}
                    returns={item.returns}
                />
            ))}
      </ScrollView>
    </View>
  )
}

function Item(props){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                backgroundColor:"white",
                borderRadius:10,
                marginHorizontal:10,
                marginVertical:5,
                padding:10,
                elevation:2
            }}
        >
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <View
                    style={{
                        backgroundColor:"#00bfff",
                        paddingHorizontal:10,
                        borderRadius:10,
                    }}
                >
                    <Text
                        style={{
                            color:"blue",
                            fontSize:30
                        }}
                    >{props.name[0]}</Text>
                </View>
                <View
                        style={{
                            marginLeft:10,
                            justifyContent:'center'
                        }}
                >
                    <Text
                        style={{
                            fontWeight:"bold",
                            fontSize:18
                        }}
                    >{props.name}</Text>
                    <Text
                        style={{
                            color:"grey",
                            fontSize:12
                        }}
                    >{props.symbol}</Text>
                </View>
            </View>
            <View
                style={{
                    justifyContent:"center",
                }}
            >
                <Text
                    style={{
                        fontWeight:"bold",
                        fontSize:18 
                    }}
                >$ {props.invested}</Text>
                <Text
                    style={{
                        color:"blue",
                        fontSize:12
                    }}
                >+${props.profit} ({props.returns}%)</Text>
            </View>
        </View>
    )
}