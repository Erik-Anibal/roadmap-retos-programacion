 # EJERCICIO:
 # - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 #   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 #   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 # - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 #   que representen todos los tipos de estructuras de control que existan
 #   en tu lenguaje:
 #   Condicionales, iterativas, excepciones...
 # - Debes hacer print por consola del resultado de todos los ejemplos.
 #
 # DIFICULTAD EXTRA (opcional):
 # Crea un programa que imprima por consola todos los números comprendidos
 # entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 #
 # Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 #

# Números del 10 al 55, pares, sin 16 ni múltiplos de 3

for i in range(10,56):
    if i %2 == 0 and i != 16 and i % 3 !=0:
        print(i)


# Operadores aritméticos, lógicos, de comparación, de asignación, de identidad, de pertenencia y de bits
suma = 5 + 3       # 8
resta = 5 - 3      # 2
multiplicacion = 5 * 3 # 15
division = 5 / 3   # 1.666...
modulo = 5 % 3     # 2
incremento = suma + 1  # 9
decremento = resta - 1  # 1

and_logico = True and False  # False
or_logico = True or False    # True
not_logico = not True        # False

igual = 5 == 5          # True
diferente = 5 != 3      # True
mayor = 5 > 3           # True
menor = 5 < 3           # False
mayor_igual = 5 >= 5    # True
menor_igual = 5 <= 3    # False

x = 5
x += 3  # 8
x -= 2  # 6
x *= 2  # 12
x /= 2  # 6.0
x %= 4  # 2

a = [1, 2, 3]
b = a
print("a es igual que b? ")
print(a is b)  # True

arr = [1, 2, 3]
print("el 2 está en el arreglo arr? ")
print(2 in arr)  # True


and_bits = 5 & 1    # 1
or_bits = 5 | 1     # 5
xor_bits = 5 ^ 1    # 4
not_bits = ~5       # -6
desplazamiento_izq = 5 << 1  # 10
desplazamiento_der = 5 >> 1  # 2

# Estructuras de control
import random

edad = random.randint(10, 80)

if edad >= 18:
    print("Eres mayor de edad")
elif edad >= 13:
    print("Eres adolescente")
else:
    print("Eres menor de edad")

diaNumerico = random.randint(1,7)
diaConLetras = "un dia de la semana"

if diaNumerico == 1:
    diaConLetras = "Domingo"
    print(diaNumerico, diaConLetras)
elif diaNumerico == 2:
    diaConLetras = "Lunes"
    print(diaNumerico, diaConLetras)
else:
    print(diaNumerico, "no es domingo ni lunes")

for i in range(5):
    print("For",i)

contador = 0

while contador < 5:
    print("while",contador)
    contador += 1

try:
    x = y + 1  # y no está definido
except NameError as error:
    print("Ha ocurrido un error: " + str(error))