import React from "react";
import { View, TouchableOpacity, Text, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ContainerStyles from "../../assets/Styles/ContainerStyles";
import IconStyles from "../../assets/Styles/IconStyles";
import TextStyles from "../../assets/Styles/TextStyles";

const DrawerHeader = ({ navigation }) => {

    return (
        <View style={[ContainerStyles.headerViewStyle, { marginTop: hp('3') }]}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#EB5703"
                translucent={true}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.toggleDrawer();
                }}>
                <Ionicons name="menu-outline" size={wp('10')} style={[IconStyles.drawerManuIcon]} />

            </TouchableOpacity>
            <Text style={[TextStyles.whiteMediumHeading]}>Home Screen</Text>
        </View>

    )

}

export default DrawerHeader;