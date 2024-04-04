import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  // private subject = new Subject<any>();

  private baseUrl = environment.apiUrl;
  // private GENERATE_HEAD_PHONE = this.baseUrl + "api/v1/common";
  // private GENERATE_NOTI = this.baseUrl + "api/v1/common/loan-notification";
  // private UPLOAD_FILE = this.baseUrl + "api/v1/files/upload-file";
  // // private IMPORT_PROFILE = this.baseUrl + "api/v1/files/import-file";
  // private SEND_OTP = this.baseUrl + "api/v1/otp/send-otp";
  // private VERIFY_OTP = this.baseUrl + "api/v1/otp/verify-otp";
  private USER_INFOR = this.baseUrl + "user/infor";
  private REGISTER = this.baseUrl + "/auth/signup";
  private EDITPROFILE = this.baseUrl + "/auth/edit-profile";
  private ME = this.baseUrl + "/auth/me";
  private FORGETPASS = this.baseUrl + "/auth/forget-password/";
  private VIEWCART = this.baseUrl + "/cart";
  private ADDCART = this.baseUrl + "/cart/add";
  private GET_PRODUCT = this.baseUrl + "products";
  private TICKET = this.baseUrl + "/api/user-ticket/extend";
  // 1?voucherCode = VOUCHER_1
  private TICKETHISTORY = this.baseUrl + "/user-ticket";
  private ADDTICKET = this.baseUrl + "/cart/add";
  private FACILITYTICKET = this.baseUrl + "/api/tickets?facilityId=1";
  private DETAILTICKET = this.baseUrl + "/api/tickets/5";
  private DASHBOARD = this.baseUrl + "/dashboard/info";
  private REVENUE = this.baseUrl + "/dashboard/revenue";
  private CREATEORD = this.baseUrl + "/orders/create";
  private FINDORD = this.baseUrl + "/orders";
  private DETAILORD = this.baseUrl + "/orders/15";
  private GETPRO = this.baseUrl + "/products/P_20240221045126123a?facilityId=2";
  private ADDPRO = this.baseUrl + "/products/add";
  private UPDATEPRO = this.baseUrl + "/products/update/11";
  private DEACTIVEPRODUCT = this.baseUrl + "products/delete/";
  private ACTIVE_PRODUCT = this.baseUrl + "products/active/";
  private FINDUSER = this.baseUrl + "/users";
  private CREATEUSER = this.baseUrl + "/users/create";
  private DETAILUSER = this.baseUrl + "/users/manager_caugiay";
  private DEACTIVEUSER = this.baseUrl + "/users/deactivate/user_caugiay";
  private RESETPASSSWO = this.baseUrl + "/users/reset-password/user_caugiay";
  // // THIẾU 1 số api liên quan đến quyền / phân quyền và admin do chưa design
  // private CREATE_LOAN = this.baseUrl + "user/create-loan";
  // private CHECK_LOAN = this.baseUrl + "user/is-exist-loan";
  // private UPDATE_INFOR = this.baseUrl + "user/update-base-information";
  // private CHECK_PHOTO = this.baseUrl + "user/update-kyc-image";

  constructor(private http: HttpClient) { }

  private getHeadersWithToken(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
  getUsers(): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.get<any>(this.USER_INFOR, { headers });
  }

  register(fullName: string, username: string, email: string, password: string, phoneNumber: string, role: any, gender: string, dob: string): Observable<any> {
    return this.http.post<any>(this.REGISTER, { fullName, username, email, password, phoneNumber, role, gender, dob });
  }

  // "fullName": "Đỗ Đức Dương",
  // "username": "duongdd",
  // "email": "giangdd@gmail.com",
  // "password": "1414",
  // "phoneNumber": "0979719735",
  // "role": {
  //   "id": "1"
  // },
  // "gender": true,
  // "dob": "2000-11-14"

  public get(endpoint: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.get(`${this.baseUrl}/${endpoint}`, { headers });
  }

  public editprofile(id: string, path: string, fullName: string, gender: string, dob: string, address: any, phoneNumber: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(this.EDITPROFILE, { id, path, fullName, gender, dob, address, phoneNumber }, { headers });
  }


  public me(): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(this.ME, { headers });
  }

  public forgetpass(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.FORGETPASS}/${mail}`, { headers });
  }

  public addCart(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public ticket(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }


  public addTicket(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public findAllTicket(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public findTicketDetail(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.DETAILTICKET}`, { headers });
  }

  public ticketHistory(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public getRevune(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }


  public getDashboard(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }


  public createOrd(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public ordDetail(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public getProduct(facilityId = 2): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.get<any>(`${this.GET_PRODUCT}?facilityId=${facilityId}`, { headers: headers['headers'] });
  }

  public addProduct(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public updateProduct(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ADDCART}`, { headers });
  }

  public deactiveProduct(id: number): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.DEACTIVEPRODUCT}${id}`,{} , { headers });
  }

  public activeProduct(id: number): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.ACTIVE_PRODUCT}${id}`, {}, { headers });
  }


  //   {
  //   "quantity": 3,
  //     "facilityProduct": {
  //     "id": 17
  //   }
  // }

  public viewCart(mail: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post<any>(`${this.VIEWCART}`, { headers });
  }

  //   {
  //   "id": 3.0,
  //     "path": null,
  //       "fullName": "Đỗ Đức Dương",
  //         "gender": true,
  //           "dob": "2000-11-14T00:00:00.000+00:00",
  //             "address": null,
  //               "phoneNumber": "0979719735"
  // }

  public post(endpoint: string, body: any): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.post(`${this.baseUrl}/${endpoint}`, body, { headers });
  }


  public put(endpoint: string, body: any): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.put(`${this.baseUrl}/${endpoint}`, body, { headers });
  }

  public delete(endpoint: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.delete(`${this.baseUrl}/${endpoint}`, { headers });
  }

  public deleteUser(endpoint: string): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.delete(`${this.baseUrl}/${endpoint}`, { headers });
  }



  // sendData(message: string) {
  //   this.subject.next(message);
  // }

  // clearData() {
  //   this.subject.next();
  // }

  // getData(): Observable<any> {
  //   return this.subject.asObservable();
  // }

}
