---
title: Interests
lang: en-US
interests:
    - name: Hiking
      icon: hiking
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
<font-awesome-icon icon="user-secret" />
<div v-for="i in $frontmatter.interests">
<font-awesome-icon :icon="['fas', i.icon]" />{{ i.name }} </div>
<font-awesome-icon icon="hiking" />
<font-awesome-icon :icon="['fab', 'font-awesome']" />
</grid-container>
<font-awesome-icon icon="hiking" />
<font-awesome-icon :icon="['fab', 'font-awesome']" />
<font-awesome-icon :icon="['fas', 'user-secret']" />