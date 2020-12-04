import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10417_1088}>
        <View style={styles.View_10417_1089}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b68/71be/ff21c8ae5b38e910f4361adb7814bf20"
            }}
            style={styles.ImageBackground_10417_1090}
          />
          <View style={styles.View_10417_1091} />
          <View style={styles.View_10417_1092}>
            <Text style={styles.Text_10417_1092}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_1093}>
            <Text style={styles.Text_10417_1093}>39m • Alden Johngon</Text>
          </View>
        </View>
        <View style={styles.View_10417_1094}>
          <ImageBackground style={styles.ImageBackground_10417_1095} />
          <View style={styles.View_10417_1096}>
            <Text style={styles.Text_10417_1096}>
              Euro 2020 qualification latest: Italy clinch their spot last
              minute
            </Text>
          </View>
          <View style={styles.View_10417_1097}>
            <Text style={styles.Text_10417_1097}>39m • Alden Johngon</Text>
          </View>
        </View>
        <View style={styles.View_10417_1098}>
          <View style={styles.View_10417_1099} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df85/64d4/12a0e3015789dae66bb2ea42a55bde65"
            }}
            style={styles.ImageBackground_10417_1100}
          />
          <View style={styles.View_10417_1101}>
            <Text style={styles.Text_10417_1101}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
          <View style={styles.View_10417_1102}>
            <Text style={styles.Text_10417_1102}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1103}>
            <Text style={styles.Text_10417_1103}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1104}>
          <View style={styles.View_10417_1105} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_1106}
          />
          <View style={styles.View_10417_1107}>
            <Text style={styles.Text_10417_1107}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_1108}>
            <Text style={styles.Text_10417_1108}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1109}>
            <Text style={styles.Text_10417_1109}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1110}>
          <View style={styles.View_10417_1111} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_1112}
          />
          <View style={styles.View_10417_1113}>
            <Text style={styles.Text_10417_1113}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_1114}>
            <Text style={styles.Text_10417_1114}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1115}>
            <Text style={styles.Text_10417_1115}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1116}>
          <View style={styles.View_10417_1117} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fe/416b/50ad7a54e800623cad09b4f38960610e"
            }}
            style={styles.ImageBackground_10417_1118}
          />
          <View style={styles.View_10417_1119}>
            <Text style={styles.Text_10417_1119}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1120}>
            <Text style={styles.Text_10417_1120}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
          <View style={styles.View_10417_1121}>
            <Text style={styles.Text_10417_1121}>
              England’s faith in protocol was rewarded, now UEFA gets tough
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1122}>
          <View style={styles.View_10417_1123} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b3a/b8ad/446cfa75c49a1172bb18b1e56aa878f1"
            }}
            style={styles.ImageBackground_10417_1124}
          />
          <View style={styles.View_10417_1125}>
            <Text style={styles.Text_10417_1125}>
              Why Gladonia won’t go unbeaten in the Premier League
            </Text>
          </View>
          <View style={styles.View_10417_1126}>
            <Text style={styles.Text_10417_1126}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1127}>
            <Text style={styles.Text_10417_1127}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
        <View style={styles.View_10417_1128}>
          <View style={styles.View_10417_1129} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88c7/cc70/9a3bdaca2cc05133d6f37d9dc7db9bf9"
            }}
            style={styles.ImageBackground_10417_1130}
          />
          <View style={styles.View_10417_1131}>
            <Text style={styles.Text_10417_1131}>
              Smith goal gives Atletico 1-0 win over Manchester
            </Text>
          </View>
          <View style={styles.View_10417_1132}>
            <Text style={styles.Text_10417_1132}>2h • Alden Johngon</Text>
          </View>
          <View style={styles.View_10417_1133}>
            <Text style={styles.Text_10417_1133}>
              The football team have the change to make it seven wins on the
              spin this...
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_1134}>
        <View style={styles.View_10417_1135}>
          <Text style={styles.Text_10417_1135}>Feed</Text>
        </View>
        <View style={styles.View_10417_1136}>
          <View style={styles.View_10417_1137} />
          <View style={styles.View_10417_1138}>
            <Text style={styles.Text_10417_1138}>News</Text>
          </View>
        </View>
        <View style={styles.View_10417_1139}>
          <View style={styles.View_10417_1140} />
          <View style={styles.View_10417_1141}>
            <Text style={styles.Text_10417_1141}>Scores</Text>
          </View>
        </View>
        <View style={styles.View_10417_1142}>
          <View style={styles.View_10417_1143} />
          <View style={styles.View_10417_1144}>
            <Text style={styles.Text_10417_1144}>Transfers</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_1088: {
    width: 375,
    height: 1480,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_1089: {
    width: 350,
    minWidth: 350,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 154
  },
  ImageBackground_10417_1090: {
    width: 350,
    minWidth: 350,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_10417_1091: {
    width: 350,
    minWidth: 350,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1092: {
    width: 311.89111328125,
    minWidth: 311.89111328125,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.042980194091797,
    top: 107
  },
  Text_10417_1092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1093: {
    width: 183.52435302734375,
    minWidth: 183.52435302734375,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.042980194091797,
    top: 166
  },
  Text_10417_1093: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1094: {
    width: 350,
    minWidth: 350,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 810
  },
  ImageBackground_10417_1095: {
    width: 350,
    minWidth: 350,
    height: 197,
    minHeight: 197,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10417_1096: {
    width: 311.89111328125,
    minWidth: 311.89111328125,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.042957305908203,
    top: 107
  },
  Text_10417_1096: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1097: {
    width: 183.52435302734375,
    minWidth: 183.52435302734375,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.042957305908203,
    top: 166
  },
  Text_10417_1097: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1098: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 366
  },
  View_10417_1099: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_1100: {
    width: 110,
    minWidth: 110,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1101: {
    width: 211,
    minWidth: 211,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 17
  },
  Text_10417_1101: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1102: {
    width: 194,
    minWidth: 194,
    height: 23.274999618530273,
    minHeight: 23.274999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 91.4375
  },
  Text_10417_1102: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1103: {
    width: 198,
    minWidth: 198,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 55
  },
  Text_10417_1103: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1104: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 514
  },
  View_10417_1105: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_1106: {
    width: 110,
    minWidth: 110,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1107: {
    width: 211,
    minWidth: 211,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 17
  },
  Text_10417_1107: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1108: {
    width: 194,
    minWidth: 194,
    height: 23.274999618530273,
    minHeight: 23.274999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 91.4375
  },
  Text_10417_1108: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1109: {
    width: 198,
    minWidth: 198,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 55
  },
  Text_10417_1109: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1110: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 662
  },
  View_10417_1111: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_1112: {
    width: 110,
    minWidth: 110,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1113: {
    width: 211,
    minWidth: 211,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 17
  },
  Text_10417_1113: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1114: {
    width: 194,
    minWidth: 194,
    height: 23.274999618530273,
    minHeight: 23.274999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 91.4375
  },
  Text_10417_1114: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1115: {
    width: 198,
    minWidth: 198,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 55
  },
  Text_10417_1115: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1116: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 1022
  },
  View_10417_1117: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_1118: {
    width: 110,
    minWidth: 110,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1119: {
    width: 194,
    minWidth: 194,
    height: 23.274999618530273,
    minHeight: 23.274999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 91.4375
  },
  Text_10417_1119: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1120: {
    width: 198,
    minWidth: 198,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 55
  },
  Text_10417_1120: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1121: {
    width: 211,
    minWidth: 211,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 16
  },
  Text_10417_1121: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1122: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 1170
  },
  View_10417_1123: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_1124: {
    width: 110,
    minWidth: 110,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1125: {
    width: 211,
    minWidth: 211,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 17
  },
  Text_10417_1125: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1126: {
    width: 194,
    minWidth: 194,
    height: 23.274999618530273,
    minHeight: 23.274999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 91.4375
  },
  Text_10417_1126: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1127: {
    width: 198,
    minWidth: 198,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 55
  },
  Text_10417_1127: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1128: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 1318
  },
  View_10417_1129: {
    width: 350,
    minWidth: 350,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10417_1130: {
    width: 110,
    minWidth: 110,
    height: 133,
    minHeight: 133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10417_1131: {
    width: 211,
    minWidth: 211,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 17
  },
  Text_10417_1131: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1132: {
    width: 194,
    minWidth: 194,
    height: 23.274999618530273,
    minHeight: 23.274999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 91.4375
  },
  Text_10417_1132: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1133: {
    width: 198,
    minWidth: 198,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 55
  },
  Text_10417_1133: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1134: {
    width: 375,
    minWidth: 375,
    height: 139,
    minHeight: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(243, 245, 249, 1)",
    overflow: "hidden"
  },
  View_10417_1135: {
    width: 299,
    minWidth: 299,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 44
  },
  Text_10417_1135: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1136: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 100
  },
  View_10417_1137: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_1138: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10417_1138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1139: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130.72120666503906,
    top: 100
  },
  View_10417_1140: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_1141: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10417_1141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10417_1142: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249.6686553955078,
    top: 100
  },
  View_10417_1143: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(206, 17, 39, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_1144: {
    width: 112.33134460449219,
    minWidth: 112.33134460449219,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10417_1144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_2: { height: 1480 }
})
