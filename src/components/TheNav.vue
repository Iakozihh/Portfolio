<template>
  <nav>
    <RouterLink class="text-xl max-sm:text-lg font-bold" to="/">Vandamme Félix</RouterLink>
    <div class="links max-sm:flex-col">
      <RouterLink class="link max-sm:text-xs" to="/">Accueil</RouterLink>
      <RouterLink class="link max-sm:text-xs" to="/music">Musique</RouterLink>
      <RouterLink class="link max-sm:text-xs" to="/skills">Compétences</RouterLink>
      <RouterLink class="link max-sm:text-xs" to="/cv">CV</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: hsl(212, 13%, 19%);
  color: white;
  display: flex;
  align-items: center;
  z-index: 2;
}

nav::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5px;
  background: linear-gradient(
    270deg,
    rgb(220 252 231),
    rgb(74 222 128),
    rgb(22 163 74),
    rgb(22 101 52),
    rgb(22 163 74),
    rgb(74 222 128),
    rgb(220 252 231)
  );
  background-size: 500% 100%;
  animation: scrollGradient 5s linear infinite;
}

nav .links {
  margin-left: auto;
  display: flex;
}

nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
}

nav .link {
  position: relative;
  padding: 1rem 0 0.5rem;
  margin: 0 1.5rem;
  text-transform: uppercase;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    transform-origin: 50% 50%;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: transform 250ms;
  }

  &:hover {
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
}

nav a.router-link-active,
nav a:hover {
  opacity: 1;
}

@keyframes scrollGradient {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
