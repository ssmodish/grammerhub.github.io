<template>
  <div class="page-wrapper">
    <!-- Header -->
    <header id="header">
      <h1 id="logo">
        <a href="/">g r a m m e r h u b</a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <g-link to="/hire/developers">find talent</g-link>
          </li>
          <li>
            <a href="#one">about</a>
          </li>
          <li>
            <a
              href="https://www.meetup.com/grammerhub"
              class="button primary"
              target="”_blank”"
            >join</a>
          </li>
        </ul>
      </nav>
    </header>
    <slot />

    <!-- Footer -->
    <footer id="footer">
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
            href="http://bit.ly/grammerhub-slack"
            target="”_blank”"
            class="icon brands alt fa-slack"
          >
            <span class="label">Slack</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.meetup.com/grammerhub"
            target="”_blank”"
            class="icon brands alt fa-meetup"
          >
            <span class="label">Meetup</span>
          </a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Grammerhub 2020 - 2021. All Rights Reserved.</li>
      </ul>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>