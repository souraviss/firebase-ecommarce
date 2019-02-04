import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/category';
import { CategoryServiceService } from 'src/app/shared/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryArray:any[];
  showDeleteMessage: boolean;
  constructor(private categoryService:CategoryServiceService) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(list=>{
      this.categoryArray=list.map(item=>{
        return{
          Id:item.payload.doc.id,
            ...item.payload.doc.data()
        };
      });
     });
  }

  onDelete(category){
    if(confirm('Are you sure you want to delete this record?')){
      debugger;
      this.categoryService.deleteCategory(category);
      this.showDeleteMessage=true;
      setTimeout(()=>this.showDeleteMessage=false,3000);
      }
  }

}
