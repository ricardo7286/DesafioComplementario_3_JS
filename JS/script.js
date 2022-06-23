// MENU PRINCIPAL

alert("Hola Soy Ricardo Hernandez y este es mi tercer desafio complementario de JavaScript");
  
alert("Bienvenido al Sistema de Gestion Integral Electrónico de Pacientes");

const registrarPaciente = () => {//FUNCION REGISTRAR PACIENTE
    let listaPacientes = document.getElementById("listaPacientes");//OBTENEMOS EL ID DE LA LISTA DE PACIENTES
    let nombre = document.getElementById("nombre").value;//OBTENEMOS EL VALOR DEL INPUT NOMBRE
    let apellidoPaterno = document.getElementById("apellidoPaterno").value;// OBTENEMOS EL VALOR DEL INPUT APELLIDO PATERNO
    let apellidoMaterno = document.getElementById("apellidoMaterno").value;// OBTENEMOS EL VALOR DEL INPUT APELLIDO MATERNO
    let fechaNac = document.getElementById("fechaNac").value;// OBTENEMOS EL VALOR DEL INPUT FECHA DE NACIMIENTO
    let sexo = document.getElementById("sexo").value;// OBTENEMOS EL VALOR DEL INPUT SEXO
    let diagnostico = document.getElementById("diagnostico").value;// OBTENEMOS EL VALOR DEL INPUT DIAGNOSTICO
    let ta = document.getElementById("ta").value;// OBTENEMOS EL VALOR DEL INPUT TA
    let fc = document.getElementById("fc").value;// OBTENEMOS EL VALOR DEL INPUT FC
    let fr = document.getElementById("fr").value;// OBTENEMOS EL VALOR DEL INPUT FR
    let spo2 = document.getElementById("spo2").value;// OBTENEMOS EL VALOR DEL INPUT SPO2
    let notaEvolucion = document.getElementById("notaEvolucion").value;// OBTENEMOS EL VALOR DEL INPUT NOTA EVOLUCION

    let nuevopaciente = document.createElement("div");//CREAMOS UN NUEVO DIV
    nuevopaciente.innerHTML = `
    <div class="col">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">Nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}</h5>
    <pclass="card-text>Fecha de nacimiento: ${fechaNac}</p>
    <pclass="card-text>Sexo: ${sexo}</p>
    <pclass="card-text>Diagnostico: ${diagnostico}</p>
    <pclass="card-text>Tension arterial: ${ta}</p>
    <pclass="card-text>Frecuencia cardiaca:${fc}</p>
    <pclass="card-text>Frecuencia respiratoria${fr}</p>
    <pclass="card-text>SpO2: ${spo2}</p>
    <pclass="card-text>Nota de evolucion:${notaEvolucion}</p>
    </div>
    </div>
    </div>
    `;//IMPRIMIMOS LOS DATOS EN EL DIV
    listaPacientes.append(nuevopaciente);//AGREGAMOS EL DIV A LA LISTA DE PACIENTES
    alert("Paciente registrado correctamente");//MOSTRAMOS UN ALERTA DE REGISTRO CORRECTO
  }
  