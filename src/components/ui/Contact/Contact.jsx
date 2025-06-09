import { BsHeadset } from "react-icons/bs";
import "./Contact.css";
import { Link } from "react-router";

function Contact() {
  return (
    <div>
      <Link to={"/contacto"} className="contacto">
        <BsHeadset />
      </Link>
    </div>
  );
}

export default Contact;
