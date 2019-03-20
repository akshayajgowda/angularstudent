import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mockstudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
 student:Student= {
  id:0 ,
  name: '',
  class: '',
  subject: '',
  schoolname: ''
};
 students=STUDENTS; 

  constructor() { }


  OnDetails(){
    var obj1={
      id:this.students.length+1,
      name:this.student.name,
      class:this.student.class,
      subject:this.student.subject,
      schoolname:this.student.schoolname
    }
    this.students.push(obj1);
  }

  removeStudent(id){
    for(var i=0;i<this.students.length;i++){
      if(id==this.students[i].id){
        this.students.splice(i,1);
      }
    }
 }
 selectedStudent: Student;
 onSelect(student: Student): void{
   this.selectedStudent = student;
 }

}
