import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private http:HttpClient) { }
  public getAllGames(){
    return this.http.get(`${BASE_URL}games?key=${API_KEY}`)
  }
  public getGenres(){
    return this.http.get(`${BASE_URL}genres?key=${API_KEY}`)
    
  }
  public getPlatform(){
    return this.http.get(`${BASE_URL}platforms?key=${API_KEY}`)

  }

  public getStoreFront(){
    return this.http.get(`${BASE_URL}stores?key=${API_KEY}`)

  }
  public getIndivitualGame(id:any){
    return this.http.get(`${BASE_URL}games/${id}?key=${API_KEY}`)

  }
  public getIndivitualScreenShots(id:any){
    return this.http.get(`${BASE_URL}games/${id}/screenshots?key=${API_KEY}`)
  }
  public getAchivements(id:any){
    return this.http.get(`${BASE_URL}games/${id}/achievements?key=${API_KEY}`)
  }
  public getNextApiData(url:string){
    return this.http.get(url)
  }
  public getByGenreId(id:string){
    return this.http.get(`${BASE_URL}games?genres=${id}&key=${API_KEY}`)
  }
  public getByPlatformId(id:string){
    return this.http.get(`${BASE_URL}games?platforms=${id}&key=${API_KEY}`)
  }
  public getSearchData(searchData:string){
    return this.http.get(`${BASE_URL}games?search=${searchData}&key=${API_KEY}`)
  }
  
}
