import { Selector } from "testcafe";
import { readFileSync } from "fs";
import { join } from "path";
import { getData } from "@govtechsg/open-attestation";

fixture("Frameless Viewer").page`http://localhost:3000/`;

const Certificate = "./sutd_sample.json";
const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (_prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("SUTD Demo certificate is rendered correctly", async t => {
  // Inject javascript and execute window.openAttestation.renderDocument
  const certificateContent = JSON.parse(
    readFileSync(join(__dirname, Certificate)).toString()
  );
  await t.eval(
    () => window.openAttestation.renderDocument(certificateContent),
    {
      dependencies: { certificateContent }
    }
  );

  // Check content of window.openAttestation.templates
  await t.wait(500);
  const templates = await t.eval(() => window.openAttestation.getTemplates());
  await t
    .expect(templates)
    .eql([
      { id: "certificate", label: "Certificate" },
      { id: "transcript", label: "Transcript" }
    ]);

  // Validate content of first tab
  await validateTextContent(t, RenderedCertificate, [
    "Bachelor of Science",
    "Abam Bfglma",
    "1260"
  ]);

  // Navigate to next tab using window.openAttestation.selectTemplateTab
  await t.eval(() => window.openAttestation.selectTemplateTab(1));

  // Validate content of second tab
  await validateTextContent(t, RenderedCertificate, [
    "Abam Bfglma",
    "Undergraduate",
    "World Civilisations and Texts I",
    "02.001"
  ]);
});
