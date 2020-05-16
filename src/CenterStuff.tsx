import React from 'react';
import { View, Text } from 'react-native';

interface CenterStuffProps {
    
}

export const CenterStuff: React.FC<CenterStuffProps> = ({children}) => {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
                {children}
            </View>
        );
}