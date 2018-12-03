import { EntityObject, EString } from "@uxdf/ioc-model";
import { PersonTitle } from "./PersonTitle";
import { PersonJob } from "./PersonJob";
import { PersonContactLang } from "./PersonContactLang";
import { PersonBusiness } from "./PersonBusiness";

export class Profile extends EntityObject {

  constructor() {
    super("Profile");
  }

  personTitles: PersonTitle[];
  personJobs: PersonJob[];
  personContactLang: PersonContactLang[];
  personBusiness: PersonBusiness[];

  title: EString;
  firstName: EString;
  lastName: EString;
  firstLocalName: EString;
  lastLocalName: EString;
  jobTitle: EString;
  jobPosition: EString;
  contactLang: EString;
  primaryBusiness: EString;
  email: EString;
  workPhone: EString;
  mobilePhone: EString;
  amadeusOffice: EString;
  address: EString;
  city: EString;
  zip: EString;
  state: EString;
  country: EString;
  timeZone: EString;
  isPersonalizedOffers: EString;
  isAdmin: EString;

}
