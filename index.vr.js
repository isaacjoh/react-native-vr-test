import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    imageSrc: 'inside-bar.jpg',
    buttonImageSrc: 'inside-bar.jpg',
  },
  {
    key: 1,
    imageSrc: 'inside-sofas.jpg',
    buttonImageSrc: 'inside-sofas.jpg',
  },
  {
    key: 2,
    imageSrc: 'outside-gate.jpg',
    buttonImageSrc: 'outside-gate.jpg',
  },
  {
    key: 3,
    imageSrc: 'outside-benches.jpg',
    buttonImageSrc: 'outside-benches.jpg',
  }
];

export default class GDVR_REACTVR_SITEPOINT_GALLERY extends React.Component {
  constructor() {
    super();

    this.state = {
      src: 'chess-world.jpg',
    };
  }

  render() {
    return (
      <View>
        <Canvas
          src={this.state.src}
        />
        <UI
          buttonConfig={Config}
          onClick={(key)=>{
            this.setState({src: Config[key].imageSrc});
          }}
        />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -3]}],
          }}>
          Find the letters
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('GDVR_REACTVR_SITEPOINT_GALLERY', () => GDVR_REACTVR_SITEPOINT_GALLERY);
