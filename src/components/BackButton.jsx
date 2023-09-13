import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault(); //prevent submitting the form
        navigate(-1); //move back one page back
      }}
    >
      &larr;Back
    </Button>
  );
}

export default BackButton;
