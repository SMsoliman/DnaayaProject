import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../../models/users/user.module";



@Injectable()
export class userProfileService {
private userProfileRef = this.db.list<User>('user-profile') ;

    constructor(private db: AngularFireDatabase){

    }
    getShoppingList(){
        return this.userProfileRef ;
    }
    addItem(user : User){
        return this.userProfileRef.push(user);
    }
    editItem(user : User){
        return this.userProfileRef.update(user.key , user) ; 
    }

    removeItem(user : User){
        return this.userProfileRef.remove(user.key) ; 
    }

}