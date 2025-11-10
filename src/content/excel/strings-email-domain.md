---
slug: strings-email-domain
---

| Cell | Value / Formula |
| --- | --- |
| C1 | jamie.rivera@example.edu |
| D1 | `=RIGHT(C1, LEN(C1) - FIND("@", C1))` |
