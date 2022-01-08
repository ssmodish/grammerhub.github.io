<template>
  <Layout>
    <!-- Banner -->
    <section id="banner">
      <div class="content">
        <header>
          <h2>Level-up your coding skills</h2>
          <p>
            <strong>WHERE:</strong> Online
            <br />
            <!-- 751 Park of Commerce Dr #126, Boca Raton, FL 33487<br /> -->
            <strong>WHEN:</strong> Every Monday at 6:30 PM EST
            <br />
            <strong>SLACK:</strong>
            <a href="http://bit.ly/grammerhub-slack" target="”_blank”">grammerhub.slack.com</a>
          </p>
        </header>
        <span class="image">
          <img src="@/assets/images/pic01.jpg" alt />
        </span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>

    <!-- One -->
    <section id="one" class="spotlight style1 bottom inactive">
      <span class="image fit main">
        <img src="@/assets/images/pic02.jpg" />
      </span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <header>
                <h2>What we're about</h2>
                <p>Peer Programming Sessions</p>
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                A meetup for people who are (relatively) new to programming, or who want to learn how to code - although everyone is welcome!
                <br />
                <br />Our goals for Grammerhub's weekly Monday coding nights*:
                <br />- Support independent projects and collaboration
                <br />- Build a community and provide accountability
                <br />- Provide opportunities to grow professionally with technology
              </p>
            </div>
            <div class="col-4 col-12-medium">
              <p>
                New to Grammerhub? No problem! We have volunteer organizers to help you get started.
                <br />
                <br />Grammerhub workspace on Slack:
                <a
                  href="http://bit.ly/grammerhub-slack"
                  target="”_blank”"
                >grammerhub.slack.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" class="goto-next scrolly">Next</a>
    </section>

    <!-- Two -->
    <section id="two" class="spotlight style2 right inactive">
      <span class="image fit main">
        <img src="@/assets/images/pic03.jpg" />
      </span>
      <div class="content">
        <header>
          <h2>How it works</h2>
        </header>
        <p>
          - 6:30 pm EST: We open our general video conference call (Intros, Q&A, Show-and-Tell, etc.)
          <br />- 7:00 pm EST: Work on Project(s)
          <br />- 8:15 pm EST: Wrap-up, announcements
        </p>
        <ul class="actions">
          <li>
            <a href="http://bit.ly/grammerhub-slack" target="”_blank”" class="button">Learn More</a>
          </li>
        </ul>
      </div>
      <a href="#three" class="goto-next scrolly">Next</a>
    </section>

    <!-- Three -->
    <section id="three" class="spotlight style3 left inactive">
      <span class="image fit main bottom">
        <img src="@/assets/images/pic04.jpg" alt />
      </span>
      <div class="content">
        <header>
          <h2>What you’ll learn</h2>
          <!-- <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p> -->
        </header>
        <p>
          - Web development techniques and syntax for programming in multiple languages
          <br />- How to deploy your code
          <br />- Resources for continued learning
        </p>
        <ul class="actions">
          <li>
            <a href="http://bit.ly/grammerhub-slack" target="”_blank”" class="button">Learn More</a>
          </li>
        </ul>
      </div>
      <a href="#four" class="goto-next scrolly">Next</a>
    </section>
    <!-- Five -->
    <section id="five" class="wrapper style2 special fade">
      <div class="container">
        <header>
          <h2>Get in touch</h2>
          <p>Drop us a line for any questions you might have to get you started or reach us on our Slack</p>
        </header>
        <form method="post" action="#" class="cta">
          <div class="row gtr-uniform gtr-50">
            <div class="col-8 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Your Email Address" />
            </div>
            <div class="col-4 col-12-xsmall">
              <input type="submit" value="Get Started" class="fit primary" />
            </div>
          </div>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
import SectionObserver from "@/mixin/SectionObserver.ts"

export default {
  metaInfo: {
    title: 'In person coding sessions',
  },
  mixins: [SectionObserver]
}
</script>