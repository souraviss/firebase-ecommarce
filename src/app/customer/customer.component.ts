import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  submitted:boolean;
  showSubmitMessage:boolean;
  formControls=this.customerService.form.controls;
  ngOnInit() {
  }
  onsubmit(){
    this.submitted=true;
    if(this.customerService.form.valid)
    {
      this.submitted=false;
      if(this.customerService.form.get('$key').value==null)
        this.customerService.InsertCustomer(this.customerService.form.value);
      else
        this.customerService.UpdateCustomer(this.customerService.form.value);
        this.showSubmitMessage=true;
        setTimeout(()=>this.showSubmitMessage=false,3000);
        this.customerService.form.reset();
    // //insert
    // else
    // //update
    }
    
  }

}
