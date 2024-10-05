<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, OnInit, Renderer2} from '@angular/core';
=======
import { ChangeDetectionStrategy, Component, OnInit, Renderer2 } from '@angular/core';
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
import { routes } from '../../../shared/routes/routes';
import { ProvinceService } from '../../province/province.service';
import { AreaService } from '../../areas/area.service';
import { CommonService } from '../../../shared/common/common.service';
import { IProvinceDropdown } from '../../province/models/province.model';
import { IAreaDropdown } from '../../areas/models/area.model';
import { NdService } from '../services/nd.service';
import { formatDate } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NDYearModel, TableViewModel } from '../models/nd-dashboard.models';
import { AuthService } from '../../../auth/auth.service';
import { UserModel } from '../../../auth/models/user.model';


@Component({
  selector: 'app-nd-dashboard',
  templateUrl: './nd-dashboard.component.html',
<<<<<<< HEAD
  styleUrl: './nd-dashboard.component.scss', 
=======
  styleUrl: './nd-dashboard.component.scss',
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
})
export class NdDashboardComponent implements OnInit {
  public routes = routes;
  base = '';
  page = '';
  last = '';

  isLoading = false;
  currentUser!: UserModel;

  dateRange!: FormGroup;
  start_date!: string;
  end_date!: string;

  // Filtre 
  rangeDate: any[] = [];
  provinceDropdownList: IProvinceDropdown[] = [];
  provinceDropdown!: IProvinceDropdown;
  areaList: IAreaDropdown[] = [];
  areaListFilter: IAreaDropdown[] = [];
  area!: IAreaDropdown;
  areaCount = 1; // For found length area for divide by ND


<<<<<<< HEAD
  tableViewData: TableViewModel[] = [];   
  tableViewList: TableViewModel[] = [];   
  averageAreaData: TableViewModel[] = [];
  averageAreaList: TableViewModel[] = [];
  performanceAreaData: TableViewModel[] = []; 
  performanceAreaList: TableViewModel[] = []; 
=======
  tableViewData: TableViewModel[] = [];
  tableViewList: TableViewModel[] = [];
  averageAreaData: TableViewModel[] = [];
  averageAreaList: TableViewModel[] = [];
  performanceAreaData: TableViewModel[] = [];
  performanceAreaList: TableViewModel[] = [];
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
  ndYearList: NDYearModel[] = [];


  constructor(
    private common: CommonService,
    private _formBuilder: FormBuilder,
    private renderer: Renderer2,
    private ndService: NdService,
    private provinceService: ProvinceService,
    private areaService: AreaService,
    private authService: AuthService,
  ) {

    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    if (this.last == 'nd-dashboard') {
      this.renderer.addClass(document.body, 'date-picker-dashboard');
    }
  }


  ngOnInit(): void {
    this.isLoading = true;
    this.authService.user().subscribe({
      next: (user) => {
        this.currentUser = user;
        if (this.currentUser.role != 'ASM') {
          this.provinceService.getProvinceDropdown().subscribe((res) => {
<<<<<<< HEAD
            this.provinceDropdownList = res.data; 
            this.areaService.getAreaDropdown().subscribe((r) => {
              this.areaList = r.data;
              if (!this.provinceDropdown) {
                const dataList = this.provinceDropdownList.filter((v) => v.name == 'Kinshasa'); 
                const areaArray = this.areaList.filter((v) => v.province_id == dataList[0].id);
                this.areaListFilter = areaArray.filter((obj, index, self) =>
                  index === self.findIndex((t) => t.name === obj.name) 
                );
                this.areaCount = this.areaListFilter.length; // Total Area par province selectionner 
              }
            }); 
          });
        }
        if (this.currentUser.role != 'ASM') {
=======
            this.provinceDropdownList = res.data;
            this.areaService.getAreaDropdown().subscribe((r) => {
              this.areaList = r.data;
              if (!this.provinceDropdown) {
                const dataList = this.provinceDropdownList.filter((v) => v.name == 'Kinshasa');
                const areaArray = this.areaList.filter((v) => v.province_id == dataList[0].id);
                this.areaListFilter = areaArray.filter((obj, index, self) =>
                  index === self.findIndex((t) => t.name === obj.name)
                );
                this.areaCount = this.areaListFilter.length; // Total Area par province selectionner 
              }
            });
          });
        } else if (this.currentUser.role == 'ASM') {
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
          this.provinceService.get(this.currentUser.province_id).subscribe((res) => {
            this.provinceDropdown = res.data;
          });
        }
<<<<<<< HEAD
      },
      error: (error) => { 
        console.log(error);
      }
    });

    
    
  

    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.rangeDate = [firstDay, lastDay];

    this.dateRange = this._formBuilder.group({
      province: new FormControl(this.provinceDropdown),
      rangeValue: new FormControl(this.rangeDate),
      area: new FormControl(''), 
    });
    this.start_date = formatDate(this.dateRange.value.rangeValue[0], 'yyyy-MM-dd', 'en-US');
    this.end_date = formatDate(this.dateRange.value.rangeValue[1], 'yyyy-MM-dd', 'en-US');


    if (!this.provinceDropdown && this.start_date && this.end_date) {
      this.getTableView(this.dateRange.value.province,this.start_date, this.end_date);
      this.getAverageArea(this.dateRange.value.province, this.dateRange.value.area, this.start_date, this.end_date);
      this.getPerformance(this.dateRange.value.province, this.start_date, this.end_date);
      this.getNDYear(this.dateRange.value.province);
    }

    console.log("province", this.dateRange.value.province)

    this.onChanges();
