import { Component } from '@angular/core';

@Component({
    selector: "table01",
    template: `
    <h1> {{tableTitle}} </h1>
    <table id="example" class="table" cellspacing="0" width="50%">
            <thead>
                <tr>
                    <th>{{ tableHead.name }}</th>
                    <th>{{ tableHead.age }}</th>
                    <th>{{ tableHead.salary }}</th>
                </tr>
            </thead>
            <tbody center>
                <tr *ngFor="#row of tableRows">
                    <td>{{ row.name }}</td>
                    <td>{{ row.age }}</td>
                    <td>{{ row.salary }}</td>
                </tr>
            <tbody>
    </table>
              `,
    styleUrls: ["../src/css/app.css"]
            })
export class Table01Component {
  public tableTitle = "Table 01";
  public tableHead = {name: "Name", position: "Position", office: "Office", age: "Age", startDate: "Start Date", salary: "Salary"};
  public tableFoot = {name: "Name", position: "Position", office: "Office", age: "Age", startDate: "Start Date", salary: "Salary"};
  public tableRows = [{name: "User 01", position: "Position", office: "Office", age: "21", startDate: "Start Date", salary: "Salary"},
                      {name: "User 02", position: "Position", office: "Office", age: "22", startDate: "Start Date", salary: "Salary"},
                      {name: "User 03", position: "Position", office: "Office", age: "23", startDate: "Start Date", salary: "Salary"},
                      {name: "User 04", position: "Position", office: "Office", age: "24", startDate: "Start Date", salary: "Salary"}];
}
