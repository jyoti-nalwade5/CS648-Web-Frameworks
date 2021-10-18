/*eslint-env browser*/

function commandMenu() {
    "use strict";
    window.console.log("Product Inventory Management System!");
    window.console.log("");
    window.console.log("Command menu Details:");
    window.console.log("View - View inventory");
    window.console.log("Update - Update an existing products inventory");
    window.console.log("Exit - Exit the program");
    window.console.log("");
}
function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var foundsku = false;
    var quantityUpdated = false;
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    inventory.forEach(function (product) {
        if (product[0] === skuNumber) {
            foundsku = true;
            while(!quantityUpdated) {
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated successfully")
                    quantityUpdated = true;
                } else {
                    window.console.log("Invalid quantity. Please renter quantity");
                    window.console.log("");
                }
            }
        }  
    });
    if (!foundsku){
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    } 
}

function main() {
    "use strict";
    var inventory = [[4585, "Caps", 12, 15.99],[4586, "Shirts", 25, 59.99],[4587, "Jeans", 26, 19.99],[4588, "Hoodie", 8, 12.99],[4889, "jacket", 10, 49.99]];
    commandMenu();
    var exitProgram = false;

    while(!exitProgram) {
        var command = window.prompt("Enter command");
        if(command !== null) {
            switch(command.toLowerCase()) {
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    exitProgram = true;
                    break;
                default:
                    window.alert("Not a valid command");
                    break;
            }
        } else {
            break;
        }
    }
    window.console.log("Program Terminated.")
}

main();