import React from 'react';
import { View, Text, Button } from 'react-native';

const P1 = ({ navigation }:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>HOME</Text>
      <Button
        title="Go to NavS"
        onPress={() => navigation.navigate('NavS')}
      />
    </View>
  );
};

export default P1;