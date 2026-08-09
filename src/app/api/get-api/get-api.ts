import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../Users';

@Component({
  selector: 'app-get-api',
  imports: [],
  standalone: true,
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {

  users:Users[]=[];

  constructor(private http: HttpClient,private cdr:ChangeDetectorRef) {
  }

  getUsers():void{
    this.http.get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe((results:any)=>{
        this.users=results;
        this.cdr.detectChanges();
      })
  }
}
