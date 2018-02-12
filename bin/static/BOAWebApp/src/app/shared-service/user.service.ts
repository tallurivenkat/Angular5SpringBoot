import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../user';
@Injectable()
export class UserService {



  private base_url:string="http://localhost:9080/api/";
  private headers:Headers=new Headers({'content-type':'application/json'});
  private options:RequestOptions=new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.base_url+'users',this.options).map((response:Response)=>response.json()).
    catch(this.errorHandler);
  }

  getUser(id:Number){
    return this._http.get(this.base_url+'users/'+id,this.options).map((response:Response)=>response.json()).
    catch(this.errorHandler);
  }

  deleteUser(id:Number){

    return this._http.delete(this.base_url+'users/'+id,this.options).map((response:Response)=>response.json()).
    catch(this.errorHandler);
  }

  createUser(user:User){

    return this._http.post(this.base_url+'user',JSON.stringify(user),this.options).map((response:Response)=>response.json()).
    catch(this.errorHandler);
  }

  updateUser(user:User){

    return this._http.put(this.base_url+'user',JSON.stringify(user),this.options).map((response:Response)=>response.json).
    catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error || "Server Error");
  }
}
