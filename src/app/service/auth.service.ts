export class AuthService{
    loggedIn:Boolean=false;
    login(){
        this.loggedIn=true
    }
    logout(){
        this.loggedIn=false
    }
    IsAuthenticated(){
        return this.loggedIn;
    }
}