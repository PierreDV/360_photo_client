import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

export default class Panorama extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.texture = THREE.ImageUtils.loadTexture(this.props.imageURL)
    this.cameraPosition = new THREE.Vector3(0,0,5);
    this.sphereScale = new THREE.Vector3(1,1,-1);

    this.state = {
      sphereRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      this.setState({
        sphereRotation: new THREE.Euler(
          0,
          this.state.sphereRotation.y + 0.002,
          0
        ),
      });
    };
  }
  render() {
    const width = window.innerWidth;
    const height = window.innerHeight/1.15;

    return(
      <React3
        mainCamera="camera"
        width={width}
        height={height}

        onAnimate={this._onAnimate}
      >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width/height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <mesh
            rotation={this.state.sphereRotation}
            scale={this.sphereScale}
          >
            <sphereGeometry
              radius={100}
              widthSegments={32}
              heightSegments={32}
            />
            <meshBasicMaterial
              map={this.texture}
            />
          </mesh>
        </scene>
      </React3>
    );
  }
}
