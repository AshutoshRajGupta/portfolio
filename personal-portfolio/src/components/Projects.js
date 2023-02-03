import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/hiyo.jpeg";
import projImg2 from "../assets/img/map2procoder.jpg";
import yotbe from "../assets/img/youtube.png"
import map2 from "../assets/img/map2procoder.jpg";
import xp from "../assets/img/xphouse.jpeg";
import todo from "../assets/img/todo.png";
import resm from "../assets/img/resume.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects =()=>{
    const projects = [
        {
          title: "youtube clone",
          description: "Youtube clone - reactjs and Api",
          imgUrl: yotbe,
          linkurl:"https://glowing-elf-feebfb.netlify.app/",
        },
        {
          title: "Map2procoder",
          description: "Learning platform using reactjs",
          imgUrl: map2,
          linkurl:"https://map2procoder.vercel.app/",
        },
        {
          title: "Hiyo-Expense management app",
          description: "Android Application",
          imgUrl: projImg1,
          linkurl:"https://github.com/AshutoshRajGupta/Hiyo-1",
        },
        {
          title: "XpHouse",
          description: "A Frontend Website",
          imgUrl: xp,
          linkurl:"https://github.com/AshutoshRajGupta/Hiyo-1",
        },
        {
          title: "TODO APP",
          description: "A todo to note activity",
          imgUrl: todo,
          linkurl:"https://todo-app-delta-beryl.vercel.app/",
        },
        {
          title: "Digital Resume",
          description: "Resume using python",
          imgUrl: resm,
          linkurl:"https://ashutoshrajgupta-digital-resume-streamlit-app-p5xcsy.streamlit.app/",
        },
      ];

     
    
      return (
        <section className="projects" id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>Projects</h2>
                    <h3> My All Projects!!!</h3>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h2>Coming Soon!!!</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2>Comming Soon</h2>
                    </Tab.Pane>
                  {/* </Tab.Content> */}
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
 
      )
}