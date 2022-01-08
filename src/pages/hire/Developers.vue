<template>
  <Layout>
    <!-- Banner -->
    <section id="banner">
      <div class="content align-center">
        <header>
          <span class="image logo">
            <img src="@/assets/images/pic01.jpg" alt="Grammerhub Logo" />
          </span>
          <br />
          <br />
          <h2>GRAMMERHUB | DEVELOPERS</h2>
          <p>
            Let's write a paragraph about the developers featured at Grammerhub. How can other developers
            participate in our
            community and how they can be featured here.
          </p>
          <br />
          <ul class="icons">
            <li>
              <a
                href="https://twitter.com/grammerhub"
                target="”_blank”"
                class="icon brands alt fa-twitter"
              >
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GrammerhubTeam"
                target="”_blank”"
                class="icon brands alt fa-github"
              >
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/grammerhub"
                target="”_blank”"
                class="icon brands alt fa-slack"
              >
                <span class="label">Slack</span>
              </a>
            </li>
            <li>
              <a
                href="http://bit.ly/grammerhub-slack"
                target="”_blank”"
                class="icon brands alt fa-meetup"
              >
                <span class="label">Meetup</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon solid alt fa-envelope">
                <span class="label">Email</span>
              </a>
            </li>
          </ul>
        </header>
      </div>
    </section>
    <a href="#one" class="goto-next scrolly">Next</a>

    <!-- developer info starts -->
    <section
      v-for="(developer, index) in developers"
      :key="index"
      id="one"
      class="spotlight bottom inactive"
      :class="`style${index + 1}`"
    >
      <span class="image fit main" id="dev-bg">
        <img id="devPageBg" src="@/assets/images/pic02.jpg" alt />
      </span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <span class="image-dev fit main">
                <img :src="developer.image" alt />
              </span>
            </div>
            <div class="col-4 col-12-medium">
              <header>
                <h2>{{ developer.name }}</h2>
                <p>{{ developer.title }}</p>
              </header>
              <p>{{ developer.description }}</p>
              <br />
            </div>
            <div class="col-4 col-12-medium">
              <h4>Skills</h4>
              <ul class="skills">
                <li v-for="skill in developer.skills">{{ skill }}</li>
              </ul>
              <h4>Portfolio</h4>
              <p>
                <a :href="developer.portfolio" target="”_blank”">{{ developer.portfolio }}</a>
              </p>
              <h3>Contact</h3>
              <ul class="icons">
                <li v-for="social in developer.social">
                  <a
                    :href="social.url"
                    target="”_blank”"
                    class="icon alt"
                    :class="icons[social.name]"
                  >
                    <span class="label">Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- developer info ends -->
  </Layout>
</template>

<script>
import SectionObserver from "@/mixin/SectionObserver.ts"
import developers from '@/data/developers.json'

export default {
  metaInfo: {
    title: 'In person coding sessions',
  },
  mixins: [SectionObserver],
  data() {
    return {
      developers,
      icons: {
        LinkedIn: 'brands fa-linkedin-in',
        Twitter: 'brands fa-twitter',
        GitHub: 'brands fa-github',
        Instagram: 'brands fa-instagram',
        Email: 'solid fa-envelope',
      }
    }
  }
}
</script>