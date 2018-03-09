
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
	constructor() {
        // console.log("belum dipake");
    }

    public login(credentials) {
        return new Promise((resolve, reject) => {
        	if (credentials.username == "" || credentials.password == "") {
        		reject("Username / password harus diisi")
        	} else if (credentials.username == "admin" && credentials.password=="admin") {
        		localStorage.setItem("isLogin", "true");
        		resolve("Berhasil Login")
        	} else {
        		reject("Username / password salah");
        	}
        })
    }

    public logOut() {
    	localStorage.setItem("isLogin", "false");
    }
}
