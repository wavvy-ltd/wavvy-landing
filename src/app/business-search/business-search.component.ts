import { Component, OnInit } from '@angular/core';
import { businessTaggingOptions } from './options';
import { MyFormSection } from '@sisitech/myform';
import { TablesService } from '@sisitech/tables';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-business-search',
  templateUrl: './business-search.component.html',
  styleUrls: ['./business-search.component.scss']
})
export class BusinessSearchComponent implements OnInit {
  businessName: string = 'Safaricom data bundles';
  searchResult: any = null;
  formItems = businessTaggingOptions;
  extra_fields: any = { "confidence_score": 100 };
  instance: any;
  originalInstance: any;
  id: any;
  providedInstance: any;
  url: string = "api/v1/tagging-rules/";
  isLoading = false;

  section1: MyFormSection = {
    title: "",
    subTitle: "",
    formGroupOrder: [
      ['name'],
      ['category'],
      ['sub_category'],
      ['confidence_score']
    ]
  }

  formGroupOrder = [
    this.section1
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

    console.log(this.instance)
  }

  onValidatedData(data: any) {
    console.log(data)
  }

  onPostedData(data: any) {
    console.log(data)
  }

  async onSearch() {
    // Example of a search result returned from a service
    // this.searchResult = {
    //   tags: 'chicken, galitos',
    //   category: 'Food & Dining',
    //   sub_category: 'Fast Food',
    //   business_name: 'Galitos',
    //   category_accuracy: 95
    // };
    console.log();

    this.isLoading = true
    try {
      var url = `api/v1/tagging-rules/suggest-tags`;
      // var url = `api/v1/tagging-rules`;
      let args = `name=${this.businessName}`
      const resp = await firstValueFrom(this.tableServ.getList(url, 10, args));
      if (resp.hasOwnProperty("id")) {
        this.id = resp.id
      }
      // this.id=resp.
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
