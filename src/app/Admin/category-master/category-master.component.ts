import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/shared/category-service.service';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.css']
})
export class CategoryMasterComponent implements OnInit {

  constructor(private categoryService:CategoryServiceService) { }
  formControls=this.categoryService.form.controls;
  ngOnInit() {
  }
  onsubmit(){
    if(this.categoryService.form.valid)
    {
      if(this.categoryService.form.get('Id').value==null)
        this.categoryService.createcategory(this.categoryService.form.value);
      else
        this.categoryService.updateCategory(this.categoryService.form.value);

        this.categoryService.clearCategory();

    }
  }

}
