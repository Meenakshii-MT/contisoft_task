import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {UserDataService} from '../user-data.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
user:any
  constructor(private http:HttpClient, private userData:UserDataService) { 
  this.user={
     name:'',
     email:'',
     subject:'',
     message:''
}
  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.userData.saveUser(data).subscribe((result)=>{
      alert('User saved successfully')
      console.log('result', result)
    })
    // this.http.post('https://jsonplaceholder.typicode.com/users',this.user).subscribe((result)=>{
    //   alert('User saved successfully')
    //   console.log('result', result)
    // })
    console.log(data);
  }
}
