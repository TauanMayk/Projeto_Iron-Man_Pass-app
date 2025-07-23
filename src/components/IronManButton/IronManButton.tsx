import React, { useState } from "react";
import { Text, Pressable } from "react-native";

import { styles } from "./ButtonStyles";
import { IronManTextInput } from "../IronManTextInput/IronManTextInput";
import genaretaPass from "../../services/passwordService";

import * as Clipboard from "expo-clipboard";

export function IronManButton() {
  const [pass, setPass] = useState("");

  function handleGenaretaButton() {
    let genarateToken = genaretaPass();
    setPass(genarateToken);
  }

  function handleButtonCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <IronManTextInput pass={pass} />

      <Pressable onPress={handleGenaretaButton} style={styles.button}>
        <Text style={styles.text}>Generate</Text>
      </Pressable>

      <Pressable onPress={handleButtonCopy} style={styles.button}>
        <Text style={styles.text}>🗒️ Copy</Text>
      </Pressable>
    </>
  );
}
