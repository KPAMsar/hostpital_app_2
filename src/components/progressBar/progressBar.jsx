import ProgressBar from "react-bootstrap/ProgressBar";
import "./progressBar.css";

function MyProgressBar({ now, label, color }) {
  return (
    <ProgressBar
      now={now}
      label={label}
      variant={color}
      style={{ width: "100%" }}
      className="custom-progress-bar"
    />
  );
}

export default MyProgressBar;
