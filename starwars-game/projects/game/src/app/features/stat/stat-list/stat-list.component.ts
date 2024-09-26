import { Component, OnInit } from '@angular/core';
import { StatDto } from '../../../core/models/stat.dto';
import { StatService } from '../services/stat.service';


@Component({
  selector: 'game-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrl: './stat-list.component.css'
})
export class StatListComponent implements OnInit {

  stats: StatDto[] = [];
 
  constructor(private statService: StatService) { }

  ngOnInit(): void {
    
    //this.stats = this.statService.getAll();
    
    this.stats = this.statService.getAllStats();
    this.stats.sort((a, b) => a.nb_success - b.nb_success);
    this.stats.sort((a, b) => a.month - b.month);
    this.stats.sort((a, b) => a.year - b.year);
      

    console.info('init');
  }

}
