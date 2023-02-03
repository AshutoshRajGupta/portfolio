import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,linkurl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <h4>{title}</h4>

          <span>{description}</span><br></br>
          <a href={linkurl} target='_blank'><span>{linkurl}</span></a>
        </div>
      </div>
    </Col>
  )
}