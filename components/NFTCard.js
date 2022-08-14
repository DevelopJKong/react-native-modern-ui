import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
//여기서 native 하고 core의 useNavigation의 차이점은 뭐지?

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";

import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderTopLeftRadius: SIZES.font, borderTopLeftRadius: SIZES.font }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo/>
    </View>
  );
};

export default NFTCard;
