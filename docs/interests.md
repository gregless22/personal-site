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
    <template v-slot:icon>
        <font-awesome-icon :icon="['fas', i.icon]" />
    </template>
    <template v-slot:description>
        {{ i.name }}
    </template> 
</interests-card>
</span>
</grid-container>
