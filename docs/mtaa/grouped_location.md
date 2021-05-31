---
sidebar_position: 3
---

# Grouped locations

So far we have seen how to use mtaa to access certain information at a particular location level, now let's see how we can use it to fetch grouped information such as all regions, districts, wards , districts and also fetching whole tree from a particular location level

## Regions 

You can use your previous knowledge about mtaa to access all the regions from the top level *mtaa.Tanzania* objects or from *mtaa.regions* as shown below;

```python
>>> import mtaa 
>>> list(mtaa.tanzania)
['Shinyanga', 'Mara', 'Dar-es-salaam', 'Kilimanjaro', 'Kagera', 'Tanga', 'Mwanza', 'Tabora', 'Kigoma', 'Pwani', 'Ruvuma', 'Mtwara', 'Morogoro', 'Rukwa', 'Katavi', 'Simiyu', 'Geita', 'Arusha', 'Iringa', 'Mbeya', 'Njombe', 'Manyara', 'Lindi', 'Singida', 'Songwe', 'Dodoma']
>>> list(mtaa.regions)
['Shinyanga', 'Mara', 'Dar-es-salaam', 'Kilimanjaro', 'Kagera', 'Tanga', 'Mwanza', 'Tabora', 'Kigoma', 'Pwani', 'Ruvuma', 'Mtwara', 'Morogoro', 'Rukwa', 'Katavi', 'Simiyu', 'Geita', 'Arusha', 'Iringa', 'Mbeya', 'Njombe', 'Manyara', 'Lindi', 'Singida', 'Songwe', 'Dodoma']
```

## Districts

To access all districts in tanzania, together with their post code, you just need to access *districts* attribute as shown below;

```python
>>> import mtaa 
>>> mtaa.districts
[{'post_code': '371', 'name': 'Shinyanga\ncbd'}, {'post_code': '372', 'name': 'Shinyanga'}, {'post_code': '373', 'name': 'Kahama'}, {'post_code': '375', 'name': 'Kishapu'}, {'post_code': '311', 'name': 'Musoma cbd'}, {'post_code': '312', 'name': 'Butiama'}, {'post_code': '313', 'name': 'Rorya'}, {'post_code': '314', 'name': 'Tarime'}, {'post_code': '315', 'name': 'Bunda'}, {'post_code': '316', 'name': 'Serengeti'}, {'post_code': '11', 'name': 'Ilala cbd'}
......
>>> len(mtaa.districts)
158
```

## Wards

You can also access all the wards in the country by accessing *wards* attribute as shown below;

```python
>>> import mtaa
>>> mtaa.wards
{'post_code': '41812', 'name': 'Mpendo'}, {'post_code': '41813', 'name': 'Makorongo'}, {'post_code': '41814', 'name': 'Mondo'}, {'post_code': '41815', 'name': 'Dalai'}, {'post_code': '41816', 'name': 'Jangalo'}, {'post_code': '41817', 'name': 'Churuku'}, {'post_code': '41818', 'name': 'Msaada'}, {'post_code': '41819', 'name': 'Songolo'}, {'post_code': '41820', 'name': 'Soya'}, {'post_code': '41821', 'name': 'Kimaha'}, {'post_code': '41822', 'name': 'Kidoka'}
......
>>> len(mtaa.wards)
3964
```

## Streets

You can also access all streets in Tanzania in a similar fashion as shown below;

```python
>>> import mtaa
>>> mtaa.streets
['Magungu', 'Hamia', 'Kubi', 'Makorongo', 'Khubunko', 'Maziwa', 'Mondo', 'Daki', 'Waida', 'Pongai', 'Dalai', 'Tandala', 'Njoeni muone', 'Itirikwi', 'Mtakuja', 'Piho', 'Kelema maziwani', 'Jangalo', 'Mlongia', 'Itolwa', 'Chemka', 'Churuku', 'Jinjo', 'Kinkima', 'Msaada', 'Songambele', 'Machiga', 'Changamka', 'Majengo mapya', 'Songolo', 'Madaha', 'Hamai', 'Chioli', 'Soya', 'Chang’ombe', 'Magandi', 'Mbarada', 'Mwailanje', 'Mwaikisabe', 'Chukuruma', 'Wisuzaje', 'Kidoka', 'Ombiri', 'Muungano']
.......
>>> len(mtaa.streets)
16741
```

## Fetching a Whole location tree

You can also fetch the whole location tree at a particular location level, for instance if your on a districts level when you use *tree()*, it will fetch all lower level branches starting from all wards, streets and neighborhoods present in that district;

```python
>>> from mtaa import tanzania
>>> tanzania.Mbeya.districts.Rungwe.wards.Kiwira.tree()
{'ward_post_code': '53515', 'streets': {'Mpandapanda': ['Ipoma', 'Kiwira kati', 'Mpandapanda', 'Ilongoboto', 'Isange'], 'Kikota': ['Lukwego', 'Lubwe', "Kang'eng'e", 'Ilamba', 'Kikota', 'Ipande'], 'Ibula': ['Kibumbe', 'Ibula', 'Kanyegele', 'Sanu - salala kalongo', 'Katela'], 'Ilundo': ['Bujinga', 'Ibagha a', 'Buswema', 'Ibagha b', 'Kanyambala', 'Lusungo'], 'Ilolo': ['Ibigi', 'Ilolo', 'Itekele', 'Masebe', 'Masugwa', 'Kisungu']}}
```

Well you're done with grouped locations 