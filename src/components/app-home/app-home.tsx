import {Component} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <body>

      <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>


        <a-assets>

          <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"/>
          <video id="penguin" autoplay="true" loop  src="/assets/icon/game.mov"></video>


        </a-assets>

        <a-marker type='pattern' url='/assets/icon/edu.patt'>

          <a-image src="/assets/icon/gradcap.png" rotation='-90 0 0' scale="0.25 0.25 0.25" position='1 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="1000" to="2 2 1"></a-animation>

          </a-image>


          <a-entity
            geometry="primitive: plane; width: 0; height: auto"
            material="color: white"
            text="value: MBA Candidate - NYU Stern School of Business (currently enrolled) \n
            Master of Science - Rochester Institute of Technology \n
             Specialization in Artificial Intelligence. Research Based*; color:black"
            position='-3 1.5 0'
            rotation='-90 0 0'>

            <a-animation easing="linear" attribute="scale" dur="1000" to="4 14 17"></a-animation>

          </a-entity>
        </a-marker>
        <a-marker type='pattern' url='/assets/icon/gau.patt'>
          <a-entity
            geometry="primitive: plane; width: 0; height: auto"
            material="color: white"
            text="value: 9+ years of full time software development industry experience; color:black"
            position='-3 1.5 0'
            rotation='-90 0 0'>

            <a-animation easing="linear" attribute="scale" dur="1000" to="4 24 17"></a-animation>

          </a-entity>
        </a-marker>

        <a-marker type='pattern' url='/assets/icon/raje.patt'>
          <a-entity
            geometry="primitive: plane; width: 0; height: auto"
            material="color: white"
            text="value: Enterprise Software Developer at Integral Ad Science; color:black"
            position='-3 1.5 0'
            rotation='-90 0 0'>

            <a-animation easing="linear" attribute="scale" dur="1000" to="4 24 17"></a-animation>

          </a-entity>

          <a-image src="/assets/icon/ias.png" rotation='-90 0 0' scale="0.15 0.15 0.15" position='2.1 -2.5 0'>
            <a-animation easing="linear" attribute="scale" dur="10000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>
        <a-marker type='pattern' url='/assets/icon/rav.patt'>
          <a-entity
            geometry="primitive: plane; width: 0; height: auto"
            material="color: white"
            text="value: Platform Developer at Pulsepoint Inc; color:black"
            position='-3 1.5 0'
            rotation='-90 0 0'>

            <a-animation easing="linear" attribute="scale" dur="1000" to="4 24 17"></a-animation>

          </a-entity>
          <a-image src="/assets/icon/pp.png" rotation='-90 0 0' scale="0.15 0.15 0.15" position='2.1 1.5 0'>
            <a-animation easing="linear" attribute="scale" dur="10000" to="2 2 1"></a-animation>

          </a-image>

        </a-marker>
        <a-marker type='pattern' url='/assets/icon/marker.patt'>

          {/*<a-entity scale="0.05 0.05 0.05" geometry="primitive: torusKnot" position="0 0 -0" material="color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;">*/}
          {/*<a-animation easing="linear" attribute="rotation" dur="10000" to="0 0 360" repeat="indefinite"></a-animation>*/}
          {/*</a-entity>*/}
          <a-image src="/assets/icon/gradcap.png" rotation='-90 0 0' scale="0.15 0.15 0.15">
            <a-animation easing="linear" attribute="scale" dur="10000" to="2 2 1"></a-animation>

          </a-image>


        </a-marker>

        <a-marker preset='hiro'>


        </a-marker>

        <a-marker preset='kanji'>

          <a-video src="#penguin" width="5" height="5" position="-3 0 0" rotation='-90 0 0'></a-video>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
      </body>
    ];
  }
}
