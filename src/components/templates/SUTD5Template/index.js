import PropTypes from "prop-types";
import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import SUTDTranscript from "./transcript";

const templates = [
 
  {
    id: "transcript",
    label: "transcript",
    template: SUTDTranscript
  }
];

const addresses = [
  "0x2456FC81C1342fB79D7C58A4682F031208A44d7F",
  "0x96a7bEefb0A7fb6B9d2101B0A27a734fA97E7221"
];

const SUTD5THROW2019 = () => (
  <MultiCertificateRenderer templates={templates} whitelist={addresses} />
);

SUTD5THROW2019.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default SUTD5THROW2019;
