import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.employee.first_name.length > 0 && this.employee.last_name.length > 0 && this.employee.email_id.length > 0){
      this.employeeService.addEmployee(this.employee).subscribe(res=>{
        console.log(res);
        this.router.navigate(['employees']);

      });
    }
  }

}
