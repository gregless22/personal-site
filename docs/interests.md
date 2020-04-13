---
title: Interests
lang: en-US
interests:
    - name: Hiking
      icon: hiking
    - name: Surfing
      icon: water
    - name: Running
      icon: running
    - name: Films
      icon: video
    - name: Cooking
      icon: pizza-slice
    - name: Snowboarding
      icon: snowboarding
    - name: Camping
      icon: campground
---

## Interests
<grid-container>
<span v-for="i in $frontmatter.interests">
<interests-card>
::: slot icon
    <font-awesome-icon :icon="['fas', i.icon]" />
:::
::: slot description
    {{ i.name }}
:::
</interests-card>
</span>
</grid-container>
