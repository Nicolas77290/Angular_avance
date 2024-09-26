import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatListComponent } from './stat-list/stat-list.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '../../shared/components/grid/grid.module';
import { StatService } from './services/stat.service';



@NgModule({
  declarations: [
    StatListComponent,
  ],
 imports: [
    CommonModule,
    FormsModule,
    GridModule
  ],
  providers: [
    StatService
  ],
  exports: [
    StatListComponent
  ]
})
export class StatModule { }
