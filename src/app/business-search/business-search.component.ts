import { Component } from '@angular/core';

@Component({
  selector: 'app-business-search',
  templateUrl: './business-search.component.html',
  styleUrls: ['./business-search.component.scss']
})
export class BusinessSearchComponent {
  businessName: string = '';
  searchResult: any = null;

  subCategories: string[] = [
    'Fast Food',
    'Casual Dining',
    'Fine Dining',
    'Cafe',
    'Buffet',
    'Food Truck',
    'Bakery'
  ];

  onSearch() {
    // Example of a search result returned from a service
    this.searchResult = {
      tags: 'chicken, galitos',
      category: 'Food & Dining',
      sub_category: 'Fast Food',
      business_name: 'Galitos',
      category_accuracy: 95
    };
  }

  onSave() {
    // Logic to save the updated sub-category to the server or state
    console.log('Saved changes:', this.searchResult);
    alert('Changes saved successfully!');
  }
}
