import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { jwtDecode } from "jwt-decode";
@Injectable()
export class AuthService {x
  private baseUrl = environment.apiUrl + "auth";
  private jwtToken: string;
  private REGISTER = this.baseUrl + "/sign-up";
  private CHANGE_PASS = this.baseUrl + "/change-password";
  private LOGOUT = this.baseUrl + "/logout";
  private LOGIN = this.baseUrl + "/sign-in";
  private GET_OWN_INFO = this.baseUrl
  private EDITPROFILE = environment.apiUrl + "/edit-profile";
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  constructor(private http: HttpClient) {}

  getToken() {
    return sessionStorage.getItem("token");
  }

  signin(username: string, password: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/sign-in`, { username, password })
      .pipe(
        tap((res) => {
          if (res.body) {
            if (res && res.body) {
              // Lưu jwt token vào sessionStorage
              sessionStorage.setItem("token", res.body);
              this.jwtToken = res.body;
            }
          }
        })
      );
  }

  getOwnInfo(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.GET_OWN_INFO}/me`, { headers });
  }

  changePass(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.CHANGE_PASS, { username, password });
  }

  register(req: any): Observable<any> {
    return this.http.post<any>(this.REGISTER, req);
  }

  editProfile(req: any): Observable<any> {
    return this.http.post<any>(this.EDITPROFILE, req);
  }

  signout() {
    // Xóa jwt token khỏi sessionStorage
    var a = this.http.post<any>(this.LOGOUT, {});
    sessionStorage.removeItem("token");
    this.jwtToken = null;
    return a;
  }

  isAuthenticated(): boolean {
    // Kiểm tra xem jwt token đã tồn tại trong sessionStorage hay chưa
    return !!sessionStorage.getItem("token");
  }

  getJwtToken(): string {
    return this.jwtToken || sessionStorage.getItem("token");
  }

  getHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (token) {
      const expirationDate = this.getExpirationDate(token);
      return expirationDate && expirationDate < new Date();
    }
    return true;
  }

  private getExpirationDate(token: string): Date | null {
    const decodedToken: any = jwtDecode(token);

    if (decodedToken && decodedToken.exp) {
      // `exp` is the expiration timestamp in seconds
      const expirationDate = new Date(decodedToken.exp * 1000);
      console.log("Token Expiration Date:", expirationDate);
    } else {
      console.error("Failed to decode JWT or missing expiration date.");
    }
    return new Date();
  }

  private getHeadersWithToken(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  // getUserInfor(): Observable<any> {
  //   const headers = this.getHeadersWithToken();
  //   return this.http.get<any>(`${this.USERINFOR}`, { headers });
  // }

  setAuthenticationStatus(status: boolean) {
    this.isAuthenticatedSubject.next(status);
  }
}
