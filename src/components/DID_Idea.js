import React from 'react';
//&apos;s
function DID_Idea() {
  return (
    <div>
      <div className="hero">
        <div className="tds-container-fluid">
          <h1 className="tds-h1--article">
            Travelers Decentralized Identity App 
          </h1>
          <p>Where our customers get near instant quotes all while keeping their data secure and to themselves</p>
        </div>
      </div>
      <div className="tds-container-fluid tds-centered">
        <div className="tds-row tds-mt-xl tds-mb-l">
          <div className="tds-col">
            <h3 id="explore-patterns">The Idea</h3>
          </div>
        </div>
        <div className="tds-row tds-mb-xl tds-centered">
          <div className="tds-col">
            <h4>Issuing and Verifying</h4>
            <figure>
              <img 
                src="https://gitlab.com/evernym/verity/verity-sdk/-/raw/main/docs/verity-architecture/trust-triangle-verifiable-credentials.jpg"
                alt="Sample Fig"
              />
              <figcaption align = "center"><b>Fig.1 - How it works (Source: Everynm)</b></figcaption>
            </figure>
          </div>
        </div>
        <div className="tds-row tds-mb-xl">
          <div className="tds-col-lg-3">
            <h4>Step 1</h4>
            <p className="tds-medium">
              Create a connection with the customer in their mobile wallet
            </p>
          </div>
          <div className="tds-col-lg-3">
            <h4>Step 2</h4>
            <p className="tds-medium">
              Request proof of ID from their digital wallet. The issued attestations are from a trusted source i.e. the DMV.
            </p>
          </div>
          <div className="tds-col-lg-3">
            <h4>Workflow</h4>
            <p className="tds-medium">todo</p>
          </div>
          <div className="tds-col-lg-3">
            <h4>Workflow</h4>
            <p className="tds-medium">todo</p>
          </div>
        </div>
        <div>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default DID_Idea;
