import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns=['firstname','lastname','emailid'];
  employees: Employee[] = [];
  constructor(private employeeService : EmployeeService,private cd: ChangeDetectorRef,private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getEpmloyeesList().subscribe(res=>{
      this.employees = res;
      this.cd.detectChanges();
      for(let i in this.employees){
        console.log(i);
      }
    });
  }
  updateEmployee(id:any){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe(res=>{
      this.ngOnInit();
    },
    err=>console.log("Error"));
  }

}
