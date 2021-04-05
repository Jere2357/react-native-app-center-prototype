import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

export const List = (props: any) => {
  return (
    <View>
      {props.list.map((item: any, i: number) => (
        <ListItem
          key={i}
          bottomDivider
          topDivider
          onPress={() => console.log('Item Clicked')}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};
