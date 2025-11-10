---
slug: practice-total-hours
---

```python
import pandas as pd

df = pd.read_csv('public/practice1.csv')
df['total_hours'] = df['homework_hours'] + df['lab_hours']
```