=======




        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.rangeDate = [firstDay, lastDay];
    
        this.dateRange = this._formBuilder.group({
          province: new FormControl(this.provinceDropdown),
          rangeValue: new FormControl(this.rangeDate),
          area: new FormControl(''),
        });
        this.start_date = formatDate(this.dateRange.value.rangeValue[0], 'yyyy-MM-dd', 'en-US');
        this.end_date = formatDate(this.dateRange.value.rangeValue[1], 'yyyy-MM-dd', 'en-US');
    
        if (this.currentUser.role == 'ASM') {
          if (this.start_date && this.end_date) {
            this.getTableView(this.provinceDropdown.name, this.start_date, this.end_date);
            this.getAverageArea(this.provinceDropdown.name, this.dateRange.value.area, this.start_date, this.end_date);
            this.getPerformance(this.provinceDropdown.name, this.start_date, this.end_date);
            this.getNDYear(this.provinceDropdown.name);
          }
        } else {
          if (!this.provinceDropdown && this.start_date && this.end_date) {
            this.getTableView(this.dateRange.value.province, this.start_date, this.end_date);
            this.getAverageArea(this.dateRange.value.province, this.dateRange.value.area, this.start_date, this.end_date);
            this.getPerformance(this.dateRange.value.province, this.start_date, this.end_date);
            this.getNDYear(this.dateRange.value.province);
          }
        }

        this.onChanges();
      },
      error: (error) => {
        console.log(error);
      }
    }); 

   
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
  }

  onChanges(): void {
    this.dateRange.valueChanges.subscribe(val => {
      if (this.currentUser.role != 'ASM') {
        this.provinceDropdown = val.province;
      }
<<<<<<< HEAD
      
      this.start_date = formatDate(val.rangeValue[0], 'yyyy-MM-dd', 'en-US');
      this.end_date = formatDate(val.rangeValue[1], 'yyyy-MM-dd', 'en-US');   
      this.area = val.area;
 
=======
     
      this.start_date = formatDate(val.rangeValue[0], 'yyyy-MM-dd', 'en-US');
      this.end_date = formatDate(val.rangeValue[1], 'yyyy-MM-dd', 'en-US');
      this.area = val.area;

>>>>>>> d0702d2df73e33dd270d73061880d510727a5204

      const areaArray = this.areaList.filter((v) => v.province_id == this.provinceDropdown.id);
      this.areaListFilter = areaArray.filter((obj, index, self) =>
        index === self.findIndex((t) => t.name === obj.name)
      );
      this.areaCount = this.areaListFilter.length;

      this.getTableView(this.provinceDropdown.name, this.start_date, this.end_date);
      this.getAverageArea(this.provinceDropdown.name, this.area.name, this.start_date, this.end_date);
      this.getPerformance(this.provinceDropdown.name, this.start_date, this.end_date);
      this.getNDYear(this.provinceDropdown.name);
    });
  }
<<<<<<< HEAD
 

  getAverageArea(province: string, area: string, start_date: string, end_date: string) {  
    this.ndService.tableView(province, start_date, end_date).subscribe((res) => {
      const dataList = res.data; 
=======


  getAverageArea(province: string, area: string, start_date: string, end_date: string) {
    this.ndService.tableView(province, start_date, end_date).subscribe((res) => {
      const dataList = res.data;
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
      if (dataList) {
        this.averageAreaData = dataList;
      }
      this.averageAreaList = this.averageAreaData.filter((val) => val.Area == area);
<<<<<<< HEAD
     
=======

>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
      this.isLoading = false;
    });
  }


  getNDYear(province: string) {
    this.ndService.NdByYear(province).subscribe((res) => {
<<<<<<< HEAD
      const dataList = res.data; 
=======
      const dataList = res.data;
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
      if (dataList) {
        this.ndYearList = dataList;
      }
      this.isLoading = false;
    });
  }


  getPerformance(province: string, start_date: string, end_date: string) {
    this.ndService.tableView(province, start_date, end_date).subscribe((res) => {
<<<<<<< HEAD
      const dataList = res.data; 
      if (dataList) {
        this.performanceAreaList = dataList;
      } 
=======
      const dataList = res.data;
      if (dataList) {
        this.performanceAreaList = dataList;
      }
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
      this.isLoading = false;
    });
  }


  getTableView(province: string, start_date: string, end_date: string) {
    this.ndService.tableView(province, start_date, end_date).subscribe((res) => {
<<<<<<< HEAD
      const dataList = res.data; 
=======
      const dataList = res.data;
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
      if (dataList) {
        this.tableViewList = dataList;
      }
      this.isLoading = false;
    });
  }

<<<<<<< HEAD
 
=======

>>>>>>> d0702d2df73e33dd270d73061880d510727a5204

}
