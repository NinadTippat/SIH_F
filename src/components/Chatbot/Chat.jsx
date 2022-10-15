import React, { Component } from 'react';

class Chat extends Component {
    componentDidMount() {

        (function (m) {
            var kommunicateSettings =
                { "appid": "25038fcb95d112121212127c7781fb1a8357a8db0djfhjdsff", "popupqwidget": false, "automaticChatOpenOnNavigation": false };
            var s = document.createElement("script"); s.type = "text/javascript";
            s.src = "https://widget.kommunicate12.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate);

    }
    render() {
        return (
            <div>
            </div>
        );
    }
}
export default Chat;