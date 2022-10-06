import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    const onSelected = (item) =>{
        navigation.navigate("Products", { name: item.title }), 
    }
    const renderItem = ({ item }) => <Categories item={item} onSelected={onSelected}/>
    return (
       <FlatList
       data={categories}
       renderItem={renderItem}
       keyExtractor={item => item.id.toString()}
       style={styles.containerList}
       />
    )
};
export default Categories; 