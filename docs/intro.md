---
sidebar_position: 1
---

# A strory behind

A package consisting of all Tanzania locations from region to streets in a easy accessible way made by [kalebu](https://github.com/kalebu)

When it come to building application that will allow people to locate or localize certain things in tanzania has been a struggle for many developers due to lack of a single public json with all organized locations.

It was during the hackerthon organized by the [HACKAIO](https://github.com/hackaio) team at Univeristy of Dar-es-Salaam (COICT), as we were having a coffee break, a fellow hacker introduced me to organized location data in a [HACKEAC](https://github.com/HackEAC) repository.

The repository consisted of location data in csv files grouped by regions, each regions had all the locations information about it, starting from districts, wards, streets, neighborhoods together with their associated postcodes.

I then thought of writing a python script that could transform all the csv information into a single json file to easy its usage, So I did and wrote a [**transformer.py**](https://github.com/Kalebu/mtaa/blob/main/json_transformer.py) script that does that, and later thought of packaging it as python library to easy allow python developers access those informations without a less sweat which lead me to create a library called [mtaa](https://github.com/Kalebu/mtaa/) that does that.

mtaa is selfish since it only works with python so [Anorebel](https://github.com/AnoRebel) decided to make a general purpose API based on mtaa (mtaaAPI[https://github.com/HackEAC/mtaaAPI]) that would allow developers from other languages to quickly access locations

In this documentation, I have combined both documentation for **mtaa** and **mtaaAPI**.

When you see any typo or grammatical errors in this documentation, contributions is welcomed and encouraged, you can do that by;

- Forking the repository
- Updating your change or corrections
- Submiting your pull request
- Congrats you're merged !!

:::caution
If you face any issue or bug with the usage please raise one on the github repository so as we can fix it as soon as possible. 
