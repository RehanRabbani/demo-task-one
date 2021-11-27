import "../App.css";
import { Button } from "antd";
const DescriptionSection = () => {
  return (
    <>
      <p className="head">You have never seen a cart builder like this</p>
      <section>
        <div>
          <h1 className="heading-one">Discover the Easiest,</h1>
          <h1 className="heading-one">Most Powerful Cart</h1>
          <h1 className="heading-one">Builder Ever Creater</h1>
        </div>
        <p className="para1">
          Watch this Video To See A Preview Of Mintbird -Open To Public On July
          29
        </p>

        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <Button
          block
          shape="round"
          size="large"
          type="primary"
          className="round-button"
        >
          CLICK HERE TO BE ON THE HOT LIST
        </Button>
        <p>
          {" "}
          <a>we are also giving you a chance to win Mintbird</a>
        </p>
      </section>
    </>
  );
};
export default DescriptionSection;
