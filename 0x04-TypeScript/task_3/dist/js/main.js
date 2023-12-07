var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as CRUD from './crud';
// Creating an object called 'row' with the type RowElement
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
// Inserting a row and capturing the returned ID
var newRowID = CRUD.insertRow(row);
console.log("CRUD.insertRow(obj)\n// Insert row ".concat(JSON.stringify(row)));
// Updating 'row' with an age field set to 23
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
console.log("CRUD.updateRow(newRowID, updatedRow)\n// Update row ".concat(newRowID, " ").concat(JSON.stringify(updatedRow)));
// Deleting the row using the captured ID
CRUD.deleteRow(newRowID);
console.log("CRUD.deleteRow(".concat(newRowID, ")\n// Delete row id ").concat(newRowID));
//# sourceMappingURL=main.js.map