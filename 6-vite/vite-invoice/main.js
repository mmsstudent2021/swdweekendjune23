import Swal from 'sweetalert2';
import Invoice from './src/Invoice'
import './style.css'


// Swal.fire({
//     title : "San Kyi tar",
//     text : "hello hello hello",
//     icon : "error"
// })


const invoice = new Invoice();
invoice.init()