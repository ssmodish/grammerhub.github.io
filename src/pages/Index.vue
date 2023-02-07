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
            <strong>DISCORD: </strong> 
            <a href="http://discord.grammerhub.org" target="_blank"> discord.grammerhub.org</a>
          </p>
        </header>
        <span class="image">
          <img src="@/assets/images/pic01.jpg" alt />
        </span>
      </div>
      <a href="#about" class="goto-next scrolly">Next</a>
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
