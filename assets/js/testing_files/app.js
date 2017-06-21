import React from 'react';
import padSounds from '../audio/padsounds.mp3';

module.exports = React.createClass({

    componentDidMount: function() {
      console.log("padSounds =", padSounds);
      var audio = document.createElement("audio");
      audio.src = '/static/bundles/' + padSounds;
      console.log("Play", audio);
      audio.play();

    },

    render: function(){
            return (

              <h1>Hello World has changed!</h1>
            )
    }
})
