import React, {useEffect, useState} from 'react';
import { FlatList,Image, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { itemData } from '../utils/FauxData';
const Item = ({ item }) => {
    return <View style={styles.item}>{item.icon}</View>;
};



const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];
 

const DiscoverScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  

return (


    <View style={styles.app}>

    
    <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />


      <FlatList
        data={itemData}
        numColumns={3}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
    </View>
  );
};

const styles = {

    app: {
      flex: 3, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: 400
    },

    
    item: {
      flex: 1,
      maxWidth: "33%", // 100% devided by the number of rows you want
      alignItems: "center",

      
      // my visual styles; not important for the grid
      padding: 10,
      borderWidth: 1.5,
      borderColor: "#fff"
    }
  };

export default DiscoverScreen; 