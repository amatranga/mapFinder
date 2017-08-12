import React from 'react';

const OAuth = () => {
  return (
    <div className="col text-center">
      <p style={{'marginBottom' : '15px', 'marginTop' : '15px'}}>Login or Signup using Facebook or Google</p>
      <a style={{'marginRight':'15px'}} href="/auth/facebook"><span><img src="/assets/fb-logo.png"></img></span></a>
      <a style={{'marginLeft':'15px'}} href="/auth/google"><span><img style={{width:'30px'}} src="/assets/google-logo.png"></img></span></a>
    </div>
  );
}

export default OAuth;
