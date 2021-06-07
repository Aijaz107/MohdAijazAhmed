import React, { Component } from "react";
 import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  
//  LinkImg = p =>()=> {
//     // alert(`hello, ${name}`);
//     //window.location.href=p.url;
//   };
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage  alt={projects.title} src={projectImage} />
            {/* <img alt={projects.title} src={projectImage}  /> */}
            <div style={{ textAlign: "center" }}>{projects.title}</div>
  <button style={{width:"100%"}} type="button" target="_blank" onClick={(e) => {e.preventDefault(); window.location.href=projects.url;}}> Click here</button>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
            <h1 style={{fontWeight:"bolder",color:"black", fontSize:"200%"}}>Projects</h1>

              <h1 >Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
