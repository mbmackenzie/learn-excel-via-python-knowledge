---
slug: practice-pass-flag
---

```python
import pandas as pd

df = pd.read_csv("public/practice1.csv")

def passed(grade: int) -> str:
    if grade >= 70:
        return "Yes"
        
    return "No"

df["passed_test"] = df["test_score"].apply(passed)
```
