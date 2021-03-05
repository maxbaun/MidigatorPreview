// Add data
var data = [
  ["", "Ford", "Volvo", "Toyota", "Honda"],
  ["2014", 10, 11, 12, 13],
  ["2015", 20, 11, 14, 13],
  ["2016", 30, 15, 12, 13]
];

// Define element
var container = document.getElementById('example');

// Initialize with options
var hot = new Handsontable(container, {
  data: data,
  minSpareRows: 1,
  rowHeaders: true,
  colHeaders: true,
  contextMenu: true
});