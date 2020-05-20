<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          Education
        </h1>
      </v-col>
      <v-col>
        <h1>
          Experience
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline>
          <span v-for="(item, i) in items" :key="i">
            <v-timeline-item
              :left="item.school ? true : false"
              :right="item.company ? true : false"
              small
            >
              <template v-slot:opposite>
                <span>
                  {{
                    item.startYear == item.finishYear
                      ? item.startYear
                      : item.startYear + " - " + item.finishYear
                  }}
                </span>
              </template>
              <education-card
                v-if="item.school"
                :degree="item"
              ></education-card>
              <experience-card
                v-if="item.company"
                :experience="item"
              ></experience-card>
            </v-timeline-item>
          </span>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
export default {
  components: {
    EducationCard,
    ExperienceCard
  },
  data: () => ({
    degrees: [
      {
        startYear: 2017,
        finishYear: 2019,
        school: "Royal Melbourne Institute of Technology",
        title: "Bachelor of Information Technology",
        image: "timeline/rmit.jpg"
      },
      {
        startYear: 2016,
        finishYear: 2016,
        school: "Queensland University of Technology",
        title: "Master of Intelectual Property",
        image: "timeline/qut.jpg"
      },
      {
        startYear: 2002,
        finishYear: 2006,
        school: "University of Queensland",
        title: "Bachelor of Engineering Chemical (Honours IIB)",
        image: "timeline/uq.jpg"
      }
    ],
    experiences: [
      {
        startYear: 2019,
        startMonth: "July",
        finishYear: "Current",
        title: "Process Compliance Engineer / Programmer",
        company: "Newcrest",
        location: "Lihir Island, Papua New Guniea",
        image: "timeline/newcrest.jpg",
        tasks: "Maintaining compliance",
        achievements:
          "Engineering compliance for project department. Electrical licensing management software development."
      },
      {
        startYear: 2014,
        startMonth: "January",
        finishYear: 2015,
        finishMonth: "November",
        title: "Operations Engineer",
        company: "Santos",
        location: "Ballera Gas Center, Australia",
        image: "timeline/santos.jpg",
        tasks: "Making Gas",
        achievements: "Engineer"
      },
      {
        startYear: 2010,
        startMonth: "September",
        finishYear: 2013,
        finishMonth: "July",
        title: "Senior Facilites Engineer",
        company: "Shell / Spectra Energy",
        location: "Fort St John / Vancouver, Canada",
        image: "timeline/shell.jpg",
        tasks: "Making More Gas",
        achievements: "Engineer"
      },
      {
        startYear: 2007,
        startMonth: "August",
        finishYear: 2009,
        finishMonth: "October",
        title: "Graduate Process Engineer",
        company: "Worley Parsons",
        location: "Brisbane Australia",
        image: "timeline/caltex.jpg",
        tasks: "Designing oil refineries",
        achievements: "Engineer"
      }
    ]
  }),
  computed: {
    items: function() {
      let items = this.degrees.concat(this.experiences);
      // arrange by start year
      items.sort((a, b) => {
        return b.startYear - a.startYear;
      });
      return items;
    }
  }
};
</script>

<style scoped>
.v-timeline-item--after {
  text-align: right;
}
.v-timeline-item--before {
  text-align: left;
}
</style>
