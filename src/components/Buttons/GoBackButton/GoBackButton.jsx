import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./GoBackButton.scss";

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button className='btn-go-back mb-3' onClick={goBack}>
      <i className='bi bi-backspace-fill'></i>Poprzednia strona
    </Button>
  );
};

export default GoBackButton;
