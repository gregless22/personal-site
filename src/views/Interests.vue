<template>
  <v-container>
    <v-row>
      <h1>
        Interests
      </h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        { title: "Snowboarding" },
        { title: "Hiking" },
        { title: "Surfing" },
        { title: "Running" },
        { title: "Cooking" },
        { title: "Reading" }
      ],
      books: [
        {
          title: "Kubernetes - Up and Running",
          image: "./public/books/kubernetes-up-and-running.jpg",
          publisher: "O'Reilly"
        },
        {
          title: "Continuous Delivery with Spinnaker",
          image: "./public/books/continuous-delivery-with-spinnaker.jpg",
          publisher: "O'Reilly"
        },
        {
          title: "Modern Web Development on the Jamstack",
          image: "public/books/modern-web-development-on-the-jamstack.jpg",
          publisher: "O'Reilly"
        },
        {
          title: "JWT-Handbook",
          image: "public/books/jwt-handbook.jpg",
          publisher: "Auth0"
        },
        {
          title: "Kubernetes in Action",
          image: "public/books/kubernetes-in-action.jpg",
          publisher: "Manning"
        },
        {
          title: "Go Web Programming",
          image: "public/books/go-web-programming.jpg",
          publisher: "Manning"
        },
        {
          title: "Scaling Microservices",
          image: "public/books/scaling-microservices.jpg",
          publisher: "apigee - Google Cloud"
        },
        {
          title: "Maximising Microservices",
          image: "public/books/maximizing-microservices.jpg",
          publisher: "apigee - Google Cloud"
        },
        {
          title: "The Definitive Guide to Single Sign-on",
          image: "public/books/definitive-guide-to-sso.jpg",
          publisher: "Auth0"
        },
        {
          title: "Authentication Survival Guide",
          image: "public/books/authentication-survival-guide.jpg",
          publisher: "Auth0"
        },
        {
          title: "Vue Handbook",
          image: "public/books/vue-handbook.jpg",
          publisher: "Falvio Copes"
        }
      ]
    };
  }
};
</script>
