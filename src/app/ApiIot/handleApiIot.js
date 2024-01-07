// Post: Convert Image in bucket S3 to pdf
import Swal from 'sweetalert2';

async function handleApiIot(isSwitchOn, led1) {
  

  // Swal.fire({
  //   title: 'Cargando...',
  //   allowOutsideClick: false,
  //   showConfirmButton: false,
  //   didOpen: () => {
  //     Swal.showLoading();
  //   },
  // });
 
  const ledValue = isSwitchOn ? 0 : 1;
  
  const requestBody = { led1: ledValue, Fecha: "2024-01-10", topic: "datarecive1" };
  console.log(requestBody)

  const baseUrlIot = '/api/apiPostIot'

  const response = await fetch(baseUrlIot, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const result = await response.json();

  console.log(result)

  // Swal.fire({
  //   title: `FELICITACIONES `,
  //   icon: 'success',
  //   text: 'Usted puede calificar para un bono FISE del gobierno Peruano',
  // });


}

export default handleApiIot;
