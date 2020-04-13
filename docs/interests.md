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
      icon: camping
---

## Interests
<grid-container>
<interests-card v-for="i in $frontmatter.interests">
    <template v-slot:icon>
        <font-awesome-icon :icon="['fas', i.icon]" />
    </template>
    <template v-slot:description>
        {{ i.name }}
    </template> 
</interests-card>
</grid-container>
