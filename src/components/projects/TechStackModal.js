import React from "react"
import parse from "html-react-parser"

const TechStackModal = props => {
  console.log("props", props)
  const { title, techDetails, varName } = props.props.site

  return (
    <div className="tech-stack-modal">
      <button
        id="tech-stack-btn"
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={"#" + varName + "Modal"}
      >
        See Technology Stack
      </button>

      <div
        className="modal fade"
        id={varName + "Modal"}
        tabIndex="-1"
        aria-labelledby={varName + "ModalLabel"}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={varName + "ModalLabel"}>
                {title} Technology Stack
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Tech Stack</th>
                    <th>
                      <i
                        className="bi bi-arrow-down-circle"
                        style={{
                          fontSize: "1rem",
                          color: "white",
                          float: "left",
                        }}
                      ></i>
                    </th>
                  </tr>
                </thead>
                <tbody id="tech-stack-table">
                  <tr>
                    <td>Back end:</td>
                    <td>{parse(techDetails.backEnd)}</td>
                  </tr>
                  <tr>
                    <td>Front end:</td>
                    <td>{parse(techDetails.frontEnd)}</td>
                  </tr>
                  <tr>
                    <td>Features:</td>
                    <td>{parse(techDetails.specialFeatures)}</td>
                  </tr>
                  <tr>
                    <td>Deployment: </td>
                    <td>{parse(techDetails.deployment)}</td>
                  </tr>
                  {techDetails.analytics !== "" ? (
                    <tr>
                      <td>Performance: </td>
                      <td>{parse(techDetails.performance)}</td>
                    </tr>
                  ) : null}
                  {techDetails.analytics !== "" ? (
                    <tr>
                      <td>Analytics:</td>
                      <td>{parse(techDetails.analytics)}</td>
                    </tr>
                  ) : null}

                  {techDetails.metaData !== "" ? (
                    <tr>
                      <td>Meta:</td>
                      <td> {parse(techDetails.metaData)}</td>
                    </tr>
                  ) : null}

                  {techDetails.gitUrl !== "" ? (
                    <tr>
                      <td>On Github:</td>
                      <td>
                        <a
                          href={parse(techDetails.gitUrl)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa-brands fa-github"
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </a>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackModal
