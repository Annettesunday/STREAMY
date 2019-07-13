import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client.init({
        clientId:
          "690209340466-kj69u7cvobifuflc6vcjr21vu399o2qe.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
