<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
import { Router } from '@angular/router';
import { UserModel } from '../../auth/models/user.model';
import { AuthService } from '../../auth/auth.service';
import { routes } from '../../shared/routes/routes';
import { IProvince } from '../province/models/province.model';
import { ProvinceService } from '../province/province.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Validators } from 'ngx-editor';
import { LogsService } from '../user-logs/logs.service';
<<<<<<< HEAD
=======
import { UserLogsModel } from '../user-logs/models/user-logs.model';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PosformService } from '../posform/posform.service';
import { IPosForm } from '../posform/models/posform.models';
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  public routes = routes;

<<<<<<< HEAD
  isLoading = false; 
  isLoadingEdit = false;
  isLoadingChangePassword = false;



  currentUser!: UserModel;

=======
  isLoading = false;
  isLoadingEdit = false;
  isLoadingChangePassword = false;

  isLoadingData = false;

  currentUser!: UserModel;

  // Table 
  dataLogList: UserLogsModel[] = [];
  totalItemsLog: number = 0;
  pageSizeLog: number = 15;
  pageIndexLog: number = 0;
  lengthLog: number = 0;
  displayedColumnsLog: string[] = ['created', 'title', 'name', 'action', 'description'];
  dataSourceLog = new MatTableDataSource<UserLogsModel>(this.dataLogList);


  // Table 2
  dataPosFormList: IPosForm[] = [];
  totalItemsPosForm: number = 0;
  pageSizePosForm: number = 15;
  pageIndexPosForm: number = 0;
  lengthPosForm: number = 0; 
  displayedColumnsPosForm: string[] = ['eq', 'sold', 'dhl', 'ar', 'sbl', 'pmf', 'pmm', 'ticket', 'mtc', 'ws', 'mast', 'oris', 'elite', 'yes', 'time', 'province_id', 'area_id', 'sup_id', 'pos_id', 'comment'];
  dataSourcePosForm = new MatTableDataSource<IPosForm>(this.dataPosFormList);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
  province!: IProvince;

  formGroup!: FormGroup;

  formGroupChangePassword!: FormGroup;

  public password: boolean[] = [false];

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private provinceService: ProvinceService,
<<<<<<< HEAD
    private logActivity: LogsService,
=======
    private logsService: LogsService,
    public posformService: PosformService,
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
    private toastr: ToastrService
  ) { }

  public togglePassword(index: number) {
    this.password[index] = !this.password[index]
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      fullname: [''],
      email: ['', Validators.required],
      phone: [''],
      // image: [''], 
    });

    this.formGroupChangePassword = this._formBuilder.group({
      old_password: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
    });

    this.isLoading = true;
    this.authService.user().subscribe({
      next: (user) => {
        this.currentUser = user;
        if (this.currentUser.province_id) {
          this.provinceService.get(this.currentUser.province_id).subscribe((res) => {
            this.province = res.data;
            this.isLoading = false;
          });
        }
        this.formGroup.patchValue({
          fullname: this.currentUser.fullname,
          email: this.currentUser.email,
<<<<<<< HEAD
          phone: this.currentUser.phone, 
        });

=======
          phone: this.currentUser.phone,
        });

        this.logsService.refreshDataList$.subscribe(() => {
          this.fetchProductsLog(this.currentUser.id, this.pageIndexLog, this.pageSizeLog);
        });
        this.fetchProductsLog(this.currentUser.id, this.pageIndexLog, this.pageSizeLog);

        this.posformService.refreshDataList$.subscribe(() => {
          this.fetchProductsPosForm(this.currentUser.id, this.pageIndexPosForm, this.pageSizePosForm);
        });
        this.fetchProductsPosForm(this.currentUser.id, this.pageIndexPosForm, this.pageSizePosForm);

>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.router.navigate(['/auth/login']);
        console.log(error);
      }
    });
  }


