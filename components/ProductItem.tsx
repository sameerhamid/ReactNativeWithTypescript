import {View, Text, Image} from 'react-native';
import React from 'react';
import {ProductsDetails} from '../entity';

interface DataProp {
  item: ProductsDetails;
}

const ProductItem = ({item}: DataProp) => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#f2f5f3',
        marginTop: 20,
        flexDirection: 'row',
        padding: 20,
        gap: 10,
        flexWrap: 'wrap',
        borderRadius: 22,
      }}>
      <View>
        <Image
          source={{uri: item.image}}
          width={100}
          height={100}
          borderRadius={22}
        />
        <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10}}>
          {item.price}
        </Text>
      </View>

      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
