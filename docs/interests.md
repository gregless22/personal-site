---
title: Interests
lang: en-US
interests:
    - name: Hiking
      icon: hiking
    - name: Surfing
      icon: wave
    - name: Running
      icon: running
    - name: Films
      icon: video
    - name: Cooking
      icon: pizza-slice
    - name: Snowboarding
      icon: snowboarding
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
<font-awesome-icon :icon="['fas', 'hiking']" />
<font-awesome-icon :icon="['fas', 'user-secret']" />
<font-awesome-icon :icon="['fab', 'font-awesome']" />
