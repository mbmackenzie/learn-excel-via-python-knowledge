---
slug: mindset-transform-data
---

```python
df = df.loc[df["filter_column"] > 10]
df = df.drop(columns=["unnecessary_column"])
df["new_column"] = df["existing_column"] * 2
```