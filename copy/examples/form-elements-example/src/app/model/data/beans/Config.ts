import { EntityObject, EString } from "@uxdf/ioc-model";
import { Link } from "./Link";

export class Config extends EntityObject {

  constructor() {
    super("Config");
  }

  header: EString;
  footer: EString;

  // headerServiceLinks: Link[];
  // headerNavigationLinks: Link[];
  // footerTermsLinks: Link[];
  // footerSocialLinks: Link[];
  //
  // logoLink: EString;
  // copyright: EString;

}
