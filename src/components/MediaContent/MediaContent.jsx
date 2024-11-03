import "./mediaContent.css";

import image1 from "/assets/image1.png";
import image2 from "/assets/image2.png";
import image3 from "/assets/image3.png";
import image4 from "/assets/image4.png";
import team from "/assets/team.png";
import vid1 from "/assets/modupevid1.mp4";

const MediaContent = () => {
  return (
    <div className="media-content">
      <h1 className="page-heading">Media</h1>

      <div className="media-content-wrapper">
        <div className="media-image-wrapper">
          <img src={image3} alt="Two girls smiling" />
        </div>

        <div className="media-image-wrapper">
          <img src={image2} alt="Six boys posing for the camera" />
        </div>

        <div className="media-video-wrapper">
          <video loop autoPlay muted>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>

        <div className="media-image-wrapper">
          <img src={team} alt="The God's Gracies team" />
        </div>

        <div className="media-image-wrapper">
          <img src={image4} alt="Children playing on the street" />
        </div>

        <div className="media-image-wrapper">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MediaContent;
