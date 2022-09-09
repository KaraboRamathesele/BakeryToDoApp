
// Order Class: Represents an order to be made
class Order {
    constructor(order, customer, date) {
      this.order = order;
      this.customer = customer;
      this.date = date;
    }
  }
  
  // Table interface class: Handle table tasks
  class Table {
    static displayOrders() {
        const StoredOrders = [
            {
                order: 'Vanilla Cake',
                customer: 'Maria',
                date: '2022-08-08'
            },
            {
                order: 'Red Velvet Cake',
                customer: 'Arthur',
                date: '2022-08-09'
            }
        ];

        const bakeryOrders = StoredOrders;

        bakeryOrders.forEach((bakeryOrder) => Table.addOrdertoList(bakeryOrder));
    }

    static addOrdertoList(bakeryOrder) {
        const list = document.getElementById('#order-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${bakeryOrder.order}</td>
        <td>${bakeryOrder.customer}</td>
        <td>${bakeryOrder.date}</td>
        <td><a href="#" class="btn btn-success btn-sm checked">NAILED IT</a></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        // Add row to list 
        list.appendChild(row);
    }
  }
 
  
  // Store Class: Handle local Storage
  
  // Event: Display Order
  document.addEventListener('DOMContentLoaded', Table.displayOrders);
  
  // Event: Add a order
  document.querySelector('#order-form').addEventListener('submit',(e) => {
    //get form values
    const orderType = document.querySelector('#order').value;
    const customer = document.querySelector('#customer').value;
    const date = document.querySelector('#date').value;
  });
  
    // Prevent actual submit
    
  
    // Get form values
    
    // Validate
    
  // Event: Remove a Order
  
    // Remove book from Table
    
  
    // Remove book from store
   
  
    // Show success message