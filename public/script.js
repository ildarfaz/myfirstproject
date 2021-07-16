'use strict';
window.onload = function () {
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const button = document.getElementById('button1');
  const table = document.querySelector("#table1 tbody");
  createTable(tableData);
  //функция которая проверяет введенное имя на наличие в таблицы и удаляет строки которые отличаются от вводимого.
  input1.oninput = function () {
    let tableSort = new Array();
    let nameSearch = input1.value.toLowerCase();
    tableData.forEach(d => {
      let nameTable = d.name.toLocaleLowerCase().substring(0, nameSearch.length);
      if (nameSearch == nameTable) {
        tableSort.push(d);
      }
      createTable(tableSort);
    });
  }
  //функция чтобы показывать в таблицы конкретные компании
  input2.onchange = function () {
    let companyInput = input2.value;
    let tableSort = new Array();
    if (companyInput != "") {
      tableData.forEach(d => {
        if (companyInput == d.companyName) {
          tableSort.push(d);
        }
        createTable(tableSort);
      });
    } else {
      createTable(tableData);
    }
  }
  //функция которая создает таблицу по массиву
  function createTable(tableNow) {
    table.innerHTML = '';
    tableNow.forEach(d => {
      let row = '<tr>' +
        '<td><input type="checkbox"></td>' +
        '<td>' + d.name + '</td>' +
        '<td>' + d.email + '</td>' +
        '<td>' + d.companyName + '</td>' +
        '<td>' + d.role + '</td>' +
        '<td>' + d.forecast + '</td>' +
        '<td>' + getTimeFromMins(d.recentActivity) + '</td>' +
        '</tr>';
      table.innerHTML += row;
    });
  }
  function getTimeFromMins(mins) {
    if (mins < 60) {
      return mins + ' Minutes ago';
    } else {
      let hours = Math.round(mins / 60);
      if (hours < 24) {
        return hours + ' Hours ago';
      } else {
        let dt = new Date();
        dt.setTime(dt.getTime()-mins*60000);
        var options = { month: 'short' , day: 'numeric', year: 'numeric' };
        var dateformat = new Intl.DateTimeFormat('en', options);
        return dateformat.format(dt);
      }
    }
  }
};



