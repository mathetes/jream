import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "#999",
        "fontFamily": "\"Roboto\", sans-serif",
        "color": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "wrapper": {
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "header": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "background": "green"
    },
    "content": {},
    "footer": {
        "background": "green",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "h1": {
        "textAlign": "center"
    },
    "li": {
        "lineHeight": 2
    },
    "a": {
        "color": "#fff",
        "marginRight": 30
    },
    "a:hover": {
        "color": "yellow"
    },
    "login-page": {
        "width": 360,
        "paddingTop": "8%",
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "form": {
        "position": "relative",
        "zIndex": 1,
        "background": "#FFFFFF",
        "maxWidth": 360,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto",
        "paddingTop": 45,
        "paddingRight": 45,
        "paddingBottom": 45,
        "paddingLeft": 45,
        "textAlign": "center",
        "boxShadow": "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
    },
    "form input": {
        "fontFamily": "\"Roboto\", sans-serif",
        "outline": 0,
        "background": "#f2f2f2",
        "width": "100%",
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "boxSizing": "border-box",
        "fontSize": 14
    },
    "form button": {
        "fontFamily": "\"Roboto\", sans-serif",
        "textTransform": "uppercase",
        "outline": 0,
        "background": "#4CAF50",
        "width": "100%",
        "border": 0,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "color": "#FFFFFF",
        "fontSize": 14,
        "WebkitTransition": "all 0.3 ease",
        "transition": "all 0.3 ease",
        "cursor": "pointer"
    },
    "form button:hover": {
        "background": "#43A047"
    },
    "form button:active": {
        "background": "#43A047"
    },
    "form button:focus": {
        "background": "#43A047"
    },
    "form message": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#b3b3b3",
        "fontSize": 12
    },
    "form message a": {
        "color": "#4CAF50",
        "textDecoration": "none"
    },
    "form register-form": {
        "display": "none"
    },
    "container": {
        "position": "relative",
        "zIndex": 1,
        "maxWidth": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "container:before": {
        "content": "",
        "display": "block",
        "clear": "both"
    },
    "container:after": {
        "content": "",
        "display": "block",
        "clear": "both"
    },
    "container info": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "container info h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 36,
        "fontWeight": "300",
        "color": "#1a1a1a"
    },
    "container info span": {
        "color": "#4d4d4d",
        "fontSize": 12
    },
    "container info span a": {
        "color": "#000000",
        "textDecoration": "none"
    },
    "container info span fa": {
        "color": "#EF3B3A"
    },
    "//Форма добавления сообщенийwrapper": {
        "maxWidth": 600,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "forms fieldset": {
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "forms legend": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "bold",
        "fontSize": 1.2
    },
    "forms label": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "forms label textarea": {
        "display": "block",
        "width": "100%"
    },
    "forms label select": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"text\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"email\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"search\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"tel\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"url\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"password\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"color\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"file\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"number\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"range\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"date\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"month\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"week\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"time\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"datetime\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms label input[type=\"datetime-local\"]": {
        "display": "block",
        "width": "100%"
    },
    "forms textarea": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms select": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"text\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"email\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"search\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%",
        "boxSizing": "border-box"
    },
    "forms input[type=\"tel\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"url\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"password\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"color\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"file\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "1px solid #ddd",
        "maxWidth": "100%",
        "borderWidth": 0
    },
    "forms input[type=\"number\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"range\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"date\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"month\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"week\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"time\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"datetime\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"datetime-local\"]": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "paddingTop": 0.25,
        "paddingRight": 0.4,
        "paddingBottom": 0.25,
        "paddingLeft": 0.4,
        "border": "1px solid #ddd",
        "maxWidth": "100%"
    },
    "forms input[type=\"image\"]": {
        "verticalAlign": "bottom"
    }
});