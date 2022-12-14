import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:any;
  employee = new Employee();
  constructor(private employeeService : EmployeeService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(res=>{
      this.employee = res;
    })
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(res=>{
      this.router.navigate(['employees']);
    })
  }
}