<<<<<<< HEAD
=======
  onPageChangeLog(event: PageEvent): void {
    this.isLoadingData = true;
    this.fetchProductsLog(this.currentUser.id, event.pageIndex, event.pageSize);
  }

  fetchProductsLog(id: number, pageIndex: number, pageSize: number) {
    this.logsService.getPaginatedById(id, pageIndex, pageSize).subscribe(res => {
      this.dataLogList = res.data;
      this.totalItemsLog = res.pagination.total_pages;
      this.lengthLog = res.pagination.length;
      this.dataSourceLog = new MatTableDataSource<UserLogsModel>(this.dataLogList);
      this.paginator.length = res.pagination.length;
      this.dataSourceLog.sort = this.sort;

      this.isLoadingData = false;
    });
  }

  public sortDataLog(sort: Sort) {
    const data = this.dataLogList.slice();
    if (!sort.active || sort.direction === '') {
      this.dataLogList = data;
    } else {
      this.dataLogList = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  applyFilterLog(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceLog.filter = filterValue.trim().toLowerCase();
  }




  onPageChangePosForm(event: PageEvent): void {
    this.isLoadingData = true;
    this.fetchProductsPosForm(this.currentUser.id, event.pageIndex, event.pageSize);
  }

  fetchProductsPosForm(id: number, pageIndex: number, pageSize: number) {
    this.posformService.getPaginatedById(id, pageIndex, pageSize).subscribe(res => {
      this.dataPosFormList = res.data;
      this.totalItemsPosForm = res.pagination.total_pages;
      this.lengthPosForm = res.pagination.length;
      this.dataSourcePosForm = new MatTableDataSource<IPosForm>(this.dataPosFormList); 
      this.paginator.length = res.pagination.length;
      this.dataSourcePosForm.sort = this.sort;

      this.isLoadingData = false;
    });
  }


  public sortDataPosForm(sort: Sort) {
    const data = this.dataPosFormList.slice();
    if (!sort.active || sort.direction === '') {
      this.dataPosFormList = data;
    } else {
      this.dataPosFormList = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  applyFilterPosForm(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePosForm.filter = filterValue.trim().toLowerCase();
  }




>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
  onSubmitUpdate() {
    try {
      this.isLoadingEdit = true;
      var body = {
        fullname: this.formGroup.value.fullname,
        email: this.formGroup.value.email,
        phone: this.formGroup.value.phone,
        signature: this.currentUser.fullname,
      };
      this.authService.updateInfo(body).subscribe({
        next: () => {
<<<<<<< HEAD
          this.logActivity.activity(
            'User profil',
            this.currentUser.id,
            'updated',
            'Update user profil',
=======
          this.logsService.activity(
            'User profil',
            this.currentUser.id,
            'updated',
            `Update user profil ${this.currentUser.id}`,
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
            this.currentUser.fullname
          ).subscribe({
            next: () => {
              this.formGroup.reset();
              this.toastr.success('Modification enregistré!', 'Success!');
              this.isLoadingEdit = false;
            },
            error: (err) => {
              this.isLoadingEdit = false;
              this.toastr.error(`${err.error.message}`, 'Oupss!');
              console.log(err);
            }
<<<<<<< HEAD
          });  
=======
          });
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
        },
        error: err => {
          console.log(err);
          this.toastr.error('Une erreur s\'est produite!', 'Oupss!');
          this.isLoadingEdit = false;
        }
      });
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }

  onSubmitChangePassword() {
    try {
      this.isLoadingChangePassword = true;
      var body = {
        old_password: this.formGroupChangePassword.value.old_password,
        password: this.formGroupChangePassword.value.password,
<<<<<<< HEAD
        password_confirm: this.formGroupChangePassword.value.password_confirm, 
=======
        password_confirm: this.formGroupChangePassword.value.password_confirm,
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
      };
      this.authService.updatePassword(body).subscribe({
        next: () => {
          this.authService.logout().subscribe(res => {
<<<<<<< HEAD
            this.logActivity.activity(
              'User profil',
              this.currentUser.id,
              'updated',
              'Change password user profil',
=======
            this.logsService.activity(
              'User profil',
              this.currentUser.id,
              'updated',
              `Change password user profil ${this.currentUser.id}`,
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
              this.currentUser.fullname
            ).subscribe({
              next: () => {
                this.formGroupChangePassword.reset();
                this.toastr.success('Mot de passe modifié!', 'Success!');
                this.isLoadingChangePassword = false;
                this.router.navigate(['/auth/login']);
              },
              error: (err) => {
                this.isLoadingChangePassword = false;
                this.toastr.error(`${err.error.message}`, 'Oupss!');
                console.log(err);
              }
<<<<<<< HEAD
            }); 
          }); 
=======
            });
          });
>>>>>>> d0702d2df73e33dd270d73061880d510727a5204
        },
        error: err => {
          console.log(err);
          this.toastr.error(`${err.error.message}`, 'Oupss!');
          this.isLoadingChangePassword = false;
        }
      });
    } catch (error) {
      this.isLoadingChangePassword = false;
      console.log(error);
    }
  }
}
