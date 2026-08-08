import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Users} from '../Users';


@Component({
  selector: 'app-crud-api',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './crud-api.html',
  styleUrl: './crud-api.css',
})
export class CrudApi implements OnInit {


  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
        this.getUsers();
    }

  users: Users[] = [];
  apiUrl: string = "https://ca2b095687273fa940e7.free.beeceptor.com/api/users";

  userForm = new FormGroup({
    id: new FormControl(0,[Validators.min(1),Validators.max(10)]),
    name: new FormControl(""),
    userName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    website: new FormControl("")


  });

  isEdited:boolean=false;

  upsertUser(){

    if(this.isEdited){
      this.updateUser();
    }else{
      this.postUser();
    }
  }

  postUser() {
    this.http.post<Users>(this.apiUrl, this.userForm.value).subscribe(
      data => {
        console.log(data);
        this.userForm.reset();
        this.users = [data, ...this.users];
        this.cdr.detectChanges();
      }
    )
  }

  editUser(user: Users) {
    this.isEdited = true;
    this.userForm.patchValue(user);
  }

  updateUser() {
    const id=this.userForm.value.id;
    this.http.put<Users>(`${this.apiUrl}/${id}`,this.userForm.value).subscribe(
      data => {
        console.log(data);
       this.users.map(user=>{
         user.id===data.id?data:user
       });
       this.userForm.reset();
       this.cdr.detectChanges();

      }
    )
  }
  deleteUser(id: number) {

    console.log("Deleting id:", id, typeof id);

    this.http.delete<Users>(`${this.apiUrl}/${id}`).subscribe(
      data => {

        console.log("Users before:", this.users);

        this.users.forEach(user => {
          console.log(user.id, typeof user.id);
        });

        this.users = this.users.filter(
          user => user.id !== id
        );

        console.log("Users after:", this.users);
        this.cdr.detectChanges();
      }
    );
  }

  getUsers(){
    this.http.get<Users[]>(this.apiUrl).subscribe(
      data => {
        console.log(data);
        this.users = data;
        this.cdr.detectChanges();
      }
    )
  }
}
