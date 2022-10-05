import React from "react";
import { View, Text, Button } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <Text style={styles.title}> Catergories </Text>
            <CategoryItem 
            item={item}
             onSelected={()=>null}/>
            <Button
            title= "Go to products"
            onPress={() => navigation.navigate("Products")}
            />
        </View>
    )
};
export default Categories; 