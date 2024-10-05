<<<<<<< HEAD
import { Component } from '@angular/core'; 
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-collapse-header',
  templateUrl: './collapse-header.component.html',
  styleUrl: './collapse-header.component.scss',
})
export class CollapseHeaderComponent {
  public isCollapsed = false;

  toggleCollapse() {
    this.data.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private data: DataService) {}
}
=======
import { Component } from '@angular/core'; 
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-collapse-header',
  templateUrl: './collapse-header.component.html',
  styleUrl: './collapse-header.component.scss',
})
export class CollapseHeaderComponent {
  public isCollapsed = false;

  toggleCollapse() {
    this.data.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private data: DataService) {}
}
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
