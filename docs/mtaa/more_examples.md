---
sidebar_position: 4
---

# More Examples

Let's see other examples on use case of the package;

## Top common street names

For example you were to write a python script to print the top 10 common name for streets in Tanzania, you can easily write as follow;

```python
>>> import mtaa
>>> from collections import Counter
>>> for common_street in Counter(mtaa.streets).most_common(10):
...     print(common_street)
... 
('Majengo', 59)
('', 49)
('Muungano', 49)
('Songambele', 35)
('Mtakuja', 29)
('Kichangani', 21)
('Sokoni', 20)
('Mbuyuni', 19)
('Kisiwani', 19)
('Mbugani', 18)
```

