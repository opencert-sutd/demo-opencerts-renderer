// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import SUTDTemplate from "./SUTDTemplate";
import SUTD5Template from "./SUTD5Template";
import SUTDDuelTemplate from "./SUTDDuelTemplate";
import GovTechDemoCert from "./govtechDemoCert";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  SUTD_TEMPLATE: SUTDTemplate,
  SUTD_5TEMPLATE: SUTD5Template,
  SUTD_DUELTEMPLATE: SUTDDuelTemplate,  
  NULL: []
};
