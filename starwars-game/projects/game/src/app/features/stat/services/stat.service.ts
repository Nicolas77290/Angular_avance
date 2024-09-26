import { Injectable } from '@angular/core';
import { createStatMock, StatDto } from '../../../core/models/stat.dto';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StatService {
 
  constructor() { }
  
  getAll():StatDto[] {
    return[
      { 
        year: 2024,
        month: 1,
        nb_success: 10,
        nb_fail: 1,
      },{
        year: 2024,
        month: 2,
        nb_success: 20,
        nb_fail: 2,
      },{
        year: 2024,
        month: 3,
        nb_success: 30,  
        nb_fail: 3,
      },{
        year: 2024,
        month: 4,
        nb_success: 40,
        nb_fail: 4,
      },{
        year: 2024,
        month: 5,
        nb_success: 50,
        nb_fail: 5,
      }
    ];
  }

  public getAllStats() : StatDto[] {
     return ([
      createStatMock(),
      createStatMock(),
      createStatMock(),
    ]);
  }





}
