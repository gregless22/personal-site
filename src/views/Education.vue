<template>
  <v-container>
    <v-row>
      <H1>Education</H1>
    </v-row>
    <v-row v-for="(degree, index) in degrees" :key="index">
      <v-col>
        <EducationCard :degree="degree"></EducationCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EducationCard from "@/components/EducationCard";
export default {
  components: {
    EducationCard
  },
  data() {
    return {
      degrees: [
        {
          startYear: 2017,
          finishYear: 2019,
          school: "Royal Melbourne Institute of Technology",
          title: "Bachelor of Information Technology",
          image: "./rmit.jpeg"
        },
        {
          startYear: 2016,
          finishYear: 2016,
          school: "Queensland University of Technology",
          title: "Master of Intelectual Property",
          image: "./qut.jpeg"
        },
        {
          startYear: 2002,
          finishYear: 2006,
          school: "University of Queensland",
          title: "Bachelor of Engineering Chemical (Honours IIB)",
          image: "./uq.jpeg"
        }
      ]
    };
  }
};
</script>
