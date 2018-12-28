import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})

export class NavPanelComponent implements OnInit {

  tabs = [
    { id: '1', caption: 'ПКО', color: '', selected: false },
    { id: '2', caption: 'РКО', color: '', selected: false },
    { id: '3', caption: 'Расходники', color: '', selected: false }
  ];

  selectedTab;

  constructor() {
    this.setSelectedTab(this.tabs[0]);
  }

  ngOnInit() {}

  setSelectedTab(selectedTab) {
    this.tabs.map((tab) => {
      selectedTab.id === tab.id ? (tab.selected = true, tab.color = 'primary') : (tab.selected = false, tab.color = '');
      this.selectedTab = selectedTab;
    });
  }

}
