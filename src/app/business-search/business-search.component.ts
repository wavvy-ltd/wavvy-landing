import { Component, OnInit } from '@angular/core';
import { businessTaggingOptions } from './options';
import { MyFormSection } from '@sisitech/myform';
import { TablesService } from '@sisitech/tables';
import { firstValueFrom } from 'rxjs';
import { searchTaggingOptions } from './searchOptions';

@Component({
  selector: 'app-business-search',
  templateUrl: './business-search.component.html',
  styleUrls: ['./business-search.component.scss']
})
export class BusinessSearchComponent implements OnInit {
  businessName: string = '';
  searchResult: any = null;
  formItems = businessTaggingOptions;
  searchformItems = searchTaggingOptions;
  extra_fields: any = { "confidence_score": 100 };
  instance: any;
  originalInstance: any;
  id: any = null;
  providedInstance: any;
  url: string = "api/v1/tagging-rules/";
  isLoading = false;

  section1: MyFormSection = {
    title: "",
    subTitle: "",
    formGroupOrder: [
      ['name'],
      ['account'],
      ['category'],
      ['sub_category'],
      ['confidence_score'],
    ]
  }

  formGroupOrder = [
    this.section1
  ]

  formGroupOrderSearch = [
    ['name'],
  ]

  constructor(private tableServ: TablesService) {

  }

  ngOnInit(): void {

  }

  subCategories: string[] = [
    'Fast Food',
    'Casual Dining',
    'Fine Dining',
    'Cafe',
    'Buffet',
    'Food Truck',
    'Bakery'
  ];

  setIntance(new_instance: any) {
    console.log("Setting instance");
    this.instance = new_instance
  }

  async onValidatedDataSearch(data: any) {
    console.log(data)
    await this.onDoSearch(data.name);
  }

  onValidatedData(data: any) {
    console.log(data)
  }

  onPostedData(data: any) {
    console.log(data)
  }

  changeTag() {
    this.id = null;
    this.instance = null;

  }

  async onSearch() {
    await this.onDoSearch(this.businessName);
  }

  async onDoSearch(searchBusinessName: string) {
    if (searchBusinessName == "") {
      console.log("Nothing to")
      return;
    }

    this.isLoading = true
    try {
      var url = `api/v1/tagging-rules/suggest-tags`;
      // var url = `api/v1/tagging-rules`;
      let args = `name=${searchBusinessName}`
      const resp: any = await firstValueFrom(this.tableServ.getList(url, 10, args));
      if (resp.hasOwnProperty("id")) {
        this.id = resp.id
      }

    } catch (error) {
      console.error("Not found ")
      console.error(error)
      // this.error = "Not Found. Confirm the Id."
    }
    this.isLoading = false
  }

  onSave() {
    // Logic to save the updated sub-category to the server or state
    console.log('Saved changes:', this.searchResult);
    alert('Changes saved successfully!');
  }
}
