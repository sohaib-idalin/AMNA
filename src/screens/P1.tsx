import React from 'react';
import { View, Text, Button } from 'react-native';

const P1 = ({ navigation }:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>p1 p1 p1</Text>
      <Button
        title="Go to p2"
        onPress={() => navigation.navigate('P2')}
      />
    </View>
  );
};

export default P1;