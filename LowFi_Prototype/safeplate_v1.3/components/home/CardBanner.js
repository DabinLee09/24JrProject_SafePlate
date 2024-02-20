import { View, Text } from 'react-native'
import React from 'react'
import BannerAnim from 'rc-banner-anim'

export default function CardBanner() {
  return (
    <View>
      <Text>CardBanner</Text>
      React.render(<BannerAnim>
        <Element key="a">
          <BGElement key="bg" style={{ background: require("../../assets/images/Hungry for more_.jpg") }}/>
          <TweenOne key='0'>test text</TweenOne>
        </Element>
        <Element key="b">
          <BGElement key="bg" style={{ background: require("../../assets/images/Invite dining buddies.jpg") }}/>
          <TweenOne key='0'>test text</TweenOne>
        </Element>
      </BannerAnim>, container);
    </View>
  )
}



const { Element } = BannerAnim;
const BgElement = Element.BgElement;

