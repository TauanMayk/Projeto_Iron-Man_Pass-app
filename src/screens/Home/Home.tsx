import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "../Styles";

import { IronManLogo } from "../../components/IronManLogo/IronManLogo";
import { IronManButton } from "../../components/IronManButton/IronManButton";

export default function Home() {
  return (
    <>
      <View style={styles.appContainer}>

        <View style={styles.logoContainer}>
          <IronManLogo />
        </View>

        <View style={styles.inputContainer}>
          <IronManButton />
        </View>

        <StatusBar style="light" />
      </View>
    </>
  );
}
