import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhoneComponent } from './phone/phone.component';
import { UxPhoneComponent } from './ux-phone/ux-phone.component';
import { PageComponent } from './page/page.component';
import { UxPageComponent } from './ux-page/ux-page.component';
import { ActionFormComponent } from './action-form/action-form.component';
import { UxActionFormComponent } from './ux-action-form/ux-action-form.component';
import { UxRefDetailsComponent } from './ux-ref-details/ux-ref-details.component';
import { UxSimpleTextComponent } from './ux-simple-text/ux-simple-text.component';
import { BrowserModule } from "@angular/platform-browser";


import { BasePageComponent } from "components/src/lib/base-page/base-page.component";
import { UxBasePageContainerComponent } from "components/src/lib/ux-base-page-container/ux-base-page-container.component";

import { NavBarComponent } from "components/src/lib/nav-bar/nav-bar.component";
import { UxNavBarComponent } from "components/src/lib/ux-nav-bar/ux-nav-bar.component";

import { FooterComponent } from "components/src/lib/footer/footer.component";
import { UxFooterComponent } from "components/src/lib/ux-footer/ux-footer.component";

import { ListLinksComponent } from "components/src/lib/list-links/list-links.component";
import { UxListLinksComponent } from "components/src/lib/ux-list-links/ux-list-links.component";

import { PageSectionComponent } from "components/src/lib/page-section/page-section.component";
import { UxPageSectionComponent } from "components/src/lib/ux-page-section/ux-page-section.component";

import { NewsCardSmallComponent } from "components/src/lib/news-card-small/news-card-small.component";
import { UxNewsCardSmallComponent } from "components/src/lib/ux-news-card-small/ux-news-card-small.component";

import { NewsComponentComponent } from "components/src/lib/news-component/news-component.component";
import { UxNewsComponentComponent } from "components/src/lib/ux-news-component/ux-news-component.component";

import { SelectComponent } from "components/src/lib/select/select.component";
import { UxSelectComponent } from "components/src/lib/ux-select/ux-select.component";

import { SortPanelComponent } from "components/src/lib/sort-panel/sort-panel.component";
import { UxNewsSortPanelComponent } from "components/src/lib/ux-news-sort-panel/ux-news-sort-panel.component";

import { NavBarAccountComponent } from "components/src/lib/nav-bar-account/nav-bar-account.component";
import { UxNavBarAccountComponent } from "components/src/lib/ux-nav-bar-account/ux-nav-bar-account.component";

import { PageTitleComponent } from "components/src/lib/page-title/page-title.component";
import { UxPageTitleComponent } from "components/src/lib/ux-page-title/ux-page-title.component";

import { PageContainerComponent } from "components/src/lib/page-container/page-container.component";
import { UxPageContainerComponent } from "components/src/lib/ux-page-container/ux-page-container.component";

import { ProfileComponent } from "components/src/lib/profile/profile.component";
import { UxProfileComponent } from "components/src/lib/ux-profile/ux-profile.component";

import { AgencyComponent } from "components/src/lib/agency/agency.component";
import { UxAgencyComponent } from "components/src/lib/ux-agency/ux-agency.component";

import { InputTextComponent } from "components/src/lib/input-text/input-text.component";
import { UxInputTextComponent } from "components/src/lib/ux-input-text/ux-input-text.component";

import { LineSeparatorComponent } from "components/src/lib/line-separator/line-separator.component";
import { UxLineSeparatorComponent } from "components/src/lib/ux-line-separator/ux-line-separator.component";

import { PageSubTitleComponent } from "components/src/lib/page-sub-title/page-sub-title.component";
import { UxPageSubTitleComponent } from "components/src/lib/ux-page-sub-title/ux-page-sub-title.component";

import { FormComponent } from "components/src/lib/form/form.component";
import { UxFormComponent } from "components/src/lib/ux-form/ux-form.component";

import { FormRowComponent } from "components/src/lib/form-row/form-row.component";
import { UxFormRowComponent } from "components/src/lib/ux-form-row/ux-form-row.component";

import { InputSelectComponent } from "components/src/lib/input-select/input-select.component";
import { UxInputSelectComponent } from "components/src/lib/ux-input-select/ux-input-select.component";

import { InputLabelComponent } from "components/src/lib/input-label/input-label.component";
import { UxInputLabelComponent } from "components/src/lib/ux-input-label/ux-input-label.component";

import { InputButtonComponent } from "components/src/lib/input-button/input-button.component";
import { UxInputButtonComponent } from "components/src/lib/ux-input-button/ux-input-button.component";


import { HeaderContainerComponent } from "components/src/lib/_desktop/containers/header-container/header-container.component";
import { HeaderLogoContainerComponent } from "components/src/lib/_desktop/containers/header-logos-container/header-logo-container.component";
import { HeaderRowsContainerComponent } from "components/src/lib/_desktop/containers/header-rows-container/header-rows-container.component";
import { HeaderNavLinksContainerComponent } from "components/src/lib/_desktop/containers/header-nav-links-container/header-nav-links-container.component";

