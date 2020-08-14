import React, { Component } from "react";
import styled from "styled-components";
import GreenRobotImg from "@static/home/green-robot-min.png";
import YellowRobotImg from "@static/home/small-yellow-robot-min.png";
import OrangeRobotImg from "@static/home/orange-robot-min.png";
import { myMedia } from "@src/styles/custom-media";
import { PreloadImg } from "@src/components/lib/Img";

const Img = styled(PreloadImg)`
  // background-color: transparent;
  ${myMedia.between("ipad", "max")`
    width: 180px;
    height: auto;
  `}
`;

// export const MascotIntro = (props: { ready: () => void }) => {
//   const images = [GreenRobotImg, YellowRobotImg, OrangeRobotImg];
//   let srcList = [] as any[];

//   const load = (src: any) => {
//     srcList.push(src);

//     if (srcList.length === images.length) {
//       props.ready();
//     }
//   };

//   return (
//     <div>
//       {images.map((image) => (
//         <Img src={image} onLoad={() => load(image)} />
//       ))}
//     </div>
//   );
// };

export class MascotIntro extends Component {
  constructor(props: any) {
    super(props);

    // const imag = new Image();
    // imag.src = GreenRobotImg;
    // imag.src = OrangeRobotImg;
    // imag.src = YellowRobotImg;
  }

  render() {
    return (
      <div>
        <Img src={GreenRobotImg} />
        <Img src={YellowRobotImg} />
        <Img src={OrangeRobotImg} />
      </div>
    );
  }
}
