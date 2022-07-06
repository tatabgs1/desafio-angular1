import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
 /*Esses dados a Marvel vai nos fornecer é importante */
  PUBLIC_KEY = 'b7c2006af71825e1124def1447dc6c28';
  HASH = 'f1fd7b3fbc759b34be645ed971c6d479';
  URL_API ='https://gateway.marvel.com:443/v1/public/characters?apikey=b7c2006af71825e1124def1447dc6c28&hash=f1fd7b3fbc759b34be645ed971c6d479'

  //URL_API = 'http://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}';
//sem hash: URL_API ='https://gateway.marvel.com:443/v1/public/characters?apikey=b7c2006af71825e1124def1447dc6c28';
//key e hash manual: URL_API ='https://gateway.marvel.com:443/v1/public/characters?apikey=b7c2006af71825e1124def1447dc6c28&hash=f1fd7b3fbc759b34be645ed971c6d479';
//erro 401:
//https://stackoverflow.com/questions/56755603/error-401-unauthorized-connecting-with-marvel-api
  //1abcd1234
  //1234 chave publica
  //hash de: 14a5cc4866cd5aca378a4a564c555ae134c0d971bb7c2006af71825e1124def1447dc6c28
  //=f1fd7b3fbc759b34be645ed971c6d479
  /* chave publica b7c2006af71825e1124def1447dc6c28
     chave privada   4a5cc4866cd5aca378a4a564c555ae134c0d971b */


  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.data.results))
  }
}
