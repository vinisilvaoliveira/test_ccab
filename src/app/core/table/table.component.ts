import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommunService } from 'src/app/shared/service/common.service';
import { ExcelService } from 'src/app/shared/excel.service';


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'username', 'email', 'phone', 'city'];
  dataSource: MatTableDataSource<UserData>;
  data: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectUsername: boolean = false;
  formCheck: boolean = false;
  constructor(
    private myCommon: CommunService,
    private route: Router,
    private excelService: ExcelService
  ) {

  }

  ngOnInit() {

    if (localStorage.getItem('dataValues')) {
      localStorage.removeItem('dataValues');
    }
    const users: UserData[] = [];
    this.dataSource = new MatTableDataSource<UserData>(users);
    this.getUsers();
  }

  select() {
    this.selectUsername = !this.selectUsername;

  }


  getUsers() {

    this.myCommon.getAllUser()
      .subscribe(async (res: any) => {
        this.data = res;
        this.dataSource = new MatTableDataSource<UserData>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.paginator._intl.itemsPerPageLabel = 'Itens por página';
        console.log(this.dataSource);
      }, err => {
        alert('Não foi possivel carregar !');
      });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  checkMain(value: object) {
    localStorage.setItem('dataValues', JSON.stringify(value));
    this.route.navigate(['/dados-usuario'])
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'tabela');
  }
}

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  city: string;
}

