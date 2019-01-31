import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
//registerForm:FormGroup
customerList:AngularFireList<any>=this.firebase.list('customers');
  constructor(private firebase:AngularFireDatabase) { 
  }
 
  form=new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
  })

  getCustomer(){
    this.customerList=this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  InsertCustomer(customer:any){
    this.customerList.push({
        fullName:customer.fullName,
        email:customer.email,
        mobile:customer.mobile
    });
  }

  populateCustomer(customer){
    this.form.setValue(customer);
  }

  UpdateCustomer(customer){
    this.customerList.update(customer.$key,{
      fullName:customer.fullName,
        email:customer.email,
        mobile:customer.mobile
    })
  }

  deleteCustomer($key:string){
    this.customerList.remove($key);
  }
}
