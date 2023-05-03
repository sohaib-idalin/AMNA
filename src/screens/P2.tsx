import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const P2 = ({ navigation }:any) => {
    
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>p2 p2 p2 </Text>
      <Button
        title="Go to p3"
        onPress={() => navigation.navigate('P3')}
      />
    </View>
  );
};

export default P2;