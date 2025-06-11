export const contents = [
    {
        slug:"",
        content:`# Pilares de la Programación Orientada a Objetos (POO)

Una guía completa que cubre **abstracción, encapsulamiento, herencia y polimorfismo** con ejemplos en C#.

## 📌 ¿Qué es la POO?

La Programación Orientada a Objetos es un paradigma que organiza el software en **objetos** que encapsulan **datos** y **comportamientos** relacionados. Este enfoque facilita la reutilización, el mantenimiento y la escalabilidad del código.

---

## 🔑 Los 4 pilares fundamentales

### 1. 🧬 Abstracción

| Aspecto | Descripción |
|---------|-------------|
| **Definición** | Proceso de ocultar los detalles internos y exponer solo lo esencial. |
| **Ventajas** | Reduce complejidad, mejora la claridad y fomenta la modularidad. |

\`\`\`csharp
public abstract class Animal
{
    public abstract void HacerSonido();
}

public class Perro : Animal
{
    public override void HacerSonido() => Console.WriteLine("Guau!");
}
\`\`\`

---

### 2. 🛡️ Encapsulamiento

| Aspecto | Descripción |
|---------|-------------|
| **Definición** | Oculta los datos internos y los protege mediante métodos públicos controlados. |
| **Ventajas** | Incrementa la seguridad y reduce el acoplamiento. |

\`\`\`csharp
public class CuentaBancaria
{
    private decimal saldo;

    public void Depositar(decimal cantidad)
    {
        if (cantidad > 0) saldo += cantidad;
    }

    public decimal ObtenerSaldo() => saldo;
}
\`\`\`

---

### 3. 🏗️ Herencia

| Aspecto | Descripción |
|---------|-------------|
| **Definición** | Permite que una clase derive de otra y reutilice su funcionalidad. |
| **Ventajas** | Reutilización de código y organización jerárquica. |

\`\`\`csharp
public class Vehiculo
{
    public void Arrancar() => Console.WriteLine("Vehículo arrancado.");
}

public class Coche : Vehiculo
{
    public void TocarClaxon() => Console.WriteLine("Beep!");
}
\`\`\`

---

### 4. 🔄 Polimorfismo

| Aspecto | Descripción |
|---------|-------------|
| **Definición** | Capacidad de un objeto de adoptar múltiples formas y comportarse de manera diferente según el contexto. |
| **Ventajas** | Otorga flexibilidad, código más limpio y reutilizable. |

\`\`\`csharp
public class Animal
{
    public virtual void Hablar() => Console.WriteLine("Algún sonido");
}

public class Gato : Animal
{
    public override void Hablar() => Console.WriteLine("Miau");
}

public class Perro : Animal
{
    public override void Hablar() => Console.WriteLine("Guau");
}
\`\`\`

---

## 🧠 ¿Por qué son importantes estos pilares?

- **Mantenibilidad:** el código es más fácil de entender y modificar.
- **Escalabilidad:** permite agregar nuevas funcionalidades sin romper la base existente.
- **Reutilización:** promueve patrones y estructuras que evitan duplicación.

---

## 📝 Ejemplo práctico: Sistema de usuarios

\`\`\`csharp
// Abstracción & Herencia
public abstract class Usuario
{
    public string Nombre { get; set; }
    public abstract void MostrarRol();
}

public class Administrador : Usuario
{
    public override void MostrarRol() => Console.WriteLine("Administrador");
}

public class Cliente : Usuario
{
    public override void MostrarRol() => Console.WriteLine("Cliente");
}

// Encapsulamiento
public class UsuarioService
{
    private readonly List<Usuario> _usuarios = new();

    public void AgregarUsuario(Usuario usuario) => _usuarios.Add(usuario);

    public IEnumerable<Usuario> ObtenerUsuarios() => _usuarios;
}

// Polimorfismo
foreach (var user in service.ObtenerUsuarios())
{
    user.MostrarRol(); // Cada tipo de usuario muestra su rol respectivo
}
\`\`\`

---

## 🎯 Errores comunes al aplicar POO

1. **Sobrecargar jerarquías** de herencia.
2. Usar **getters/setters públicos** indiscriminadamente (rompe encapsulamiento).
3. Olvidar la **cohesión**: clases con demasiadas responsabilidades.

---

## 📚 Recursos recomendados

- *Clean Code* – Robert C. Martin  
- *Head First Object‑Oriented Analysis & Design* – Brett McLaughlin  
- Documentación oficial de C# sobre POO  

---

## ⭐ Conclusión

Dominar los pilares de la POO es esencial para escribir **código robusto, escalable y mantenible**. Practica cada pilar con ejemplos reales y aplica principios SOLID para llevar tu arquitectura al siguiente nivel.
`
    }
]