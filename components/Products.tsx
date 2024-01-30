import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';
import {ProductsDetails} from '../entity';

const Products = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductsDetails[]>([]);
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    setLoading(false);
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={100} style={{marginTop: 100}} />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => {
            return <ProductItem item={item} />;
          }}
          style={{marginBottom: 22}}
        />
      )}
    </View>
  );
};

export default Products;
