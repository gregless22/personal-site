---
title: Interests
lang: en-US
meta:
    - name: Hiking
      icon: ""
    - name: Surfing
      icon: ""
    - name: Running
      icon: ""
    - name: Films
      icon: ""
    - name: Cooking
      icon: ""
    - name: Snowboarding
      icon: ""
---

## Interests
<grid-container>

<div v-for="i in $frontmatter.meta">{{ i.name }} </div>

</grid-container>