import { HeaderNavLinkComponent } from "components/src/lib/_desktop/header-nav-link/header-nav-link.component";


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, BrowserModule ],
  declarations: [
    TextInputComponent,
    PhoneComponent,  UxPhoneComponent,
    PageComponent, UxPageComponent,
    ActionFormComponent, UxActionFormComponent,
    UxRefDetailsComponent, UxSimpleTextComponent,
    NavBarComponent, UxNavBarComponent,
    FooterComponent, UxFooterComponent,

    BasePageComponent,  UxBasePageContainerComponent,

    ListLinksComponent, UxListLinksComponent,

    PageSectionComponent, UxPageSectionComponent,

    NewsCardSmallComponent,
    UxNewsCardSmallComponent,

    NewsComponentComponent,
    UxNewsComponentComponent,

    SelectComponent,
    UxSelectComponent,

    SortPanelComponent,
    UxNewsSortPanelComponent,

    NavBarAccountComponent,
    UxNavBarAccountComponent,

    PageTitleComponent,
    UxPageTitleComponent,

    PageContainerComponent,
    UxPageContainerComponent,

    ProfileComponent,
    UxProfileComponent,

    AgencyComponent,
    UxAgencyComponent,

    InputTextComponent,       UxInputTextComponent,
    LineSeparatorComponent,   UxLineSeparatorComponent,
    PageSubTitleComponent,    UxPageSubTitleComponent,
    FormComponent,            UxFormComponent,
    FormRowComponent,         UxFormRowComponent,
    InputSelectComponent,     UxInputSelectComponent,
    InputLabelComponent,      UxInputLabelComponent,
    InputButtonComponent,     UxInputButtonComponent,


    HeaderContainerComponent,
    HeaderLogoContainerComponent,
    HeaderRowsContainerComponent,
    HeaderNavLinksContainerComponent,  HeaderNavLinkComponent

  ],
  exports: [TextInputComponent, PhoneComponent, UxPhoneComponent, PageComponent, UxPageComponent, ActionFormComponent, UxActionFormComponent, UxRefDetailsComponent, UxSimpleTextComponent, NavBarComponent, UxNavBarComponent, FooterComponent, UxFooterComponent,

    BasePageComponent,        UxBasePageContainerComponent,
    ListLinksComponent,       UxListLinksComponent,
    PageSectionComponent,     UxPageSectionComponent,
    NewsCardSmallComponent,   UxNewsCardSmallComponent,
    NewsComponentComponent,   UxNewsComponentComponent,
    SelectComponent,          UxSelectComponent,
    SortPanelComponent,       UxNewsSortPanelComponent,
    NavBarAccountComponent,   UxNavBarAccountComponent,
    PageTitleComponent,       UxPageTitleComponent,
    PageContainerComponent,   UxPageContainerComponent,
    ProfileComponent,         UxProfileComponent,
    AgencyComponent,          UxAgencyComponent,
    InputTextComponent,       UxInputTextComponent,
    LineSeparatorComponent,   UxLineSeparatorComponent,
    PageSubTitleComponent,    UxPageSubTitleComponent,
    FormComponent,            UxFormComponent,
    FormRowComponent,         UxFormRowComponent,
    InputSelectComponent,     UxInputSelectComponent,
    InputLabelComponent,      UxInputLabelComponent,
    InputButtonComponent,     UxInputButtonComponent,


    HeaderContainerComponent,
    HeaderLogoContainerComponent,
    HeaderRowsContainerComponent,
    HeaderNavLinksContainerComponent,
    HeaderNavLinkComponent
  ],
  entryComponents: [TextInputComponent, PhoneComponent, UxPhoneComponent, PageComponent, UxPageComponent, ActionFormComponent, UxActionFormComponent, UxRefDetailsComponent, UxSimpleTextComponent,

    NavBarComponent,          UxNavBarComponent,
    FooterComponent,          UxFooterComponent,
    BasePageComponent,        UxBasePageContainerComponent,
    ListLinksComponent,       UxListLinksComponent,
    PageSectionComponent,     UxPageSectionComponent,
    NewsCardSmallComponent,   UxNewsCardSmallComponent,
    NewsComponentComponent,   UxNewsComponentComponent,
    SelectComponent,          UxSelectComponent,
    SortPanelComponent,       UxNewsSortPanelComponent,
    NavBarAccountComponent,   UxNavBarAccountComponent,
    PageTitleComponent,       UxPageTitleComponent,
    PageContainerComponent,   UxPageContainerComponent,
    ProfileComponent,         UxProfileComponent,
    AgencyComponent,          UxAgencyComponent,
    InputTextComponent,       UxInputTextComponent,
    LineSeparatorComponent,   UxLineSeparatorComponent,
    PageSubTitleComponent,    UxPageSubTitleComponent,
    FormComponent,            UxFormComponent,
    FormRowComponent,         UxFormRowComponent,
    InputSelectComponent,     UxInputSelectComponent,
    InputLabelComponent,      UxInputLabelComponent,
    InputButtonComponent,     UxInputButtonComponent,


    HeaderContainerComponent,
    HeaderLogoContainerComponent,
    HeaderRowsContainerComponent,
    HeaderNavLinksContainerComponent,
    HeaderNavLinkComponent
  ]
})
export class ComponentsModule { }
