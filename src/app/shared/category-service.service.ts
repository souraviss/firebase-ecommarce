import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../Model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  customerList:AngularFireList<any>=this.firebase.list('customers');
  db:any=this.fireStore.collection('Ecommerce');
  categoryRef:any;
  constructor(private firebase:AngularFireDatabase,private fireStore:AngularFirestore) {
    //this.db = fireStore.collection('Category');
   }

  form=new FormGroup({
    Id:new FormControl(null),
    categoryName:new FormControl('',Validators.required),
  })


   getCategory(){
     return this.fireStore.collection('category').snapshotChanges();
   }
   createcategory(category:Category){
     debugger;
     category.Id=Math.floor(Date.now() / 1000)+Math.floor(Math.random() * 6) + 1;
     this.fireStore.collection('category').doc(category.categoryName).set({
      Id:category.Id,
      categoryName:category.categoryName
     }).then(function(docRef)
     {

     }).catch(function(error){

     })

    // this.fireStore.collection('category').add(category);
     // return this.db.doc('Category').add(category);  
   }
   updateCategory(category:Category){
     debugger;
    //this.fireStore.doc('Category/' + category.Id).update(category);
    // this.fireStore.collection('category').doc(category.categoryName).set({
     let categoryName= localStorage.getItem('categoryName');
      this.fireStore.collection('category').doc(categoryName).set({
      //Id:category.Id,
      categoryName:category.categoryName
     },
     {
      merge:true 
     }).then(function(docRef)
     {
      localStorage.removeItem('categoryName');
     }).catch(function(error){

     })
   }
   deleteCategory(category:Category){
    //this.fireStore.collection('category').doc('catego').delete()
    this.fireStore.collection('category').doc(category.categoryName).delete();
     }

   populateCategory(category:Category){
    this.form.setValue(category);
    localStorage.setItem('categoryName',category.categoryName);
  }
  clearCategory(){
    this.form.reset();
  }
}
