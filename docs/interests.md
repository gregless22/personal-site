---
title: Interests
lang: en-US
interests:
    - name: Hiking
      icon: "hiking"
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
<font-awesome-icon icon='{{ i.icon }}' />{{ i.name }} </div>

</grid-container>
