---
slug: practice-letter-ifs
---

```python
import pandas as pd

df = pd.read_csv("public/practice1.csv")

def letter_grade(score: int) -> str:
    if score >= 90:
        return "A"

    if score >= 70:
        return "B"
        
    return "C"

df["letter_grade"] = df["test_score"].apply(letter_grade)
```
