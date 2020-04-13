---
title: Interests
lang: en-US
meta:
    - name: Hiking
        icon: ""
    - name: Surfing
  icon: ""
    - name: Running
    - name: Films
    - name: Cooking
    - name: Snowboarding
---

## Interests
<grid-container>

<div v-for="i in $frontmatter.meta">{{ i.name }} </div>

</grid-container>
