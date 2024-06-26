import PropTypes from "prop-types";
import React from "react";
import { format } from "date-fns";
import { tz } from "moment-timezone";
import { get } from "lodash";
import {
  SUTD_CERT_BG,
  SUTD_CERT_LOGO,
  SUTD_CHAIR,
  SUTD_PRESIDENT,
  NUS_CERT_LOGO
} from "./images";

export const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

const GothamMedium22pt = {
  fontFamily: "Gotham Medium",
  fontSize: "22px",
  textAlign: "center",
  color: "Brown"
};

const GothamMedium8pt = {
  fontFamily: "Gotham Medium",
  fontSize: "7px",
  textAlign: "right",
  color: "black"
};

const GothamMedium10pt = {
  fontFamily: "Gotham Medium",
  fontSize: "10px",
  textAlign: "center",
  color: "black"
};


const GothamMedium12pt = {
  fontFamily: "Gotham Medium",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const GothamBold12pt = {
  fontFamily: "Gotham Medium",
  fontWeight: "Bold",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const GothamMedium165pt = {
  fontFamily: "Gotham Medium",
  fontSize: "16.5px",
  textAlign: "center",
  color: "Brown"
};

const GothamMedium265pt = {
  fontFamily: "Gotham Medium",
  fontSize: "26.5px",
  textAlign: "center",
  color: "Black"
};

const borderImgStyle = {
  border: "1px solid",
  borderColor: "black",
  backgroundPosition: "1px",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${SUTD_CERT_BG})`,
  backgroundSize: "75px 75px"
};

const logoImgStyle = {
  width: "150px",
  height: "60px",
  marginLeft: "43%",
  marginTop: "5%"
};

const DuellogoImgStyle1 = {
  width: "150px",
  height: "60px",
  marginLeft: "26%",
  marginTop: "11%"
};

const DuellogoImgStyle2 = {
  width: "163px",
  height: "146px",
  marginLeft: "50%",
  marginTop: "5%"
};


const chairImgStyle = {
  width: "150px",
  height: "60px",
  borderBottom: "1px solid"
};

const presidentImgStyle = {
  width: "150px",
  height: "60px",
  borderBottom: "1px solid"
};

export const Plan =({ document }) => {
	
	const DegreePlan = get(document, "recipient.Plan",undefined);
	return DegreePlan ? (
      <div className="row d-flex justify-content-center align-items-center">
        {" "}
        <span style={GothamMedium165pt}>{document.recipient.Plan}</span>
      </div>) :null;
 	
};

export const SubPlan1 =({ document }) => {
	
	const SubPlan11 = get(document, "recipient.SubPlan1",undefined);
	return SubPlan11 ? (
      <div className="row d-flex justify-content-center align-items-center">

          <span style={GothamMedium165pt}>{SubPlan11}</span>

      </div>) :null;
 	
};


const Template = ({ document }) => (
	
  <div className="container" style={borderImgStyle}>
      <div className="row">

      <div className="col-6">
        <div>
    <img src={SUTD_CERT_LOGO} style={DuellogoImgStyle1}/>
        </div>
      </div>

      <div className="col-6">
        <div>
    <img src={NUS_CERT_LOGO} style={DuellogoImgStyle2}/>
        </div>
      </div>
    </div>
	
    <div>
      {" "}
      <br />
      <br />
      <div>
        {" "}

      </div>
      <div className="row justify-content-center" style={{ marginTop: "0rem" }}>
        <span style={GothamMedium12pt}>
          The Singapore University of Technology and Design
        </span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={GothamMedium12pt}>
          and the National University of Singapore hereby jointly confer on
        </span>
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100px", lineHeight: "175%" }}
      >
        <span style={GothamMedium265pt}>{document.recipient.name}</span>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginBottom: "10px" }}
      >
        <span style={GothamMedium12pt}>the degree of</span>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <span style={GothamMedium22pt}>{document.name}</span>
      </div>{" "}

	  <div>
        <Plan document={document} />
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <span style={GothamMedium165pt}>{document.recipient.Honors}</span>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
	       <span style={GothamMedium165pt}>{document.recipient.SubPlan}</span>
      </div>

      <div>
        <SubPlan1 document={document} />
      </div>
	
	
      <br />
      <div className="row d-flex justify-content-center">
        <span style={GothamMedium12pt}>
          with all its honour, privileges and obligations on
        </span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
        <span style={GothamBold12pt}>
          {formatDateFullMonthProper(document.issuedOn)}
        </span>
      </div>
    </div>
    <br />
    <br />
    <div className="row">
      <div className="col-2">&nbsp;</div>
      <div className="col-6">
        <div>
          <img src={document.additionalData.certSignatories[0].signature} style={chairImgStyle} />
        </div>
      </div>

      <div className="col-2">
        <div>
           <img src={document.additionalData.certSignatories[2].signature} style={chairImgStyle} />
        </div>
      </div>
    </div>

    <div className="row">
      <div style={{ marginRight: "12.5rem" }}>&nbsp;</div>
      <div style={{ marginRight: "29.5rem" }}>
        <div>
          <span style={GothamMedium10pt}>{document.additionalData.Signatorytype[0].type} </span>
        </div>
      </div>

      <div>
        <div>
          <span style={GothamMedium10pt}>{document.additionalData.Signatorytype[2].type} </span>
        </div>
      </div>
    </div>

    <div className="row" style={{ marginTop: "-0.75rem" }}>
      <div style={{ marginRight: "12.5rem" }}>&nbsp;</div>
      <div style={{ marginRight: "23.5rem" }}>
        <div>
          <span style={GothamMedium10pt}>Singapore University of Technology and Design</span>
        </div>
      </div>

      <div>
        <div>
          <span style={GothamMedium10pt}>National University of Singapore</span>
        </div>
      </div>
    </div>
<br />     

   <div className="row">
      <div className="col-2">&nbsp;</div>
      <div className="col-6">
        <div>
          <img src={document.additionalData.certSignatories[1].signature}  style={presidentImgStyle} />
        </div>
      </div>

      <div className="col-2">
        <div>
          <img src={document.additionalData.certSignatories[3].signature}  style={presidentImgStyle} />
        </div>
      </div>
    </div>

    <div className="row">
      <div style={{ marginRight: "12.5rem" }}>&nbsp;</div>
      <div style={{ marginRight: "33.25rem" }}>
        <div>
          <span style={GothamMedium10pt}>{document.additionalData.Signatorytype[1].type}</span>
        </div>
      </div>

      <div>
        <div>
          <span style={GothamMedium10pt}>{document.additionalData.Signatorytype[3].type}</span>
        </div>
      </div>
    </div>	
	
 <div className="row" style={{ marginTop: "-0.75rem" }}>
      <div style={{ marginRight: "12.5rem" }}>&nbsp;</div>
      <div style={{ marginRight: "23.5rem" }}>
        <div>
          <span style={GothamMedium10pt}>Singapore University of Technology and Design</span>
        </div>
      </div>

      <div>
        <div>
          <span style={GothamMedium10pt}>National University of Singapore</span>
        </div>
      </div>
    </div>

	      
    <div className="row">
      {" "}
      <div className="col-11">&nbsp;</div>
      <div className="co1-4">
        <div>
          <span style={GothamMedium8pt}>Serial No. {document.recipient.DegID} </span>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
);

export default Template;
Template.propTypes = {
  document: PropTypes.object.isRequired
};
