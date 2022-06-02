function val()
{
    var rut = document.formulario.rut.value
    var nombre = document.formulario.nombre.value
    var telefono = document.formulario.telefono.value
    var titulo = document.formulario.titulo.value
    var genero = document.formulario.genero.value
    var descripcion = document.formulario.descripcion.value
    var idioma = document.formulario.idioma.value


    if (nombre.length < 4)
    {
        alert("Nombre debe tener más de 3 caracteres")
        return false
    }
    if (titulo.length<4)
    {
        alert("Titulo debe tener más de 3 caracteres")
        return false
    }
    if (descripcion.length<4)
    {
        alert("Descripción debe tener más de 3 caracteres")
        return false
    };
    if (!rut.includes("-",-1))
    {
        
        alert("Rut Incorrecto,debe incluir el guion")
        return false
    }
    if (!rut.length == 9)
    {
        alert("Rut Incorrecto,debe tener entre 9 y 10 caracteres")
        return false
    }
        
    if (!telefono.startsWith("9") && telefono.includes("+"))
    {
        alert("Telefono incorrecto, debe iniciar con un 9 y no incluir el +")
        return false
    }
}

function validacion()
{
    val()
    window.alert("Rut: " + alertobj.rut <br>
                 "Nombre: " + alertobj.nombre <br>
                 "Telefono: " + alertobj.telefono <br>
                 "Titulo del libro solicitado: " + alertobj.titulo <br>
                 "Descripcion: " + alertobj.descripcion)
}
