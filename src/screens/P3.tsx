import React from 'react';
import { View, Text, Button } from 'react-native';

const P3 = ({ navigation }:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>p3 p3 p3</Text>
      <Button
        title="Go to p1"
        onPress={() => navigation.navigate('P1')}
      />
    </View>
  );
};

export default P3;