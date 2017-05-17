import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "font": "14px \"Lucida Grande\", Helvetica, Arial, sans-serif",
        "fontFamily": "\"Lato\", sans-serif"
    },
    "a": {
        "color": "#00B7FF"
    },
    "home::after": {
        "backgroundImage": "url('../images/icon-seamless.png')",
        "content": "",
        "opacity": 0.1,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "position": "absolute",
        "zIndex": -1
    },
    "content::after": {
        "backgroundImage": "url('../images/icon-seamless.png')",
        "content": "",
        "opacity": 0.1,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "position": "absolute",
        "zIndex": -1
    },
    "list::after": {
        "backgroundImage": "url('../images/icon-seamless.png')",
        "content": "",
        "opacity": 0.1,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "position": "absolute",
        "zIndex": -1
    },
    "home h1": {
        "fontSize": 56,
        "fontWeight": "600",
        "color": "white",
        "textTransform": "uppercase",
        "marginBottom": 0
    },
    "home p": {
        "color": "white"
    },
    "box-input": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "maxWidth": 500,
        "textAlign": "center",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "content": {
        "maxWidth": 500,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "list card": {
        "paddingTop": 20,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    }
});