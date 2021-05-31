---
sidebar_position: 2
---

# Getting started

The library is very straight forward, at the very top of the library there is country which is tanzania and at the very bottoms are places in a given street and you access the locations as attributes just as shown in the example below;

## Example

```python

>>> from mtaa import tanzania
>>> tanzania
['Shinyanga', 'Mara', 'Dar-es-salaam', 'Kilimanjaro', 'Kagera', 'Tanga', 'Mwanza', 'Tabora', 'Kigoma', 'Pwani', 'Ruvuma', 'Mtwara', 'Morogoro', 'Rukwa', 'Katavi', 'Simiyu', 'Geita', 'Arusha', 'Iringa', 'Mbeya', 'Njombe', 'Manyara', 'Lindi', 'Singida', 'Songwe', 'Dodoma']

>>> tanzania.Mbeya.districts
['Mbeya cbd', 'Mbeya', 'Rungwe', 'Mbarali', 'Kyela', 'Chunya]
 
 
>>> tanzania.Mbeya.districts.Rungwe.wards
['ward_post_code', 'Bulyaga', 'Bagamoyo', 'Makandana', 'Msasani', 'Kawetele', 'Itagata', 'Ibigi', 'Kyimo', 'Suma', 'Masoko', 'Mpuguso', 'Malindo', 'Lufingo', 'Kiwira', 'Nkunga', 'Ikuti', 'Kisondela', 'Ilima', 'Bujela', 'Masukulu', 'Kisiba', 'Kabula', 'Lupata', 'Kambasegela', 'Kisegese', 'Itete', 'Lufilyo', 'Lwangwa', 'Mpombo', 'Isange', 'Kandete', 'Luteba', 'Isongole', 'Kinyala', 'Matwebe', 'Masebe', 'Swaya', 'Iponjola', 'Lupepo', 'Ndanto', 'Ntaba', 'Mpata']

```

## How about Dar-es-salaam ?

In the above example we were able to retreive locations of **Mbeya** region because, Mbeya is a valid python identifier, when you try to access **Dar-es-Salaam** it will ofcourse raise you an error just as shown below;

```python
>>> from mtaa import tanzania
>>> tanzania.Dar-es-salaam
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Tanzania' object has no attribute 'Dar'
```

To resolve this at anypoint where you a location name is an invalid identifier, use get_dict() instead of (.) operator to access it as shown in the example below;

```python
>>> from mtaa import tanzania 
>>> tanzania.get('Dar-es-salaam').districts
['Ilala cbd', 'Ilala', 'Kinondoni', 'Temeke', 'Ubungo', 'Kigamboni']

```

## Types ?

Since we can access the attributes by locations it obviously the **tanzania** is an Abstract data type (ADT) implemented using a class, we can see this by using python builtin functionality *type()*;

```python
>>> from mtaa import tanzania
>>> type(tanzania)
<class 'mtaa.Tanzania'>
```

In many cases you will want those locations to be in standard types whether that a list, tuple, or set to easy manipulate and interact with them as build an application but how ?

:::tip
tanzania object is iterable, that's means you can easy convert locations at any level location  into any iterable standard type whether that be a list, set or a tuple just as shown in the example below;

```python
>>> from mtaa import tanzania
>>> dar = tanzania.get('Dar-es-salaam').districts
>>> type(dar)
<class 'mtaa.Tanzania'>
>>> list(dar)
['Ilala cbd', 'Ilala', 'Kinondoni', 'Temeke', 'Ubungo', 'Kigamboni']
>>> set(dar)
{'Temeke', 'Kinondoni', 'Ilala', 'Ilala cbd', 'Kigamboni', 'Ubungo'}
>>> tuple(dar)
('Ilala cbd', 'Ilala', 'Kinondoni', 'Temeke', 'Ubungo', 'Kigamboni')
```
:::

## Looping over locations

As we have seen that since *mtaa.Tanzania* is an iterable, then thats means we can also loop through it.

:::note 
When we loop over a *Mtaa.Tanzania* , we are looping the locations as strings not objects, here an example on what I mean; 

```python
>>> for district in tanzania.Mbeya.districts:
...     print(type(district))
... 
<class 'str'>
<class 'str'>
.............
```
:::

If were to find the all the district in Mbeya that starts with **R**, our code is going to look like this;

```python
>>> for ds in tanzania.Mbeya.districts:
...     if ds.startswith('R'):
...             print(f'{ds} starts with R')
... 
Rungwe starts with R
```

In the next chapter we will see how to use mtaa to retrieve grouped locations data so keep reading