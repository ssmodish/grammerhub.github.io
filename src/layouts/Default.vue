<template>
  <div class="page-wrapper">
    <!-- Header -->
    <header id="header">
      <h1 id="logo">
        <g-link to="/">g r a m m e r h u b</g-link>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <g-link to="/">home</g-link>
          </li>
          <li>
            <g-link to="/hire/developers">find talent</g-link>
          </li>
          <li>
            <g-link to="/#about">about</g-link>
          </li>
          <li>
            <g-link
               to="https://www.meetup.com/grammerhub"
              class="button primary"
              target="”_blank”"
            >join</g-link>
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