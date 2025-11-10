---
slug: mindset-summarize-data
---


```python

grouped = df.groupby("category_column").agg({
    "value_column": ["sum", "mean", "count"]
}).reset_index()