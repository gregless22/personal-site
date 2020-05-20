<template>
  <v-container>
    <v-row>
      <h1>Soft Skills</h1>
    </v-row>
    <v-row>
      <span v-for="(skill, i) in softSkills" :key="i">
        <soft-skills-card :skill="skill"></soft-skills-card>
      </span>
    </v-row>
    <v-row class="divider"></v-row>
    <v-row>
      <h1>
        Technical Skills
      </h1>
    </v-row>
    <v-row>
      <span v-for="(skill, i) in techSkills" :key="i">
        <tech-skills-card :skill="skill"></tech-skills-card>
      </span>
    </v-row>
  </v-container>
</template>

<script>
import SoftSkillsCard from "@/components/SoftSkillsCard";
import TechSkillsCard from "@/components/TechSkillsCard";
export default {
  components: {
    SoftSkillsCard,
    TechSkillsCard
  },
  data() {
    return {
      softSkills: [
        {
          title: "Effective Collaboration / Communication",
          example: "Lorem ipsum sdfkldsjfksal;dfjsadfhu"
        },
        { title: "Structured Problem Solving", example: "" },
        { title: "Independant Learning", example: "" },
        { title: "Dependable", example: "" },
        { title: "Willingness to Learn", example: "" }
      ],
      techSkills: [
        {
          title: "Vue.js",
          logo: "skills/vue.jpg",
          cl: 90
        },
        {
          title: "iOS (Swift)",
          logo: "skills/swift.jpg"
        },
        {
          title: "Go",
          logo: "skills/golang.jpg"
        },
        {
          title: "GraphQL",
          logo: "skills/graphql.jpg"
        },
        {
          title: "gRPC",
          logo: "skills/grpc.jpg"
        },
        {
          title: "Node.js",
          logo: "skills/node.jpg"
        },
        {
          title: "MySQL",
          logo: "skills/mysql.jpg"
        },
        {
          title: "Restfull API",
          logo: "skills/swagger.jpg"
        },
        {
          title: "Docker",
          logo: "skills/docker.jpg"
        },
        {
          title: "Kubernetes",
          logo: "skills/kubernetes.jpg"
        },
        {
          title: "Git",
          logo: "skills/git.jpg"
        },
        {
          title: "Circleci",
          logo: "skills/circleci.jpg"
        },
        {
          title: "Istio",
          logo: "skills/istio.jpg"
        },
        {
          title: "Google Cloud Platform",
          logo: "skills/gcp.jpg"
        },
        {
          title: "Prometheus",
          logo: "skills/prometheus.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.divider {
  margin: 50px 30px;
}
</style>
